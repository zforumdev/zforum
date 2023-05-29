import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": () => import("./assets/Login-8b7ca6c1.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-33c83243.js"), "./Pages/Home.vue": () => import("./assets/Home-6588d8ca.js"), "./Pages/Posts/Create.vue": () => import("./assets/Create-7d0b40f1.js"), "./Pages/Posts/Show.vue": () => import("./assets/Show-ebace019.js") });
      return pages[`./Pages/${name}.vue`]();
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    },
    progress: {
      color: "#381E72",
      includeCSS: true
    }
  })
);
