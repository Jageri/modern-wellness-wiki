import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const projectRoot = process.cwd()
const siteRoot = 'https://jageri.github.io/modern-wellness-wiki'
const repositoryUrl = 'https://github.com/Jageri/modern-wellness-wiki'

type EntryMeta = {
  route: string
  title: string
  description: string
  language: 'zh-CN' | 'en'
  modified?: string
  citations: string[]
  alternate?: string
}

function contentFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? contentFiles(path) : entry.name.endsWith('.md') ? [path] : []
  })
}

function safeRelativePath(path: string) {
  return relative(projectRoot, path).split(sep).join('/').replaceAll('%', 'percent')
}

function routeFromRelative(path: string) {
  if (path === 'index.md') return '/'
  return `/${path.replace(/\.md$/, '')}`
}

function absoluteUrl(route: string) {
  if (route === '/') return `${siteRoot}/`
  return `${siteRoot}${encodeURI(route)}`
}

function plainText(markdown: string) {
  return markdown
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function descriptionFrom(markdown: string, language: 'zh-CN' | 'en') {
  const heading = language === 'zh-CN' ? '(?:核心)?结论' : '(?:Conclusion|Bottom Line)'
  const section = markdown.match(new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, 'im'))?.[1] ?? ''
  const paragraph = section.split(/\n\s*\n/).map(plainText).find(Boolean)?.replace(/^[-*]\s*/, '')
  const impactLabel = language === 'zh-CN' ? '死亡率影响' : 'Mortality Impact'
  const impact = markdown.match(new RegExp(`^\\*\\*${impactLabel}\\*\\*[:：]\\s*(.+)$`, 'mi'))?.[1]
  const fallback = impact ? plainText(impact) : ''
  const text = (paragraph || fallback).replaceAll('"', "'")
  const limit = language === 'zh-CN' ? 180 : 260
  if (text.length <= limit) return text
  const shortened = text.slice(0, limit)
  const boundary = Math.max(shortened.lastIndexOf('。'), shortened.lastIndexOf('. '), shortened.lastIndexOf('；'))
  return `${shortened.slice(0, boundary > limit * 0.6 ? boundary + 1 : limit).trim()}…`
}

function genericDescriptionFrom(markdown: string) {
  const proseOnly = markdown
    .replace(/^---\s*[\s\S]*?\s*---\s*/, '')
    .replace(/```[\s\S]*?```/g, '')
    .split(/\n\s*\n/)
    .filter((block) => !/^\s*(?:#|!\[|\|)/.test(block))
    .map(plainText)
  return proseOnly.find((text) => text.length >= 12) ?? ''
}

function citationsFrom(markdown: string) {
  const markdownLinks = [...markdown.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1])
  const autolinks = [...markdown.matchAll(/<(https?:\/\/[^>]+)>/g)].map((match) => match[1])
  const bareLinks = [...markdown.matchAll(/https?:\/\/[^\s<>]+/g)].map((match) => match[0].replace(/[)\].,;:]+$/, ''))
  return [...new Set([...markdownLinks, ...autolinks, ...bareLinks])]
}

function referenceKeys(markdown: string) {
  const pmids = [...markdown.matchAll(/PMID[:\s]*(\d{6,9})/gi)].map((match) => `pmid:${match[1]}`)
  return new Set([...pmids, ...citationsFrom(markdown).map((url) => url.toLowerCase())])
}

function modifiedDates() {
  const output = execFileSync('git', [
    '-c', 'core.quotepath=false', 'log', '--format=@@%ct', '--name-only', '--', 'wiki_zh', 'wiki_en'
  ], { encoding: 'utf8' })
  const dates = new Map<string, string>()
  let timestamp = ''
  for (const line of output.split('\n')) {
    if (line.startsWith('@@')) timestamp = line.slice(2)
    else if (line && !dates.has(line)) dates.set(line, new Date(Number(timestamp) * 1000).toISOString())
  }
  return dates
}

const dates = modifiedDates()
const sourceEntries = [
  ...contentFiles(join(projectRoot, 'wiki_zh')).map((path) => ({ path, language: 'zh-CN' as const })),
  ...contentFiles(join(projectRoot, 'wiki_en')).map((path) => ({ path, language: 'en' as const }))
].map(({ path, language }) => {
  const markdown = readFileSync(path, 'utf8')
  const relativePath = safeRelativePath(path)
  return {
    relativePath,
    route: routeFromRelative(relativePath),
    title: markdown.match(/^#\s+(.+)$/m)?.[1].trim() ?? '',
    description: descriptionFrom(markdown, language),
    language,
    modified: dates.get(relative(projectRoot, path).split(sep).join('/')),
    citations: citationsFrom(markdown),
    keys: referenceKeys(markdown)
  }
})

const chineseEntries = sourceEntries.filter((entry) => entry.language === 'zh-CN')
const englishEntries = sourceEntries.filter((entry) => entry.language === 'en')
const alternates = new Map<string, string>()

for (const chinese of chineseEntries) {
  const matches = englishEntries
    .map((english) => ({ english, score: [...chinese.keys].filter((key) => english.keys.has(key)).length }))
    .sort((left, right) => right.score - left.score)
  if (matches[0]?.score > 0 && matches[0].score > (matches[1]?.score ?? 0)) {
    alternates.set(chinese.relativePath, matches[0].english.relativePath)
    alternates.set(matches[0].english.relativePath, chinese.relativePath)
  }
}

export const pageMetadata = new Map<string, EntryMeta>()
for (const entry of sourceEntries) {
  pageMetadata.set(entry.relativePath, {
    route: entry.route,
    title: entry.title,
    description: entry.description,
    language: entry.language,
    modified: entry.modified,
    citations: entry.citations,
    alternate: alternates.get(entry.relativePath)
  })
}

function genericMetadata(relativePath: string, title: string, description: string): EntryMeta {
  const language = relativePath === 'README_en.md' ? 'en' : 'zh-CN'
  const routes: Record<string, string> = {
    'index.md': '/',
    'README.md': '/README',
    'README_en.md': '/README_en',
    'catalog.md': '/catalog'
  }
  return {
    route: routes[relativePath] ?? routeFromRelative(relativePath),
    title,
    description,
    language,
    citations: [],
    alternate: relativePath === 'README.md' ? 'README_en.md' : relativePath === 'README_en.md' ? 'README.md' : undefined
  }
}

export function metadataFor(pageData: any): EntryMeta {
  const entry = pageMetadata.get(pageData.relativePath)
  if (entry) return entry
  const generatedPath = join(projectRoot, '.site-content', pageData.relativePath)
  const generatedDescription = existsSync(generatedPath)
    ? genericDescriptionFrom(readFileSync(generatedPath, 'utf8'))
    : ''
  return genericMetadata(
    pageData.relativePath,
    pageData.title,
    generatedDescription || pageData.description || '基于同行评审研究、逐条审计的中英文健康与长寿知识库。'
  )
}

export function seoHead(context: any) {
  if (context.pageData.isNotFound) return []
  const meta = metadataFor(context.pageData)
  const canonical = absoluteUrl(meta.route)
  const head: any[] = [
    ['link', { rel: 'canonical', href: canonical }],
    ['meta', { property: 'og:title', content: meta.title }],
    ['meta', { property: 'og:description', content: meta.description }],
    ['meta', { property: 'og:url', content: canonical }],
    ['meta', { property: 'og:locale', content: meta.language === 'en' ? 'en_US' : 'zh_CN' }],
    ['meta', { property: 'og:type', content: meta.route.startsWith('/wiki_') ? 'article' : 'website' }],
    ['meta', { name: 'twitter:title', content: meta.title }],
    ['meta', { name: 'twitter:description', content: meta.description }]
  ]

  if (meta.alternate) {
    const alternateMeta = pageMetadata.get(meta.alternate) ?? genericMetadata(meta.alternate, '', '')
    const chinese = meta.language === 'zh-CN' ? meta : alternateMeta
    const english = meta.language === 'en' ? meta : alternateMeta
    head.push(
      ['link', { rel: 'alternate', hreflang: 'zh-CN', href: absoluteUrl(chinese.route) }],
      ['link', { rel: 'alternate', hreflang: 'en', href: absoluteUrl(english.route) }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(chinese.route) }]
    )
  }

  if (meta.route.startsWith('/wiki_')) {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      headline: meta.title,
      description: meta.description,
      url: canonical,
      inLanguage: meta.language,
      dateModified: meta.modified,
      citation: meta.citations,
      author: {
        '@type': 'Organization',
        name: 'Modern Wellness Wiki contributors',
        url: repositoryUrl
      },
      isPartOf: {
        '@type': 'WebSite',
        name: '现代养生百科',
        url: `${siteRoot}/`
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '现代养生百科', item: `${siteRoot}/` },
          { '@type': 'ListItem', position: 2, name: meta.title, item: canonical }
        ]
      }
    }
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify(structuredData)])
  } else if (meta.route === '/') {
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '现代养生百科',
      alternateName: 'Modern Wellness Wiki',
      description: meta.description,
      url: `${siteRoot}/`,
      inLanguage: ['zh-CN', 'en'],
      publisher: {
        '@type': 'Organization',
        name: 'Modern Wellness Wiki contributors',
        url: repositoryUrl
      }
    })])
  }

  return head
}

export function pageLanguage(relativePath: string) {
  return relativePath.startsWith('wiki_en/') || relativePath === 'README_en.md' ? 'en' : 'zh-CN'
}
