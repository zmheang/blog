import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
// import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
    base: './',
    lang: 'en-US',
    title: 'zmheang',
    description: 'zmheang',
    head: [['link', { rel: 'icon', href: '/images/logo-zmheang3.png' }]],


    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'zmheang',
            description: 'zmheang blog',
        }
    },
    // ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️站点配置️：无论使用什么主题，该配置项都生效   ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
    // ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️主题配置️                              ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
    themeConfig: {
        logo: '/images/logo-zmheang3.png',
        darkMode: true,
        repo: 'https://github.com/zmheang/blog',
        // navbar: false,
        locales: {
            '/': {
                // navbar
                navbar: navbar.zh,

                // sidebar
                sidebar: sidebar.zh,

                // page meta
                editLinkText: 'Edit this page on GitHub',
            },
        },
        editLink: false,
        lastUpdated: false,
        contributors: false
    }
});
