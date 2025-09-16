import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'flux-panel',
  description: '基于gost的转发面板',
  base: '/flux-panel/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started' },
      { text: '使用指南', link: '/guide' },
      { text: '常见问题', link: '/faq' }
    ]
  }
})
