import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, useAttrs, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Link, useForm, router } from "@inertiajs/vue3";
import { C as Content } from "./Content-d8260f41.js";
import { _ as _sfc_main$2 } from "./Layout-c5dc6467.js";
const _sfc_main$1 = {
  __name: "Subpost",
  __ssrInlineRender: true,
  props: ["author", "subposts", "body"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Subpost = resolveComponent("Subpost", true);
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border-l pl-2 ml-2 p-2" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-sm mb-2",
        href: `/u/${__props.author}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`@${ssrInterpolate(__props.author)}`);
          } else {
            return [
              createTextVNode("@" + toDisplayString(__props.author), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>${__props.body}</div><!--[-->`);
      ssrRenderList(__props.subposts, (item) => {
        _push(ssrRenderComponent(_component_Subpost, null, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Subpost.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  layout: _sfc_main$2
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    const replyForm = useForm({
      body: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Content, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="not-prose"${_scopeId}><h1 class="font-bold"${_scopeId}>${ssrInterpolate(unref(attrs).post.title)}</h1> by <strong${_scopeId}>${ssrInterpolate(unref(attrs).post.user.display_name)}</strong> `);
            _push2(ssrRenderComponent(unref(Link), {
              href: `/u/${unref(attrs).post.user.username}`,
              class: "text-neutral-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`@${ssrInterpolate(unref(attrs).post.user.username)}`);
                } else {
                  return [
                    createTextVNode("@" + toDisplayString(unref(attrs).post.user.username), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><article${_scopeId}>${unref(attrs).body}</article><hr${_scopeId}><form class="flex gap-2"${_scopeId}><textarea class="textarea textarea-bordered w-full"${_scopeId}>${ssrInterpolate(unref(replyForm).body)}</textarea><button class="btn btn-secondary"${_scopeId}>Post</button></form><div${_scopeId}><!--[-->`);
            ssrRenderList(unref(attrs).subposts, (item) => {
              _push2(ssrRenderComponent(_sfc_main$1, {
                author: item.user.username,
                body: item.body
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "not-prose" }, [
                createVNode("h1", { class: "font-bold" }, toDisplayString(unref(attrs).post.title), 1),
                createTextVNode(" by "),
                createVNode("strong", null, toDisplayString(unref(attrs).post.user.display_name), 1),
                createTextVNode(),
                createVNode(unref(Link), {
                  href: `/u/${unref(attrs).post.user.username}`,
                  class: "text-neutral-500"
                }, {
                  default: withCtx(() => [
                    createTextVNode("@" + toDisplayString(unref(attrs).post.user.username), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              createVNode("article", {
                innerHTML: unref(attrs).body
              }, null, 8, ["innerHTML"]),
              createVNode("hr"),
              createVNode("form", {
                class: "flex gap-2",
                onSubmit: withModifiers(($event) => unref(router).post(`${unref(router).page.url}/reply`, unref(replyForm)), ["prevent"])
              }, [
                withDirectives(createVNode("textarea", {
                  class: "textarea textarea-bordered w-full",
                  "onUpdate:modelValue": ($event) => unref(replyForm).body = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, unref(replyForm).body]
                ]),
                createVNode("button", { class: "btn btn-secondary" }, "Post")
              ], 40, ["onSubmit"]),
              createVNode("div", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(attrs).subposts, (item) => {
                  return openBlock(), createBlock(_sfc_main$1, {
                    author: item.user.username,
                    body: item.body
                  }, null, 8, ["author", "body"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
