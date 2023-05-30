import { useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { usePage, useForm, Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const showSearch = ref(false);
    const page = usePage();
    const searchForm = useForm({
      search: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "drawer max-h-[100%] drawer-mobile" }, _attrs))}><input id="sidebar" type="checkbox" class="drawer-toggle"><div class="drawer-content flex flex-col"><div class="navbar bg-base-200"><div class="flex-1 gap-3"><label for="sidebar" class="btn btn-primary drawer-button lg:hidden"><i class="fa-solid fa-bars"></i></label><button class="btn btn-secondary btn-circle"><i class="fa-solid fa-rotate-right"></i></button>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: "btn btn-ghost normal-case text-xl font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`VForum`);
          } else {
            return [
              createTextVNode("VForum")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-none gap-2"><div class="form-control"><form><input type="text" placeholder="Search" class="input input-bordered hidden sm:block"${ssrRenderAttr("value", unref(searchForm).search)}></form><button class="btn btn-secondary btn-circle block sm:hidden"><i class="fa-solid fa-magnifying-glass"></i></button></div>`);
      if (_ctx.$page.props.auth) {
        _push(`<div class="dropdown dropdown-end"><label tabindex="0" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img src="//daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></label><ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"><li>`);
        _push(ssrRenderComponent(unref(Link), {
          href: `/u/${_ctx.$page.props.auth.username}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Profile`);
            } else {
              return [
                createTextVNode("Profile")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li><a>Settings</a></li><li><form><button>Logout</button></form></li></ul></div>`);
      } else {
        _push(`<div class="dropdown dropdown-end">`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/auth/login",
          class: "btn btn-ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Log In`);
            } else {
              return [
                createTextVNode("Log In")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="hidden sm:inline">`);
        _push(ssrRenderComponent(unref(Link), {
          href: "/auth/register",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Register`);
            } else {
              return [
                createTextVNode("Register")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div></div>`);
      if (showSearch.value) {
        _push(`<form class="bg-base-200 pb-2 flex gap-2 px-2"><input type="text" placeholder="Search" class="input input-bordered w-full px-2"${ssrRenderAttr("value", unref(searchForm).search)}><button class="btn btn-primary">Search</button></form>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="drawer-side"><label for="sidebar" class="drawer-overlay"></label><ul class="menu p-4 pt-2 w-80 max-w-[90vw] bg-base-200 text-base-content"><li class="mb-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/posts/create",
        class: "btn btn-accent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}><i class="fa-solid fa-plus"${_scopeId}></i> Create Post </span>`);
          } else {
            return [
              createVNode("span", null, [
                createVNode("i", { class: "fa-solid fa-plus" }),
                createTextVNode(" Create Post ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: { active: unref(page).url.startsWith("/?") || unref(page).url === "/" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` All Posts `);
          } else {
            return [
              createTextVNode(" All Posts ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><!--[-->`);
      ssrRenderList(_ctx.$page.props.subforums, (item) => {
        _push(ssrRenderComponent(unref(Link), {
          href: `/s/${item.slug}`,
          class: { active: unref(page).url.startsWith(`/s/${item.slug}`) }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
