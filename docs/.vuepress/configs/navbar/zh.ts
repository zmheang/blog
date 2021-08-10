import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    // NavbarGroup
    // {text: 'about', link: '/', activeMatch: '^/'},
    {
        text: '前端体系',
        children: [
            '/relearn/10-html/README.md',
            '/relearn/11-css/README.md',
            '/relearn/12-js/README.md',
            '/relearn/13-package/README.md',
            '/relearn/14-build/README.md',
            '/relearn/15-browser/README.md',
            '/relearn/16-test/README.md',
            '/relearn/17-engineering/README.md',
            '/relearn/18-ui/README.md',
            '/relearn/19-performance/README.md',
        ]
    },
    {text: '算法训练', link: '/algorithm/'},
    {text: '面试准备', link: '/interview/'},
    {
        text: '兴趣爱好',
        children: [
            '/hobby/10-fitness/README.md',
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