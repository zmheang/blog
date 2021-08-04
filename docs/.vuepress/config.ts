import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'zmheang',
    description: 'zmheang',
    head: [['link', { rel: 'icon', href: '/images/logo-zmheang.png' }]],


    // ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️站点配置️：无论使用什么主题，该配置项都生效   ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
    // ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️主题配置️                              ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
    themeConfig: {
        logo: '/images/logo-zmheang.png',
        // navbar: false,
        navbar: [
            // NavbarGroup
            {text: 'Group', link: '/foo/'},
            {
                text: 'Group',
                children: [
                    {text: 'Foo', link: '/foo/',},
                    {text: 'Foo', link: '/foo/',}
                ],
            }
        ],
        darkMode: true,
        repo: 'https://github.com/zmheang/blog',
        sidebar: [
            // SidebarItem
            {
                text: 'sidebar-1',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: ['xxx'],
                    },
                    {
                        text: 'sidebar-1-1',
                        link: '/sidebar-1/sidebar-1-1',
                    }
                ],
            }
        ],


    },
})