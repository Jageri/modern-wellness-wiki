import { existsSync, readFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { loadCatalog, markdownFiles, pmidsFrom, sitePath } from './content-catalog.mjs'

const validDate = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
  && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value
const safePath = (value) => typeof value === 'string' && !value.startsWith('/')
  && !value.includes('\\') && !value.split('/').some((part) => part === '..' || part === '')
function nextQuarter(value) {
  const date = new Date(`${value}T00:00:00Z`)
  const day = date.getUTCDate()
  date.setUTCDate(1)
  date.setUTCMonth(date.getUTCMonth() + 3)
  const lastDay = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate()
  date.setUTCDate(Math.min(day, lastDay))
  return date.toISOString().slice(0, 10)
}

// Structural checks deliberately do not claim to establish medical correctness.
export function checkContent(root, { today = new Date().toISOString().slice(0, 10), strictReviews = false } = {}) {
  const errors = []
  const warnings = []
  if (!validDate(today)) throw new Error('Invalid review check date')
  const catalog = loadCatalog(root)
  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || !catalog.entries.length) {
    return { errors: ['Invalid or empty content catalog'], warnings, pairs: 0, pmids: 0 }
  }
  const entries = catalog.entries
  const ids = new Set()
  const paths = new Set()
  const routes = new Set()
  const allPmids = new Set()
  const read = (path) => readFileSync(join(root, path), 'utf8')
  const fileExists = (path) => safePath(path) && existsSync(join(root, path))

  for (const entry of entries) {
    const label = `Entry ${entry.id}`
    if (!/^[a-zA-Z0-9-]+$/.test(entry.id ?? '') || ids.has(entry.id)) errors.push(`${label}: invalid or duplicate ID`)
    ids.add(entry.id)
    if (entry.status !== 'reviewed') errors.push(`${label}: unresolved audit status`)
    if (!entry.reviewer || !['ai', 'human', 'mixed'].includes(entry.reviewerType) || entry.responsibility !== 'repository-maintainers') {
      errors.push(`${label}: missing or invalid review responsibility`)
    }
    if (!fileExists(entry.audit) || !entry.audit?.startsWith('audits/')) errors.push(`${label}: missing audit record`)
    if (!validDate(entry.evidenceReviewedOn) || entry.evidenceReviewedOn > today
      || !validDate(entry.nextReviewDue) || entry.nextReviewDue <= entry.evidenceReviewedOn) {
      errors.push(`${label}: invalid review dates`)
    } else {
      if (entry.nextReviewDue > nextQuarter(entry.evidenceReviewedOn)) errors.push(`${label}: review deadline exceeds quarterly interval`)
      if (entry.nextReviewDue < today) (strictReviews ? errors : warnings).push(`${label}: review overdue since ${entry.nextReviewDue}`)
    }
    for (const update of entry.updates ?? []) {
      if (!validDate(update.date) || update.date > today || !update.scope || !update.scopeEn || !fileExists(update.audit)) {
        errors.push(`${label}: invalid scoped review update`)
      }
    }
    const pairPmids = []
    for (const language of ['zh', 'en']) {
      const path = entry[language]
      if (!fileExists(path) || !path.startsWith(`wiki_${language}/`) || !path.endsWith('.md')) {
        errors.push(`${label}: missing ${language} article`)
        continue
      }
      if (paths.has(path)) errors.push(`${path}: duplicate catalog path`)
      if (routes.has(sitePath(path))) errors.push(`${path}: duplicate generated route`)
      paths.add(path)
      routes.add(sitePath(path))
      const markdown = read(path)
      const referenceStart = markdown.search(/^##\s+.*(?:参考|来源|references|sources|guidelines and supplementary)/im)
      const body = referenceStart < 0 ? markdown : markdown.slice(0, referenceStart)
      if (!/^#\s+\S/m.test(markdown) || !/^##\s+(?:核心)?结论|^##\s+(?:Conclusion|Bottom Line)/im.test(markdown)) {
        errors.push(`${path}: missing title or conclusion`)
      }
      if (!/(?:证据等级|Evidence (?:Level|Grade|Quality|Rating))/i.test(markdown)) errors.push(`${path}: missing evidence rating`)
      if (!/https?:\/\//.test(markdown)) errors.push(`${path}: missing source URL`)
      if (!/\[\^[^\]]+\]|\[\d+(?:\s*[-–,，]\s*\d+)*\]|https?:\/\//.test(body)) errors.push(`${path}: missing in-text citation anchors`)
      if (/待核[实验]|\b(?:TODO|TBD)\b/i.test(markdown)) errors.push(`${path}: unresolved verification marker`)
      const definitions = [...markdown.matchAll(/^\[\^([^\]]+)\]:/gm)].map((match) => match[1])
      const uses = [...markdown.replace(/^\[\^[^\]]+\]:/gm, '').matchAll(/\[\^([^\]]+)\]/g)].map((match) => match[1])
      for (const id of new Set(uses)) if (!definitions.includes(id)) errors.push(`${path}: undefined footnote ${id}`)
      for (const id of new Set(definitions)) if (!uses.includes(id)) errors.push(`${path}: unused footnote ${id}`)
      if (new Set(definitions).size !== definitions.length) errors.push(`${path}: duplicate footnote definition`)
      const pmids = pmidsFrom(markdown)
      pairPmids.push(pmids.join(','))
      for (const pmid of pmids) allPmids.add(pmid)
    }
    if (pairPmids.length === 2 && pairPmids[0] !== pairPmids[1]) errors.push(`${label}: bilingual PMID mismatch`)
    if (entry.zh && entry.en && basename(entry.zh).split(' ')[0] !== basename(entry.en).split(' ')[0]) errors.push(`${label}: bilingual filename prefix mismatch`)
  }

  for (const path of [...markdownFiles(root, 'wiki_zh'), ...markdownFiles(root, 'wiki_en')]) {
    if (!paths.has(path)) errors.push(`${path}: article missing from catalog`)
  }
  const index = read('INDEX.md')
  const indexed = new Set()
  for (const line of index.split('\n')) {
    const link = line.match(/\[[^\]]+\]\((wiki_zh\/[^)]+)\)/)
    if (!link) continue
    const target = decodeURIComponent(link[1]) // '+' is literal in these paths, never form decoding.
    if (!paths.has(target)) errors.push(`INDEX: unknown article ${target}`)
    if (indexed.has(target)) errors.push(`INDEX: duplicate article ${target}`)
    indexed.add(target)
    if (line.split('|')[1]?.trim() !== basename(target).split(' ')[0]) errors.push(`INDEX: wrong prefix for ${target}`)
  }
  for (const entry of entries) if (!indexed.has(entry.zh)) errors.push(`INDEX: missing article ${entry.zh}`)

  for (const path of ['README.md', 'README_en.md', 'INDEX.md', ...markdownFiles(root, 'docs')]) {
    for (const match of read(path).matchAll(/\[[^\]]*\]\(([^)]+\.md)(?:#[^)]*)?\)/g)) {
      if (/^(?:https?:|\/)/.test(match[1])) continue
      const target = join(dirname(path), decodeURIComponent(match[1]))
      if (!existsSync(join(root, target))) errors.push(`${path}: broken document link ${match[1]}`)
    }
  }
  const verificationText = markdownFiles(root, 'audits').filter((path) => path.endsWith('/PMID_VERIFICATION.md')).map(read).join('\n')
  const loggedPmids = new Set(verificationText.match(/\b\d{6,9}\b/g) ?? [])
  for (const pmid of allPmids) if (!loggedPmids.has(pmid)) errors.push(`PMID ${pmid}: missing verification log`)
  return { errors, warnings, pairs: entries.length, pmids: allPmids.size }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const result = checkContent(process.cwd(), { strictReviews: process.argv.includes('--strict-reviews') })
    for (const warning of result.warnings) console.warn(warning)
    if (result.errors.length) {
      console.error(result.errors.join('\n'))
      process.exitCode = 1
    } else console.log(`Content checks passed: ${result.pairs} bilingual pairs, ${result.pmids} unique PMIDs with historical logs; ${result.warnings.length} review warnings`)
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
