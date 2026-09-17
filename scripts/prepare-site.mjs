import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'

const projectRoot = process.cwd()
const outputRoot = join(projectRoot, '.site-content')
const contentRoots = ['wiki_zh', 'wiki_en', 'docs']

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
- [中文全量表格索引](/INDEX)
- [条目撰写标准](/docs/standards/条目撰写标准)

## 本站特点

- **100 个中文条目、100 个英文条目**：中英成对维护。
- **证据可追溯**：重要结论提供原始研究和 PMID。
- **明确不确定性**：区分观察性关联、因果证据与证据不足。
- **持续审计**：复核效果量、反面证据、利益冲突、人群适用性与时效性。

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
      await mkdir(dirname(destination), { recursive: true })
      await writeFile(destination, markdown.replaceAll('%25', 'percent'))
    }
  }

  await visit(sourceDirectory)
}

await rm(outputRoot, { recursive: true, force: true })
await mkdir(outputRoot, { recursive: true })

for (const root of contentRoots) await copyMarkdownTree(root)

for (const [source, destination] of [
  ['INDEX.md', 'INDEX.md'],
  ['README.md', 'README.md'],
  ['README_en.md', 'README_en.md']
]) {
  const markdown = await readFile(join(projectRoot, source), 'utf8')
  await writeFile(join(outputRoot, destination), markdown.replaceAll('%25', 'percent'))
}

await writeFile(join(outputRoot, 'index.md'), await homepage())

await cp(join(projectRoot, 'assets'), join(outputRoot, 'assets'), { recursive: true })
