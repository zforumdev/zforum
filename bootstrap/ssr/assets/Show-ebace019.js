import { useAttrs, unref, withCtx, createTextVNode, toDisplayString, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useForm, Link, router } from "@inertiajs/vue3";
import { C as Content } from "./Content-d8260f41.js";
import { _ as _sfc_main$1 } from "./CreateMeta-c7ee5eb6.js";
import { _ as _sfc_main$2 } from "./Layout-c5dc6467.js";
const name = "VForum";
const description = "VForum is a forum software created with Laravel and Vue, made to be used or run by anyone.";
const url = "https://localhost";
const config = {
  name,
  description,
  url,
  "meta-image": "https://bbfs.midiidev.xyz/uploads/JvdkFR2/467242c739438cf51d2eeafb3116f4e0.png"
};
const __default__ = {
  layout: _sfc_main$2
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    const commentForm = useForm({
      body: ""
    });
    const storeComment = () => {
      router.post(`${router.page.url}/reply`, commentForm);
      commentForm.body = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: unref(attrs).post.title,
        description: `${unref(attrs).description} Comment on this post or create your own posts at ${unref(config).url}`
      }, null, _parent));
      _push(ssrRenderComponent(Content, null, {
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
            _push2(`</div><article${_scopeId}>${unref(attrs).body}</article><hr${_scopeId}><form class="flex gap-2"${_scopeId}><textarea class="textarea textarea-bordered w-full" rows="1"${_scopeId}>${ssrInterpolate(unref(commentForm).body)}</textarea><button class="btn btn-secondary"${_scopeId}>Post</button></form><!--[-->`);
            ssrRenderList(unref(attrs).comments, (item) => {
              _push2(`<div${_scopeId}><p${_scopeId}>${ssrInterpolate(item.body)}</p></div>`);
            });
            _push2(`<!--]-->`);
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
                onSubmit: withModifiers(storeComment, ["prevent"])
              }, [
                withDirectives(createVNode("textarea", {
                  class: "textarea textarea-bordered w-full",
                  rows: "1",
                  "onUpdate:modelValue": ($event) => unref(commentForm).body = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, unref(commentForm).body]
                ]),
                createVNode("button", { class: "btn btn-secondary" }, "Post")
              ], 40, ["onSubmit"]),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(attrs).comments, (item) => {
                return openBlock(), createBlock("div", null, [
                  createVNode("p", null, toDisplayString(item.body), 1)
                ]);
              }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
