import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { loadCatalog } from './content-catalog.mjs'

const start = '<!-- reader-index:start -->'
const end = '<!-- reader-index:end -->'

// Paths and titles come from the catalog and articles; only navigation copy lives here.
const categories = [
  ['吃', 'Diet', '饮食与营养', 'Food and nutrition', '食物、饮品、饮食模式、补剂与食品安全', 'Foods, drinks, dietary patterns, supplements and food safety'],
  ['动', 'Exercise', '运动与活动', 'Exercise and activity', '日常活动、有氧运动与力量训练', 'Everyday movement, cardio and strength training'],
  ['睡', 'Sleep', '睡眠与休息', 'Sleep and rest', '睡眠时长、午睡、睡眠环境与呼吸暂停', 'Sleep duration, naps, sleep environment and apnea'],
  ['医', 'Medical', '医疗与预防', 'Medical care and prevention', '风险管理、筛查、疫苗、药物与感染', 'Risk management, screening, vaccines, medicines and infections'],
  ['形', 'Body', '身体与功能', 'Body and function', '体重、肌肉、骨骼、口腔与感官健康', 'Weight, muscles, bones, oral health and the senses'],
  ['心', 'Mind', '心理与社会连接', 'Mental health and connection', '情绪、压力、社会连接与认知', 'Emotions, stress, social connections and cognition'],
  ['境', 'Environment', '环境与暴露', 'Environment and exposure', '空气、噪音、日晒与冷热暴露', 'Air, noise, sun and heat or cold exposure'],
  ['住', 'Housing', '居家与安全', 'Home and safety', '高温防护与家庭应急准备', 'Heat protection and emergency preparedness'],
  ['行', 'Travel', '出行与驾驶', 'Travel and driving', '驾驶疲劳与出行安全', 'Drowsy driving and travel safety'],
  ['财', 'Wealth', '保障与健康资源', 'Coverage and health resources', '医疗保险与社会经济因素', 'Medical insurance and socioeconomic factors']
]

const readingPaths = [
  ['想从日常习惯开始', 'Start with everyday habits', ['080', '076', '032']],
  ['想调整吃喝', 'Review food and drink choices', ['062', '061', '052']],
  ['体检发现风险', 'Understand risks found at a checkup', ['022', '023', '024']],
  ['想了解筛查与预防', 'Explore screening and prevention', ['025', '026', '021']],
  ['在考虑买补剂', 'Consider a supplement purchase', ['017', '010', '012']],
  ['关心压力与心理健康', 'Explore stress and mental health', ['038', '033', '036']]
]

const anchor = (title) => title.toLowerCase().replaceAll(' ', '-')
const markdownLabel = (title) => title.replaceAll('|', '&#124;').replace(/([\[\]\\])/g, '\\$1')
// Keep readable Unicode, but escape Markdown delimiters, percent signs and fragments.
export const sourceLink = (path) => path.replace(/[%\s()[\]#?<>"\\]/g, (char) =>
  encodeURIComponent(char).replace(/[()]/g, (delimiter) => `%${delimiter.charCodeAt(0).toString(16).toUpperCase()}`))

export function readerIndex(root, language) {
  const english = language === 'en'
  const entries = loadCatalog(root).entries
  const byId = new Map(entries.map((entry) => [entry.id, entry]))
  const titles = new Map(entries.map((entry) => {
    const path = entry[language]
    const title = readFileSync(join(root, path), 'utf8').match(/^#\s+(.+)$/m)?.[1].trim()
    if (!title) throw new Error(`Missing article title: ${path}`)
    return [entry.id, title]
  }))
  const link = (entry) => `[${markdownLabel(titles.get(entry.id))}](${sourceLink(entry[language])})`
  const groups = categories.map((category) => ({
    directory: category[english ? 1 : 0],
    title: category[english ? 3 : 2],
    description: category[english ? 5 : 4],
    entries: entries.filter((entry) => entry[language].split('/')[1] === category[english ? 1 : 0])
  })).filter((group) => group.entries.length)
  if (groups.reduce((sum, group) => sum + group.entries.length, 0) !== entries.length) {
    throw new Error('Unmapped reader-index category; add navigation copy in scripts/reader-index.mjs')
  }

  const overview = groups.map((group) => `| [${english ? group.title : `${group.directory} · ${group.title}`}](#${anchor(group.title)}) | ${group.entries.length} | ${group.description} |`).join('\n')
  const paths = readingPaths.map((path) => {
    const links = path[2].map((id) => {
      const entry = byId.get(id)
      if (!entry) throw new Error(`Reading path refers to missing entry ${id}`)
      return link(entry)
    })
    return `| ${path[english ? 1 : 0]} | ${links.join(' · ')} |`
  }).join('\n')
  const fullIndex = groups.map((group) => {
    const subgroups = new Map()
    for (const entry of group.entries) {
      const key = entry[language].split('/').slice(2, -1).join(' / ')
      if (!subgroups.has(key)) subgroups.set(key, [])
      subgroups.get(key).push(entry)
    }
    const sections = [...subgroups].sort(([a], [b]) => a.localeCompare(b, english ? 'en' : 'zh-CN')).map(([name, items]) => {
      const links = items.sort((a, b) => titles.get(a.id).localeCompare(titles.get(b.id), english ? 'en' : 'zh-CN')).map(link)
      return name ? `- **${name}**${english ? ': ' : '：'}${links.join(' · ')}` : links.join(' · ')
    })
    return `### ${group.title}\n\n${sections.join('\n\n')}\n\n[${english ? 'Back to topics' : '返回分类总览'}](#${english ? 'browse-by-topic' : '按主题浏览'})`
  }).join('\n\n')

  return `${start}

${english ? `**${entries.length} topics · Chinese and English editions · ${groups.length} subject areas.** Choose a topic below, or start with an everyday question.` : `**${entries.length} 个主题 · 中英双语 · ${groups.length} 个分类。** 可以按主题查找，也可以从日常问题进入。`}

## ${english ? 'Browse by topic' : '按主题浏览'}

| ${english ? 'Topic | Entries | What you can find' : '分类 | 条目 | 你可以找到什么'} |
| --- | ---: | --- |
${overview}

## ${english ? 'Start with a decision that matters to you' : '先找到与你有关的决定'}

${english ? 'These are starting points for reading, not a ranking of health benefits. Check who the evidence applies to and its limitations within each entry.' : '这些是阅读入口，不是健康收益排名。进入条目后，请先看适用人群、行动建议与证据局限。'}

| ${english ? 'Your question | Start here' : '你关心的问题 | 从这些条目开始'} |
| --- | --- |
${paths}

## ${english ? 'All entries' : '全部条目'}

${english ? 'Grouped by the same topic directories used in the website sidebar. Every title below links directly to an article.' : '沿用网站侧栏的主题目录，以下标题均可直接进入正文。'}

${fullIndex}

${end}`
}

export function updatedReadme(markdown, generated) {
  const begin = markdown.indexOf(start)
  const finish = markdown.indexOf(end, begin)
  if (begin < 0 || finish < 0 || markdown.indexOf(start, begin + start.length) >= 0 || markdown.indexOf(end, finish + end.length) >= 0) {
    throw new Error('README must contain exactly one reader-index block')
  }
  return markdown.slice(0, begin) + generated + markdown.slice(finish + end.length)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const check = process.argv.includes('--check')
  let stale = false
  for (const [language, file] of [['zh', 'README.md'], ['en', 'README_en.md']]) {
    const markdown = readFileSync(file, 'utf8')
    const next = updatedReadme(markdown, readerIndex(process.cwd(), language))
    if (markdown === next) continue
    if (check) {
      console.error(`${file}: reader index is stale. Run npm run docs:index.`)
      stale = true
    } else writeFileSync(file, next)
  }
  if (stale) process.exitCode = 1
  else console.log(check ? 'Reader indexes are current in both languages.' : 'Reader indexes updated in both languages.')
}
