import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    // NavbarGroup
    // {text: 'about', link: '/', activeMatch: '^/'},
    {
        text: '前端体系',
        children: [
            // 历史、标签、小技巧
            {text: 'HTML', children: [
                    '/relearn/10-html/01-history',
                    '/relearn/10-html/02-knowledge-points',
                    '/relearn/10-html/link.md',
                ]},
            {text: 'CSS', children: [
                // 03-demo、扩展语言、框架
                    '/relearn/11-css/01-history',
                    '/relearn/11-css/02-knowledge-points',
                    '/relearn/11-css/03-demo',
                    '/relearn/11-css/04-framework',
                    '/relearn/11-css/05-extension-language',
                    '/relearn/11-css/06-2D',
                    '/relearn/11-css/07-3D',
                    '/relearn/11-css/link.md',
                ]},
            {text: 'JS', children: [
                // 历史、语法、框架、常用库、运行时
                    '/relearn/10-html/01-history',
                    '/relearn/10-html/02-knowledge-points',
                    '/relearn/10-html/03-04-framework',
                    '/relearn/10-html/04-runtime',
                    '/relearn/10-html/05-libs',
                    '/relearn/10-html/link.md',
                ]},
            {text: 'package', children: [
                    '/relearn/10-html/index.md',
                ]},
            {text: 'build', children: [
                    '/relearn/10-html/index.md',
                ]},
            {text: 'browser', children: [
                    '/relearn/10-html/index.md',
                ]},
            {text: 'test', children: [
                    '/relearn/10-html/index.md',
                ]},
            {text: 'engineering', children: [
                    '/relearn/10-html/index.md',
                ]},
            {text: 'UI', children: [
                    '/relearn/10-html/index.md',
                ]},
            {text: 'performance', children: [
                    '/relearn/10-html/index.md',
                ]}
        ]
    },
    {text: '算法训练', link: '/algorithm/'},
    {text: '面试准备', link: '/interview/'},
    {
        text: '兴趣爱好',
        children: [
            '/hobby/10-health/index.md',
            '/hobby/11-photography/index.md',
            '/hobby/12-read/index.md',
            '/hobby/13-video/index.md',
            '/hobby/14-financial/index.md',
            '/hobby/15-outfit/index.md',
        ]
    },
    {text: 'about', link: '/about/'}
    // {text: '外链', link: 'https://www.baidu.com'}
]