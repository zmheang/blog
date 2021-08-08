import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    // NavbarGroup
    // {text: 'about', link: '/', activeMatch: '^/'},
    {
        text: '前端体系',
        children: [
            '/relearn/html/README.md',
            '/relearn/css/README.md',
            '/relearn/js/README.md',
            '/relearn/browser/README.md'
        ]
    },
    {text: '算法训练', link: '/algorithm/'},
    {text: '面试准备', link: '/interview/'},
    {
        text: '兴趣爱好',
        link: '/relearn/hobby/',
        activeMatch: '^/relearn/hobby/',
        children: [
            {text: '健身', link: '/foo/',},
            {text: '摄影', link: '/foo/',},
            {text: '视频', link: '/foo/',},
            {text: '理财', link: '/foo/',}
        ]
    }
    // {text: '外链', link: 'https://www.baidu.com'}
]