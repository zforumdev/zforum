import { useAttrs, ref, onMounted, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { router, Link } from "@inertiajs/vue3";
import { C as Content } from "./Content-d8260f41.js";
import { _ as _sfc_main$1 } from "./CreateMeta-99da648f.js";
import { _ as _sfc_main$2 } from "./Layout-07c57a74.js";
const __default__ = {
  layout: _sfc_main$2
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    ref(null);
    const allPosts = ref(attrs.posts.data ?? attrs.posts);
    onMounted(() => {
      if (attrs.posts.current_page !== 1) {
        const url = new URL(window.location.href);
        url.searchParams.delete("page");
        router.get(`${url.pathname}${url.search}`);
      }
    });
    const loadMore = () => {
      router.visit(attrs.posts.next_page_url, {
        preserveState: true,
        preserveScroll: true,
        only: ["posts"],
        onSuccess: (data) => {
          allPosts.value.push(...data.props.posts.data);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { title: "Home" }, null, _parent));
      _push(ssrRenderComponent(Content, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<h1 class="text-center" style="${ssrRenderStyle({ "margin-bottom": "0" })}"${_scopeId}>${ssrInterpolate(((_a = unref(attrs).subforum) == null ? void 0 : _a.name) ?? "All Posts")}</h1>`);
            if (unref(attrs).subforum != null) {
              _push2(`<div class="text-center"${_scopeId}><p${_scopeId}>${ssrInterpolate(unref(attrs).subforum.description)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<article class="space-y-5" id="el"${_scopeId}><!--[-->`);
            ssrRenderList(allPosts.value, (item, index) => {
              _push2(`<section class="not-prose"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: `/post/${item.id}`,
                class: "card bg-base-200 p-4 no-underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="text-sm breadcrumbs"${_scopeId2}><ul${_scopeId2}><li${_scopeId2}>Root</li><li${_scopeId2}>${ssrInterpolate(item.subforum.name)}</li><li${_scopeId2}>Post</li></ul></div><h3 class="text-2xl font-bold"${_scopeId2}>${ssrInterpolate(item.title)}</h3><span${_scopeId2}>by @${ssrInterpolate(item.user.username)}</span><p${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
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
                      createVNode("span", null, "by @" + toDisplayString(item.user.username), 1),
                      createVNode("p", null, toDisplayString(item.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</section>`);
            });
            _push2(`<!--]--></article>`);
            if (unref(attrs).posts.current_page !== unref(attrs).posts.last_page) {
              _push2(`<button class="btn btn-primary w-full mt-5"${_scopeId}> Load More </button>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("h1", {
                class: "text-center",
                style: { "margin-bottom": "0" }
              }, toDisplayString(((_b = unref(attrs).subforum) == null ? void 0 : _b.name) ?? "All Posts"), 1),
              unref(attrs).subforum != null ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center"
              }, [
                createVNode("p", null, toDisplayString(unref(attrs).subforum.description), 1)
              ])) : createCommentVNode("", true),
              createVNode("article", {
                class: "space-y-5",
                id: "el"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(allPosts.value, (item, index) => {
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
                        createVNode("span", null, "by @" + toDisplayString(item.user.username), 1),
                        createVNode("p", null, toDisplayString(item.description), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 256))
              ]),
              unref(attrs).posts.current_page !== unref(attrs).posts.last_page ? (openBlock(), createBlock("button", {
                key: 1,
                class: "btn btn-primary w-full mt-5",
                onClick: loadMore
              }, " Load More ")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
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
