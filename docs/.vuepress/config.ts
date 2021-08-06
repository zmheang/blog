import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    base: '/blog/',
    lang: 'en-US',
    title: 'zmheang',
    description: 'zmheang',
    head: [['link', { rel: 'icon', href: '/blog/images/logo-zmheang3.png' }]],


    // ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️站点配置️：无论使用什么主题，该配置项都生效   ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
    // ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️主题配置️                              ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
    themeConfig: {
        logo: '/images/logo-zmheang3.png',
        darkMode: true,
        repo: 'https://github.com/zmheang/blog',
        // navbar: false,
        navbar: [
            // NavbarGroup
            // {text: 'about', link: '/', activeMatch: '^/'},
            {text: '前端体系', link: '/relearn/', activeMatch: '^/relearn/'},
            {text: '算法训练', link: '/algorithm/', activeMatch: '^/algorithm/'},
            {text: '面试准备', link: '/interview/', activeMatch: '^/interview/'},
            {
                text: '兴趣爱好',
                link: '/interview/',
                activeMatch: '^/interview/',
                children: [
                    {text: '健身', link: '/foo/',},
                    {text: '摄影', link: '/foo/',},
                    {text: '视频', link: '/foo/',},
                    {text: '理财', link: '/foo/',}
                ]
            },
            // {text: '外链', link: 'https://www.baidu.com'}
        ],
        sidebar:
            [
            // SidebarItem
            {
                text: 'HTML',
                children: [
                    // SidebarItem
                    {text: '- 历史', link: '/html/history/'},
                ],
            },
            {
                text: 'CSS',
                link: '/css/',
                children: [
                    // SidebarItem
                    {text: '历史', link: '/css/history'}
                ],
            },
            {
                text: 'JavaScript',
                link: '/js/',
                children: [
                    // SidebarItem
                    {text: '历史', link: '/js/history/'},
                    {text: 'JS20年', link: '/js/JavaScript-20-years/'}
                ],
            },
            {
                text: '浏览器',
                link: '/browser/',
                children: [
                    // SidebarItem
                    {text: '历史', link: '/browser/history/'}
                ],
            },
        ],
        editLink: false,
        lastUpdated: false,
        contributors: false


    },
})