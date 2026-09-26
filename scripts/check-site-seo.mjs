import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { loadCatalog, sitePath, articleUrl, auditUrl } from './content-catalog.mjs'

const outputRoot = join(process.cwd(), '.vitepress', 'dist')
const entries = loadCatalog().entries
const expectedPages = new Map(entries.flatMap((entry) => ['zh', 'en'].map((language) => [
  join(outputRoot, sitePath(entry[language]).replace(/\.md$/, '.html')),
  { entry, language }
])))
const htmlAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')

async function htmlFiles(directory) {
  const files = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await htmlFiles(path))
    else if (entry.name.endsWith('.html')) files.push(path)
  }
  return files
}

const articleFiles = [
  ...(await htmlFiles(join(outputRoot, 'wiki_zh'))),
  ...(await htmlFiles(join(outputRoot, 'wiki_en')))
]
const allHtmlFiles = await htmlFiles(outputRoot)

const failures = []
const chineseToEnglish = new Map()
const englishToChinese = new Map()
const analyticsId = 'G-70W9E03TT7'

for (const file of allHtmlFiles) {
  if (file.endsWith('/404.html')) continue
  const html = await readFile(file, 'utf8')
  if (/\/google[\da-f]+\.html$/.test(file)) {
    if (!/^google-site-verification: google[\da-f]+\.html\s*$/.test(html)) {
      failures.push(`${file}: malformed Google site verification file`)
    }
    continue
  }
  if (!html.match(/<meta name="description" content="[^"]+"/)) failures.push(`${file}: missing or malformed description`)
  if (!html.match(/<link rel="canonical" href="[^"]+"/)) failures.push(`${file}: missing canonical`)
  if ((html.match(new RegExp(`googletagmanager\\.com/gtag/js\\?id=${analyticsId}`, 'g')) ?? []).length !== 1) {
    failures.push(`${file}: missing or duplicate Google tag loader`)
  }
  if ((html.match(new RegExp(`gtag\\(["']config["'],\\s*["']${analyticsId}["']\\)`, 'g')) ?? []).length !== 1) {
    failures.push(`${file}: missing or duplicate Google Analytics configuration`)
  }
}

for (const file of articleFiles) {
  const html = await readFile(file, 'utf8')
  const expected = expectedPages.get(file)
  if (!expected) {
    failures.push(`${file}: article absent from catalog`)
    continue
  }
  const { entry, language } = expected
  const expectedLanguage = file.includes('/wiki_en/') ? 'en' : 'zh-CN'
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1]
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  const chineseAlternate = html.match(/hreflang="zh-CN" href="([^"]+)"/)?.[1]
  const englishAlternate = html.match(/hreflang="en" href="([^"]+)"/)?.[1]
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]

  if (!description) failures.push(`${file}: missing or malformed description`)
  if (!canonical) failures.push(`${file}: missing canonical`)
  if (canonical !== htmlAttribute(articleUrl(entry[language]))) failures.push(`${file}: wrong canonical route`)
  if (chineseAlternate !== htmlAttribute(articleUrl(entry.zh)) || englishAlternate !== htmlAttribute(articleUrl(entry.en))) failures.push(`${file}: language pair differs from catalog`)
  if (!html.includes(`html lang="${expectedLanguage}"`)) failures.push(`${file}: wrong page language`)
  if (!html.includes('hreflang="zh-CN"') || !englishAlternate) failures.push(`${file}: missing language alternates`)
  if (!html.includes('hreflang="x-default"')) failures.push(`${file}: missing x-default alternate`)
  if (!html.includes(expectedLanguage === 'en' ? 'Review and corrections' : '审阅与纠错')) failures.push(`${file}: missing review block`)
  if (!html.includes(entry.evidenceReviewedOn) || !html.includes(entry.nextReviewDue) || !html.includes(auditUrl(entry.audit))) failures.push(`${file}: missing dated entry audit provenance`)
  const source = await readFile(join(process.cwd(), entry[language]), 'utf8')
  if (/^\[\^[^\]]+\]:/m.test(source) && (!html.includes('class="footnote-ref"') || !html.includes('class="footnote-backref"'))) failures.push(`${file}: footnotes not rendered as navigable references`)
  if (!jsonLd) failures.push(`${file}: missing JSON-LD`)
  else {
    try {
      const data = JSON.parse(jsonLd)
      if (data['@type'] !== 'MedicalWebPage') failures.push(`${file}: wrong JSON-LD type`)
      if (!data.dateModified || !data.citation?.length) failures.push(`${file}: incomplete JSON-LD provenance`)
      if (data.lastReviewed !== entry.evidenceReviewedOn) failures.push(`${file}: wrong JSON-LD evidence review date`)
    } catch {
      failures.push(`${file}: invalid JSON-LD`)
    }
  }
  if (canonical && englishAlternate && expectedLanguage === 'zh-CN') chineseToEnglish.set(canonical, englishAlternate)
  if (canonical && chineseAlternate && expectedLanguage === 'en') englishToChinese.set(canonical, chineseAlternate)
}

const robots = await readFile(join(outputRoot, 'robots.txt'), 'utf8')
const sitemap = await readFile(join(outputRoot, 'sitemap.xml'), 'utf8')
if (!robots.includes('Sitemap: https://jageri.github.io/modern-wellness-wiki/sitemap.xml')) {
  failures.push('robots.txt: missing sitemap declaration')
}
if (!sitemap.includes('<urlset')) failures.push('sitemap.xml: invalid sitemap')
if (articleFiles.length !== expectedPages.size) failures.push(`expected ${expectedPages.size} article pages, found ${articleFiles.length}`)
for (const path of expectedPages.keys()) if (!articleFiles.includes(path)) failures.push(`missing article page: ${path}`)
if (new Set(chineseToEnglish.values()).size !== entries.length) failures.push('Chinese pages do not map to unique English pages')
if (new Set(englishToChinese.values()).size !== entries.length) failures.push('English pages do not map to unique Chinese pages')
for (const [chinese, english] of chineseToEnglish) {
  if (englishToChinese.get(english) !== chinese) failures.push(`non-reciprocal language pair: ${chinese}`)
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log(`SEO checks passed: ${articleFiles.length} articles, ${chineseToEnglish.size} reciprocal bilingual pairs`)
