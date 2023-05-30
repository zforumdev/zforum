import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { createSSRApp, h } from "vue";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": () => import("./assets/Login-eba70ea9.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-f06f210a.js"), "./Pages/Home.vue": () => import("./assets/Home-33f6504b.js"), "./Pages/Posts/Create.vue": () => import("./assets/Create-07e626da.js"), "./Pages/Posts/Search.vue": () => import("./assets/Search-cc8bd403.js"), "./Pages/Posts/Show.vue": () => import("./assets/Show-f4584d82.js") });
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
