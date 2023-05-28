import { useAttrs, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { C as Content } from "./Content-d8260f41.js";
import { _ as _sfc_main$1 } from "./Layout-c5dc6467.js";
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Content, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-center"${_scopeId}>${ssrInterpolate(unref(attrs).sub)}</h1><article class="space-y-5"${_scopeId}><!--[-->`);
            ssrRenderList(unref(attrs).posts, (item, index) => {
              _push2(`<section class="not-prose"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: `/post/${item.id}`,
                class: "card bg-base-200 p-4 no-underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-sm breadcrumbs"${_scopeId2}><ul${_scopeId2}><li${_scopeId2}>Root</li><li${_scopeId2}>${ssrInterpolate(item.subforum.name)}</li><li${_scopeId2}>Post</li></ul></div><h3 class="text-2xl font-bold"${_scopeId2}>${ssrInterpolate(item.title)}</h3><span${_scopeId2}>by @${ssrInterpolate(item.user.username)}</span>`);
                  } else {
                    return [
                      createVNode("div", { class: "text-sm breadcrumbs" }, [
                        createVNode("ul", null, [
                          createVNode("li", null, "Root"),
                          createVNode("li", null, toDisplayString(item.subforum.name), 1),
                          createVNode("li", null, "Post")
                        ])
                      ]),
                      createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(item.title), 1),
                      createVNode("span", null, "by @" + toDisplayString(item.user.username), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</section>`);
            });
            _push2(`<!--]--></article>`);
          } else {
            return [
              createVNode("h1", { class: "text-center" }, toDisplayString(unref(attrs).sub), 1),
              createVNode("article", { class: "space-y-5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(attrs).posts, (item, index) => {
                  return openBlock(), createBlock("section", { class: "not-prose" }, [
                    createVNode(unref(Link), {
                      href: `/post/${item.id}`,
                      class: "card bg-base-200 p-4 no-underline"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-sm breadcrumbs" }, [
                          createVNode("ul", null, [
                            createVNode("li", null, "Root"),
                            createVNode("li", null, toDisplayString(item.subforum.name), 1),
                            createVNode("li", null, "Post")
                          ])
                        ]),
                        createVNode("h3", { class: "text-2xl font-bold" }, toDisplayString(item.title), 1),
                        createVNode("span", null, "by @" + toDisplayString(item.user.username), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 256))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
