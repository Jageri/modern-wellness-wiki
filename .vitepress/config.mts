import { defineConfig } from 'vitepress'

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
      { text: '中文索引', link: '/' },
      { text: 'English', link: '/README_en' },
      { text: '项目说明', link: '/README' }
    ],
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
