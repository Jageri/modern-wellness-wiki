import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { checkContent } from '../scripts/check-content.mjs'
import { articleUrl } from '../scripts/content-catalog.mjs'

function fixture(t, count = 2) {
  const root = mkdtempSync(join(tmpdir(), 'wiki-content-test-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  const write = (path, text) => {
    mkdirSync(dirname(join(root, path)), { recursive: true })
    writeFileSync(join(root, path), text)
  }
  const entries = Array.from({ length: count }, (_, i) => ({
    id: `test-${i}`, zh: `wiki_zh/类/+12% 条目${i}.md`, en: `wiki_en/Category/+12% Entry${i}.md`,
    evidenceReviewedOn: '2026-09-07', nextReviewDue: '2026-12-07', audit: 'audits/test/AUDIT.md',
    status: 'reviewed', reviewer: 'AI audit agents', reviewerType: 'ai', responsibility: 'repository-maintainers'
  }))
  const article = '# Entry\n\nEvidence Level: ⭐⭐\n\n## Conclusion\n\nLimited evidence [^1].\n\n## References\n\n[^1]: [Study](https://pubmed.ncbi.nlm.nih.gov/36971848/)\n'
  for (const entry of entries) for (const lang of ['zh', 'en']) write(entry[lang], article)
  write('audits/test/AUDIT.md', 'Reviewed 2026-09-07')
  write('audits/test/PMID_VERIFICATION.md', '36971848 verified in PubMed')
  write('README.md', '# Readme')
  write('README_en.md', '# Readme')
  write('INDEX.md', entries.map((entry) => `| +12% | [Entry](${encodeURI(entry.zh)}) |`).join('\n'))
  const save = () => write('docs/tracking/entries.json', JSON.stringify({ schemaVersion: 1, entries }))
  save()
  return { root, write, entries, save, article, check: (options = {}) => checkContent(root, { today: '2026-09-26', ...options }) }
}

test('accepts footnotes, percent and literal plus paths, and an arbitrary catalog size', (t) => {
  const f = fixture(t, 3)
  assert.deepEqual(f.check(), { errors: [], warnings: [], pairs: 3, pmids: 1 })
  assert.match(articleUrl(f.entries[0].en), /\+12percent%20Entry0$/)
})

test('accepts numbered and inline URL citations and does not flag author names containing todo', (t) => {
  const f = fixture(t)
  f.write(f.entries[0].zh, f.article.replace('Limited evidence [^1].', 'Christodoulides [1].').replace('[^1]:', '- [1]'))
  f.write(f.entries[0].en, '# Entry\nEvidence Level: ⭐⭐\n## Conclusion\n[Study](https://pubmed.ncbi.nlm.nih.gov/36971848/)')
  assert.deepEqual(f.check().errors, [])
})

test('rejects a missing translation and an uncatalogued article', (t) => {
  const f = fixture(t)
  rmSync(join(f.root, f.entries[0].en))
  f.write('wiki_en/Category/~ New.md', f.article)
  assert.match(f.check().errors.join('\n'), /missing en article/)
  assert.match(f.check().errors.join('\n'), /article missing from catalog/)
})

test('rejects bilingual PMID drift and missing verification records', (t) => {
  const f = fixture(t)
  f.write(f.entries[0].en, f.article.replaceAll('36971848', '32253185'))
  assert.match(f.check().errors.join('\n'), /bilingual PMID mismatch/)
  assert.match(f.check().errors.join('\n'), /32253185: missing verification log/)
})

test('rejects undefined footnotes and citations only in the bibliography', (t) => {
  const f = fixture(t)
  f.write(f.entries[0].zh, f.article.replace('Limited evidence [^1].', 'Limited evidence [^2].'))
  f.write(f.entries[0].en, f.article.replace('Limited evidence [^1].', 'Limited evidence.'))
  const errors = f.check().errors.join('\n')
  assert.match(errors, /undefined footnote 2/)
  assert.match(errors, /missing in-text citation anchors/)
})

test('rejects duplicate mappings, wrong INDEX prefixes and broken document links', (t) => {
  const f = fixture(t)
  f.entries[1].en = f.entries[0].en
  f.save()
  f.write('INDEX.md', `| ~ | [Entry](${encodeURI(f.entries[0].zh)}) |`)
  f.write('README.md', '[Missing](missing.md)')
  const errors = f.check().errors.join('\n')
  assert.match(errors, /duplicate catalog path/)
  assert.match(errors, /wrong prefix/)
  assert.match(errors, /broken document link/)
})

test('rejects unresolved reviews, future or impossible dates and missing audit files', (t) => {
  const f = fixture(t)
  Object.assign(f.entries[0], { status: 'pending', evidenceReviewedOn: '2027-01-01', audit: '../absent.md' })
  f.entries[1].evidenceReviewedOn = '2026-02-30'
  f.save()
  const errors = f.check().errors.join('\n')
  assert.match(errors, /unresolved audit status/)
  assert.match(errors, /missing audit record/)
  assert.equal(f.check().errors.filter((error) => error.includes('invalid review dates')).length, 2)
})

test('review deadlines warn locally and fail strict CI without changing the review date', (t) => {
  const f = fixture(t)
  const before = readFileSync(join(f.root, 'docs/tracking/entries.json'), 'utf8')
  assert.equal(f.check({ today: '2026-12-08' }).warnings.length, 2)
  assert.equal(f.check({ today: '2026-12-08', strictReviews: true }).errors.length, 2)
  assert.equal(readFileSync(join(f.root, 'docs/tracking/entries.json'), 'utf8'), before)
})

test('quarterly deadlines respect month ends and cannot be postponed beyond three months', (t) => {
  const f = fixture(t)
  Object.assign(f.entries[0], { evidenceReviewedOn: '2026-01-31', nextReviewDue: '2026-04-30' })
  Object.assign(f.entries[1], { evidenceReviewedOn: '2026-01-31', nextReviewDue: '2026-05-01' })
  f.save()
  assert.equal(f.check().errors.filter((error) => error.includes('exceeds quarterly interval')).length, 1)
})
