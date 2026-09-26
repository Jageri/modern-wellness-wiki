import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

export const catalogPath = 'docs/tracking/entries.json'
export const repositoryUrl = 'https://github.com/Jageri/modern-wellness-wiki'
export const siteRoot = 'https://jageri.github.io/modern-wellness-wiki'

export function loadCatalog(root = process.cwd()) {
  return JSON.parse(readFileSync(join(root, catalogPath), 'utf8'))
}

export function markdownFiles(root, directory) {
  return readdirSync(join(root, directory), { withFileTypes: true }).flatMap((entry) => {
    const path = `${directory}/${entry.name}`
    return entry.isDirectory() ? markdownFiles(root, path) : entry.name.endsWith('.md') ? [path] : []
  })
}

export function sitePath(source) {
  return source.replaceAll('%', 'percent')
}

export function articleUrl(source) {
  return `${siteRoot}/${encodeURI(sitePath(source).replace(/\.md$/, ''))}`
}

export function auditUrl(source) {
  return `${repositoryUrl}/blob/main/${source.split('/').map(encodeURIComponent).join('/')}`
}

export function pmidsFrom(markdown) {
  return [...new Set([
    ...[...markdown.matchAll(/pubmed\.ncbi\.nlm\.nih\.gov\/(\d{6,9})/g)].map((match) => match[1]),
    ...[...markdown.matchAll(/PMID\s*[:：]?\s*\[?(\d{6,9})/gi)].map((match) => match[1])
  ])].sort()
}
