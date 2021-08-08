import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
    '/relearn/html/': [
        {
            text: 'HTML',
            link: '/relearn/html/README.md',
            children: [
                '/relearn/html/README.md',
                '/relearn/html/history.md',
                '/relearn/html/link.md',

            ],
        }
    ],
    '/relearn/css/': [
        {
            text: 'CSS',
            link: '/relearn/css/README.md',
            children: [
                '/relearn/css/README.md',
                '/relearn/css/history.md',

            ],
        },
    ],
    '/relearn/js/': [
        {
            text: 'JavaScript',
            link: '/relearn/js/README.md',
            children: [
                '/relearn/js/history.md',
                '/relearn/js/JavaScript-20-years.md',

            ],
        },
    ],
    '/relearn/browser/': [
        {
            text: 'browser',
            link: '/relearn/browser/README.md',
            children: [
                '/relearn/js/history.md',
                '/relearn/js/JavaScript-20-years.md',

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
}