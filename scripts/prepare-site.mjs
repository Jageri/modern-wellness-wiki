import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'

const projectRoot = process.cwd()
const outputRoot = join(projectRoot, '.site-content')
const contentRoots = ['wiki_zh', 'wiki_en', 'docs']

function safePath(path) {
  return path.replaceAll('%', 'percent')
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
  ['INDEX.md', 'index.md'],
  ['README.md', 'README.md'],
  ['README_en.md', 'README_en.md']
]) {
  const markdown = await readFile(join(projectRoot, source), 'utf8')
  await writeFile(join(outputRoot, destination), markdown.replaceAll('%25', 'percent'))
}

await cp(join(projectRoot, 'assets'), join(outputRoot, 'assets'), { recursive: true })
