import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    // NavbarGroup
    // {text: 'about', link: '/', activeMatch: '^/'},
    {
        text: '前端体系',
        children: [
            // 历史、标签、小技巧
            {text: 'HTML', children: [
                    '/relearn/10-html/README.md',
                    '/relearn/10-html/history.md',
                    '/relearn/10-html/link.md',
                ]},
            {text: 'CSS', children: [
                // demo、扩展语言、框架
                    '/relearn/11-css/README.md',
                    '/relearn/11-css/demo/README.md',
                    '/relearn/11-css/extension-language/README.md',
                    '/relearn/11-css/framework/README.md',
                ]},
            {text: 'JS', children: [
                // 历史、语法、框架、常用库、运行时
                    '/relearn/10-html/README.md',
                ]},
            {text: 'package', children: [
                    '/relearn/10-html/README.md',
                ]},
            {text: 'build', children: [
                    '/relearn/10-html/README.md',
                ]},
            {text: 'browser', children: [
                    '/relearn/10-html/README.md',
                ]},
            {text: 'test', children: [
                    '/relearn/10-html/README.md',
                ]},
            {text: 'engineering', children: [
                    '/relearn/10-html/README.md',
                ]},
            {text: 'UI', children: [
                    '/relearn/10-html/README.md',
                ]},
            {text: 'performance', children: [
                    '/relearn/10-html/README.md',
                ]}
        ]
    },
    {text: '算法训练', link: '/algorithm/'},
    {text: '面试准备', link: '/interview/'},
    {
        text: '兴趣爱好',
        children: [
            '/hobby/10-health/README.md',
            '/hobby/11-photography/README.md',
            '/hobby/12-read/README.md',
            '/hobby/13-video/README.md',
            '/hobby/14-financial/README.md',
            '/hobby/15-outfit/README.md',
        ]
    },
    {text: 'about', link: '/about/'}
    // {text: '外链', link: 'https://www.baidu.com'}
]