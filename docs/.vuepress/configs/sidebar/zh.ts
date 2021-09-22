import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/relearn/10-html/': [
        {
            text: 'HTML',
            link: '/relearn/10-html/index.md',
            children: [
                '/relearn/10-html/01-history/index.md',
                '/relearn/10-html/02-knowledge-points/index.md',
                '/relearn/10-html/link.md',

            ],
        }
    ],
    '/relearn/10-html/01-history': [
        {
            text: 'history',
            link: '/relearn/10-html/01-history/index.md',
            children: [
                '/relearn/10-html/01-history/001.md',
                '/relearn/10-html/01-history/002.md'
            ]
        }
    ],
    '/relearn/10-html/02-knowledge-points': [
        {
            text: 'knowledge-points',
            link: '/relearn/10-html/02-knowledge-points/index.md',
            children: [
                '/relearn/10-html/02-knowledge-points/001.md',
                '/relearn/10-html/02-knowledge-points/002.md'
            ]
        }
    ],
    '/relearn/11-css/': [
        {
            text: 'CSS',
            link: '/relearn/11-css/index.md',
            children: [
                '/relearn/11-css/01-history/index.md',
                '/relearn/11-css/02-knowledge/index.md',
                '/relearn/11-css/03-demo/index.md',
                '/relearn/11-css/04-framework/index.md',
                '/relearn/11-css/05-extension-language/index.md',
                '/relearn/11-css/06-2D/index.md',
                '/relearn/11-css/07-3D/index.md',
            ],
        },
    ],
    '/relearn/11-css/01-history': [
        {
            text: 'CSS',
            link: '/relearn/11-css/01-history/index.md',
            children: [
                '/relearn/11-css/01-history/001.md',
            ],
        },
    ],
    '/relearn/12-js/': [
        {
            text: 'JavaScript',
            link: '/relearn/12-js/index.md',
            children: [
                '/relearn/12-js/01-history.md',
                '/relearn/12-js/JavaScript-20-years.md',

            ],
        },
    ],
    '/relearn/13-package/': [
        {
            text: 'package-management',
            link: '/relearn/13-package/index.md',
            children: [
                '/relearn/12-js/01-history.md',
                '/relearn/12-js/JavaScript-20-years.md',

            ],
        },
    ],
    '/relearn/14-build/': [
        {
            text: 'build',
            link: '/relearn/14-build/index.md',
            children: [

            ],
        },
    ],
    '/relearn/15-browser/': [
        {
            text: 'browser',
            children: [
                '/relearn/15-browser/index.md',
                '/relearn/15-browser/index/index.md'
            ],
        },
    ],
    '/relearn/16-node/': [
        {
            text: 'Node',
            link: '/relearn/16-node/index.md',
            children: [

            ],
        },
    ],
    '/relearn/17-engineering/': [
        {
            text: 'Engineering',
            link: '/relearn/17-engineering/index.md',
            children: [

            ],
        },
    ],
    '/relearn/18-ui/': [
        {
            text: 'UI',
            link: '/relearn/18-ui/index.md',
            children: [

            ],
        },
    ],
    '/relearn/19-performance/': [
        {
            text: 'Performance',
            link: '/relearn/19-performance/index.md',
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
                '/algorithm/basicKnowledge.md',
                '/algorithm/leeCode/index.md',
            ],
        }
    ],
    '/interview/': [
        {
            text: '算法',
            children: [
                '/interview/index.md',
                '/interview/leeCode/index.md',
            ],
        }
    ],
    '/about/': [
        {
            text: 'about',
            link: '/about/index.md',
            children: [
                '/about/init.md',
                '/about/architecture.md',
                '/about/theme.md',
                '/about/plugin.md',
            ]
        }
    ]
}