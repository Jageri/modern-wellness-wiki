import { execFileSync } from 'node:child_process'
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative, sep } from 'node:path'

import { loadCatalog, sitePath, auditUrl } from './content-catalog.mjs'

const projectRoot = process.cwd()
const entries = loadCatalog(projectRoot).entries
const entryByPath = new Map(entries.flatMap((entry) => [[entry.zh, entry], [entry.en, entry]]))
const outputRoot = join(projectRoot, '.site-content')
const siteOutputRoot = join(projectRoot, '.vitepress', 'dist')
const contentRoots = ['wiki_zh', 'wiki_en', 'docs']

function modifiedDates() {
  const output = execFileSync('git', [
    '-c', 'core.quotepath=false', 'log', '--format=@@%ct', '--name-only', '--', 'wiki_zh', 'wiki_en'
  ], { encoding: 'utf8' })
  const dates = new Map()
  let timestamp = ''
  for (const line of output.split('\n')) {
    if (line.startsWith('@@')) timestamp = line.slice(2)
    else if (line && !dates.has(line)) dates.set(line, new Date(Number(timestamp) * 1000).toISOString().slice(0, 10))
  }
  return dates
}

const dates = modifiedDates()

async function homepage() {
  return `---
title: 现代养生百科 / Modern Wellness Wiki
titleTemplate: 循证健康与长寿知识库 / Evidence-based health and longevity
description: 基于同行评审研究、逐条审计的中英文健康与长寿知识库。An evidence-based bilingual health and longevity wiki with transparent audits.
---

# 现代养生百科 / Modern Wellness Wiki

一个基于循证医学、面向普通读者的中英文健康与长寿知识库。

<span lang="en">An evidence-based bilingual health and longevity knowledge base written for general readers.</span>

请从左侧目录按分类浏览 ${entries.length} 个中文条目；进入 [English introduction](/README_en) 后，左侧会切换为独立的英文目录。

<span lang="en">Browse ${entries.length} Chinese entries from the sidebar. Open the [English introduction](/README_en) to switch the sidebar to the separate English directory.</span>

## 从这里开始 / Start here

- [中文项目说明 / Chinese introduction](/README)
- [English introduction / 英文项目说明](/README_en)
- [中文全量表格索引 / Complete Chinese table index](/catalog)
- [从日常决定开始 / Start with an everyday decision](/README#先找到与你有关的决定)
- [条目复审状态 / Entry review status](/docs/tracking/复审状态)

## 维护与反馈 / Maintenance and feedback

- [项目文档与规则分工 / Documentation and rule ownership](/docs/README)
- [待完善清单 / Improvement backlog](/docs/tracking/待完善条目清单)
- [历史审计档案 / Audit archive](https://github.com/Jageri/modern-wellness-wiki/tree/main/audits)
- [提交纠错 / Report a correction](https://github.com/Jageri/modern-wellness-wiki/issues/new)

本项目用于健康科普，不替代医生诊断、处方或个体化医疗建议。

<span lang="en">This project provides general health information and does not replace individual medical diagnosis, prescriptions or treatment.</span>
`
}

async function copyMarkdownTree(sourceRoot) {
  const sourceDirectory = join(projectRoot, sourceRoot)

  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const sourcePath = join(directory, entry.name)
      if (entry.isDirectory()) {
        await visit(sourcePath)
        continue
      }
      if (!entry.name.endsWith('.md')) continue

      const relativePath = sitePath(relative(projectRoot, sourcePath))
      const destination = join(outputRoot, relativePath)
      const markdown = await readFile(sourcePath, 'utf8')
      const sourceRelative = relative(projectRoot, sourcePath).split(sep).join('/')
      const title = markdown.match(/^#\s+(.+)$/m)?.[1].trim() ?? entry.name.replace(/\.md$/, '')
      const isEnglish = sourceRoot === 'wiki_en'
      const record = entryByPath.get(sourceRelative)
      if (sourceRoot.startsWith('wiki_') && !record) throw new Error(`Missing catalog entry: ${sourceRelative}`)
      const reviewBlock = sourceRoot.startsWith('wiki_') ? `

---

## ${isEnglish ? 'Review and corrections' : '审阅与纠错'}

- ${isEnglish ? 'Page last updated' : '页面最近更新'}：${dates.get(sourceRelative) ?? '—'}
- ${isEnglish ? 'Baseline evidence review' : '基础证据复审'}：${record?.evidenceReviewedOn} · [${isEnglish ? 'Entry audit record' : '本条审计记录'}](${record ? auditUrl(record.audit) : ''})
- ${isEnglish ? 'Next review due' : '下次复审期限'}：${record?.nextReviewDue}
- ${isEnglish ? 'Review method' : '审阅方式'}：${record?.reviewer} (${record?.reviewerType})${record?.reviewerType === 'ai' ? (isEnglish ? '; AI review, not a signed independent clinical review' : '；AI 审阅，不等同于独立医学专家署名复核') : ''}
- ${isEnglish ? 'Editorial responsibility' : '维护责任'}：[${isEnglish ? 'Repository maintainers' : '仓库维护者'}](https://github.com/Jageri/modern-wellness-wiki)
- ${isEnglish ? 'Translation' : '其他语言'}：[${isEnglish ? '中文' : 'English'}](/${record ? encodeURI(sitePath(record[isEnglish ? 'zh' : 'en']).replace(/\.md$/, '')) : ''})
${(record?.updates ?? []).map((update) => `- ${update.date} · [${isEnglish ? update.scopeEn : update.scope}](${auditUrl(update.audit)})`).join('\n')}
- ${isEnglish ? 'Review standard' : '复审标准'}：[${isEnglish ? 'Editorial and evidence standard' : '条目权威性审计标准'}](/docs/standards/条目权威性审计标准)
- ${isEnglish ? 'Report a problem' : '发现问题'}：[${isEnglish ? 'Open a GitHub issue' : '提交 GitHub Issue'}](https://github.com/Jageri/modern-wellness-wiki/issues/new?title=${encodeURIComponent(`${isEnglish ? 'Correction' : '纠错'}: ${title}`)})

${isEnglish
  ? '> This page provides general health information and does not replace individual medical diagnosis or treatment.'
  : '> 本页提供一般健康科普信息，不替代医生诊断、处方或个体化医疗建议。'}
` : ''
      await mkdir(dirname(destination), { recursive: true })
      const prepared = markdown.replaceAll('%25', 'percent').trimEnd()
      // Markdown footnotes render at the end; keep their heading beside the notes.
      const referencesAt = prepared.search(/^##\s+(?:关键)?参考|^##\s+(?:Key )?References/im)
      const content = reviewBlock && referencesAt >= 0
        ? `${prepared.slice(0, referencesAt).trimEnd()}${reviewBlock}\n${prepared.slice(referencesAt)}`
        : `${prepared}${reviewBlock}`
      await writeFile(destination, `${content}\n`)
    }
  }

  await visit(sourceDirectory)
}

await rm(outputRoot, { recursive: true, force: true })
await rm(siteOutputRoot, { recursive: true, force: true })
await mkdir(outputRoot, { recursive: true })

for (const root of contentRoots) await copyMarkdownTree(root)

for (const [source, destination] of [
  ['INDEX.md', 'catalog.md'],
  ['README.md', 'README.md'],
  ['README_en.md', 'README_en.md']
]) {
  const markdown = await readFile(join(projectRoot, source), 'utf8')
  await writeFile(join(outputRoot, destination), markdown.replaceAll('%25', 'percent').replaceAll('(INDEX.md)', '(catalog.md)'))
}

await writeFile(join(outputRoot, 'index.md'), await homepage())
const reviewRows = entries.map((entry) => {
  const title = entry.zh.split('/').at(-1).replace(/\.md$/, '')
  return `| ${entry.id} | [${title}](/${encodeURI(sitePath(entry.zh).replace(/\.md$/, ''))}) | ${entry.evidenceReviewedOn} | ${entry.nextReviewDue} | [审计 / Audit](${auditUrl(entry.audit)}) |`
}).join('\n')
await writeFile(join(outputRoot, 'docs/tracking/复审状态.md'), `# 条目复审状态 / Entry review status

共 ${entries.length} 对条目。日期来自已有审计记录，表示基础证据复审日期，不是页面排版或 Git 更新日期。补充核验和引用整理单独记录在各条目页底部，不重置复审期限。

Dates reflect the baseline evidence audit, not formatting changes or Git updates. Scoped updates are listed separately on each entry. AI reviews are not independent signed clinical reviews; repository maintainers retain editorial responsibility.

| ID | 条目 / Entry | 基础复审 / Baseline review | 下次期限 / Next due | 记录 / Record |
| --- | --- | --- | --- | --- |
${reviewRows}
`)


await cp(join(projectRoot, 'assets'), join(outputRoot, 'assets'), { recursive: true })
await mkdir(join(outputRoot, 'public'), { recursive: true })
await cp(join(projectRoot, 'public'), join(outputRoot, 'public'), { recursive: true })
await writeFile(join(outputRoot, 'public', 'robots.txt'), `User-agent: *
Allow: /

Sitemap: https://jageri.github.io/modern-wellness-wiki/sitemap.xml
`)
