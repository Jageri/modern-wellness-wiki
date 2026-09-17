import { execFileSync } from 'node:child_process'
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative, sep } from 'node:path'

const projectRoot = process.cwd()
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

function safePath(path) {
  return path.replaceAll('%', 'percent')
}

async function homepage() {
  return `---
title: 现代养生百科
titleTemplate: 循证健康与长寿知识库
description: 基于同行评审研究、逐条审计的中英文健康与长寿知识库。
---

# 现代养生百科

一个基于循证医学、面向普通读者的中英文健康与长寿知识库。

请从左侧目录按分类浏览 100 个中文条目；切换到 [English](/README_en) 后，左侧会显示独立的英文目录。

## 从这里开始

- [中文项目说明](/README)
- [English introduction](/README_en)
- [中文全量表格索引](/catalog)

## 本站特点

- **100 个中文条目、100 个英文条目**：中英成对维护。
- **证据可追溯**：重要结论提供原始研究和 PMID。
- **明确不确定性**：区分观察性关联、因果证据与证据不足。
- **持续审计**：复核效果量、反面证据、利益冲突、人群适用性与时效性。

## 审核与维护

本站公开条目的撰写、审核和持续维护规则，读者可以据此检查每条结论是如何形成的。

| 公开文档 | 说明 |
| --- | --- |
| [条目权威性审计标准](/docs/standards/条目权威性审计标准) | 核验引用、数据、反面证据、利益冲突、适用人群与时效性 |
| [条目完整性审计标准](/docs/standards/条目完整性审计标准) | 对照权威风险因素和主题范围，识别百科缺口 |
| [条目撰写标准](/docs/standards/条目撰写标准) | 统一条目结构、证据表达、引用格式与不确定性说明 |
| [待完善条目清单](/docs/tracking/待完善条目清单) | 公开当前仍需补充或复核的内容 |
| [历史审计档案](https://github.com/Jageri/modern-wellness-wiki/tree/main/audits) | 查看历次完整性审计、权威性审计及全库复审记录 |
| [提交纠错](https://github.com/Jageri/modern-wellness-wiki/issues/new?title=%E7%BA%A0%E9%94%99%EF%BC%9A) | 报告引用、数字、表述或页面问题 |

本项目用于健康科普，不替代医生诊断、处方或个体化医疗建议。
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

      const relativePath = safePath(relative(projectRoot, sourcePath))
      const destination = join(outputRoot, relativePath)
      const markdown = await readFile(sourcePath, 'utf8')
      const sourceRelative = relative(projectRoot, sourcePath).split(sep).join('/')
      const title = markdown.match(/^#\s+(.+)$/m)?.[1].trim() ?? entry.name.replace(/\.md$/, '')
      const isEnglish = sourceRoot === 'wiki_en'
      const reviewBlock = sourceRoot.startsWith('wiki_') ? `

---

## ${isEnglish ? 'Review and corrections' : '审阅与纠错'}

- ${isEnglish ? 'Page last updated' : '页面最近更新'}：${dates.get(sourceRelative) ?? '—'}
- ${isEnglish ? 'Evidence review' : '证据审阅'}：[${isEnglish ? 'Editorial and evidence standard' : '条目权威性审计标准'}](/docs/standards/条目权威性审计标准)
- ${isEnglish ? 'Report a problem' : '发现问题'}：[${isEnglish ? 'Open a GitHub issue' : '提交 GitHub Issue'}](https://github.com/Jageri/modern-wellness-wiki/issues/new?title=${encodeURIComponent(`${isEnglish ? 'Correction' : '纠错'}: ${title}`)})

${isEnglish
  ? '> This page provides general health information and does not replace individual medical diagnosis or treatment.'
  : '> 本页提供一般健康科普信息，不替代医生诊断、处方或个体化医疗建议。'}
` : ''
      await mkdir(dirname(destination), { recursive: true })
      await writeFile(destination, `${markdown.replaceAll('%25', 'percent').trimEnd()}${reviewBlock}\n`)
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
  await writeFile(join(outputRoot, destination), markdown.replaceAll('%25', 'percent'))
}

await writeFile(join(outputRoot, 'index.md'), await homepage())

await cp(join(projectRoot, 'assets'), join(outputRoot, 'assets'), { recursive: true })
await mkdir(join(outputRoot, 'public'), { recursive: true })
await writeFile(join(outputRoot, 'public', 'robots.txt'), `User-agent: *
Allow: /

Sitemap: https://jageri.github.io/modern-wellness-wiki/sitemap.xml
`)
