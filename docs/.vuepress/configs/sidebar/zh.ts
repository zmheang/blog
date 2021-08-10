import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/relearn/10-html/': [
        {
            text: 'HTML',
            link: '/relearn/10-html/README.md',
            children: [
                '/relearn/10-html/README.md',
                '/relearn/10-html/history.md',
                '/relearn/10-html/link.md',

            ],
        }
    ],
    '/relearn/11-css/': [
        {
            text: 'CSS',
            link: '/relearn/11-css/README.md',
            children: [
                '/relearn/11-css/README.md',
                '/relearn/11-css/history.md',

            ],
        },
    ],
    '/relearn/12-js/': [
        {
            text: 'JavaScript',
            link: '/relearn/12-js/README.md',
            children: [
                '/relearn/12-js/history.md',
                '/relearn/12-js/JavaScript-20-years.md',

            ],
        },
    ],
    '/relearn/13-package/': [
        {
            text: 'package-management',
            link: '/relearn/13-package/README.md',
            children: [
                '/relearn/12-js/history.md',
                '/relearn/12-js/JavaScript-20-years.md',

            ],
        },
    ],
    '/relearn/14-build/': [
        {
            text: 'build',
            link: '/relearn/14-build/README.md',
            children: [

            ],
        },
    ],
    '/relearn/15-browser/': [
        {
            text: 'browser',
            link: '/relearn/15-browser/README.md',
            children: [
                '/relearn/15-browser/index.md',
            ],
        },
    ],
    '/relearn/16-node/': [
        {
            text: 'Node',
            link: '/relearn/16-node/README.md',
            children: [

            ],
        },
    ],
    '/relearn/17-engineering/': [
        {
            text: 'Engineering',
            link: '/relearn/17-engineering/README.md',
            children: [

            ],
        },
    ],
    '/relearn/18-ui/': [
        {
            text: 'UI',
            link: '/relearn/18-ui/README.md',
            children: [

            ],
        },
    ],
    '/relearn/19-performance/': [
        {
            text: 'Performance',
            link: '/relearn/19-performance/README.md',
            children: [
                '/relearn/19-performance/雅虎军规.md',
                '/relearn/19-performance/快速定位网站性能问题.md',
            ],
        },
    ],
    '/algorithm/': [
        {
            text: '算法',
            children: [
                '/algorithm/architecture.md',
            ],
        }
    ],
    '/about/': [
        {
            text: 'about',
            link: '/about/README.md',
            children: [
                '/about/init.md',
                '/about/architecture.md',
                '/about/theme.md',
                '/about/plugin.md',
            ]
        }
    ]
}