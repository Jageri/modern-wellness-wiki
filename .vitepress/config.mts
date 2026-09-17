import { readFileSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { defineConfig } from 'vitepress'

const projectRoot = process.cwd()

function safeRoute(path: string) {
  return `/${path.split(sep).join('/').replaceAll('%', 'percent').replace(/\.md$/, '')}`
}

function pageTitle(path: string) {
  const markdown = readFileSync(path, 'utf8')
  return markdown.match(/^#\s+(.+)$/m)?.[1].trim() ?? path.split(sep).at(-1)?.replace(/\.md$/, '')
}

function directoryItems(directory: string): any[] {
  const entries = readdirSync(directory, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name, 'zh-CN'))
  const items: any[] = []

  for (const entry of entries.filter((item) => item.isDirectory())) {
    const children = directoryItems(join(directory, entry.name))
    if (children.length) {
      items.push({ text: entry.name, collapsed: true, items: children })
    }
  }

  for (const entry of entries.filter((item) => item.isFile() && item.name.endsWith('.md'))) {
    const absolutePath = join(directory, entry.name)
    items.push({
      text: pageTitle(absolutePath),
      link: safeRoute(relative(projectRoot, absolutePath))
    })
  }

  return items
}

const chineseSidebar = [
  { text: '中文说明', link: '/README' },
  { text: '中文条目', collapsed: false, items: directoryItems(join(projectRoot, 'wiki_zh')) }
]

const englishSidebar = [
  { text: 'About this wiki', link: '/README_en' },
  { text: 'English entries', collapsed: false, items: directoryItems(join(projectRoot, 'wiki_en')) }
]

export default defineConfig({
  title: '现代养生百科',
  description: '基于同行评审研究、逐条审计的中英文健康与长寿知识库。',
  lang: 'zh-CN',
  srcDir: '.site-content',
  base: '/modern-wellness-wiki/',
  cleanUrls: true,
  ignoreDeadLinks: [
    /\/LICENSE$/,
    /^\.\/URL$/
  ],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://jageri.github.io/modern-wellness-wiki/'
  },
  head: [
    ['meta', { name: 'theme-color', content: '#2f6f73' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '现代养生百科' }],
    ['meta', { property: 'og:image', content: 'https://jageri.github.io/modern-wellness-wiki/assets/cover.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', href: '/modern-wellness-wiki/assets/cover.jpg' }]
  ],
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    logo: '/assets/cover.jpg',
    nav: [
      { text: '首页', link: '/' },
      { text: '中文', link: '/README' },
      { text: 'English', link: '/README_en' },
      { text: '表格索引', link: '/INDEX' }
    ],
    sidebar: {
      '/wiki_zh/': chineseSidebar,
      '/wiki_en/': englishSidebar,
      '/README_en': englishSidebar,
      '/README': chineseSidebar,
      '/INDEX': chineseSidebar,
      '/': chineseSidebar
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Jageri/modern-wellness-wiki' }
    ],
    footer: {
      message: '内容采用 CC BY-SA 4.0 许可；健康科普不替代个体化医疗建议。',
      copyright: 'Modern Wellness Wiki'
    }
  }
})
