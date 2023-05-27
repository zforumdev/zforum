import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import Layout from './Layouts/Layout.vue'

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
            let page = pages[`./Pages/${name}.vue`]
            page.default.layout = page.default.layout || Layout
            return page
        },
        setup({ App, props, plugin }) {
            return createSSRApp({
                render: () => h(App, props),
            }).use(plugin)
        },
        progress: {
            color: '#381E72',
            includeCSS: true
        }
    }),
)
