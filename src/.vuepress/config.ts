import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import theme from './theme.js'

export default defineUserConfig({
  base: '/x_blog/',

  lang: 'zh-CN',
  title: '木兮blog',
  description: '没有蜡笔的小新的博客',
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'codeva-v0xi6qJ0XV' }]
  ],
  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: page => page.frontmatter.category as any,
          formatter: '分类：$content'
        },
        {
          getter: page => page.frontmatter.tag as any,
          formatter: '标签：$content'
        }
      ]
    })
  ]
})
