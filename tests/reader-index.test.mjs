import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { loadCatalog } from '../scripts/content-catalog.mjs'
import { readerIndex, updatedReadme } from '../scripts/reader-index.mjs'

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'wiki-reader-index-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  const entries = loadCatalog().entries.map(({ id, zh, en }) => ({ id, zh, en }))
  const save = () => {
    mkdirSync(join(root, 'docs/tracking'), { recursive: true })
    writeFileSync(join(root, 'docs/tracking/entries.json'), JSON.stringify({ entries }))
    for (const entry of entries) for (const lang of ['zh', 'en']) {
      mkdirSync(dirname(join(root, entry[lang])), { recursive: true })
      writeFileSync(join(root, entry[lang]), `# ${lang} Title ${entry.id}\n`)
    }
  }
  save()
  return { root, entries, save }
}

test('added and renamed entries appear once in each full index, with safe source links', (t) => {
  const f = fixture(t)
  const nmn = f.entries.find((entry) => entry.id === '012')
  nmn.zh = 'wiki_zh/吃/补剂/~ 中文 (NAD+) 25% #?.md'
  nmn.en = 'wiki_en/Diet/Supplements/~ New (NAD+) 25% #?.md'
  f.entries.push({ id: 'new', zh: 'wiki_zh/睡/~ 新增.md', en: 'wiki_en/Sleep/~ New.md' })
  f.save()
  for (const lang of ['zh', 'en']) {
    const index = readerIndex(f.root, lang)
    const fullIndex = index.split(lang === 'zh' ? '## 全部条目\n' : '## All entries\n')[1]
    const links = [...fullIndex.matchAll(/\]\((wiki_[^)]+)\)/g)].map((match) => decodeURIComponent(match[1]))
    assert.deepEqual(links.sort(), f.entries.map((entry) => entry[lang]).sort())
    assert.match(index, new RegExp(`${f.entries.length} ${lang === 'zh' ? '个主题' : 'topics'}`))
    assert.match(index, /NAD\+%29%2025%25%20%23%3F\.md/)
    assert.match(index, new RegExp(`${lang} Title 012`))
  }
})

test('missing reading-path entries and unmapped categories fail instead of silently losing links', (t) => {
  const f = fixture(t)
  const entry = f.entries.find((item) => item.id === '012')
  entry.zh = 'wiki_zh/新分类/~ 新增.md'
  f.save()
  assert.throws(() => readerIndex(f.root, 'zh'), /Unmapped reader-index category/)
  f.entries.splice(f.entries.indexOf(entry), 1)
  f.save()
  assert.throws(() => readerIndex(f.root, 'en'), /missing entry 012/)
})

test('refreshing an index preserves manual prose and refuses missing or duplicate boundaries', () => {
  const old = '<!-- reader-index:start -->\nOld\n<!-- reader-index:end -->'
  const next = old.replace('Old', 'New')
  assert.equal(updatedReadme(`# Intro\n${old}\nFooter`, next), `# Intro\n${next}\nFooter`)
  assert.throws(() => updatedReadme('# Manual README', next), /exactly one/)
  assert.throws(() => updatedReadme(`${old}\n${old}`, next), /exactly one/)
})
