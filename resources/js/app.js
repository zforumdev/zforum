import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue')
        return pages[`./Pages/${name}.vue`]()
    },
    setup({ el, App, props, plugin }) {
        createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
    progress: {
        color: '#381E72',
        includeCSS: true
    }
})
