import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, mergeProps, useAttrs, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, withDirectives, vModelText, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { Link, useForm, router } from "@inertiajs/vue3";
import { C as Content } from "./Content-d8260f41.js";
import { _ as _sfc_main$3, c as config } from "./CreateMeta-99da648f.js";
import { r as render } from "./render-615d7717.js";
import { _ as _sfc_main$4 } from "./Layout-07c57a74.js";
import "marked";
const _sfc_main$2 = {
  __name: "Reply",
  __ssrInlineRender: true,
  props: [
    "id",
    "author",
    "body"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-sm text-neutral-500",
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
      _push(`</div><p class="prose">${__props.body}</p></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Reply.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Comment",
  __ssrInlineRender: true,
  props: [
    "id",
    "author",
    "body",
    "replies"
  ],
  setup(__props) {
    const props = __props;
    const rendered = render(props.body, true);
    const showReplyInput = ref(false);
    const showReplies = ref(false);
    const replyForm = useForm({
      body: "",
      comment_id: props.id
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-sm text-neutral-500",
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
      _push(` | <button class="text-sm">reply</button></div><p class="prose">${unref(rendered)}</p>`);
      if (showReplyInput.value) {
        _push(`<form class="flex gap-2"><input class="input input-bordered w-full"${ssrRenderAttr("value", unref(replyForm).body)}><input${ssrRenderAttr("value", unref(replyForm).comment_id)} hidden><button class="btn btn-secondary">Reply</button></form>`);
      } else {
        _push(`<!---->`);
      }
      if (props.replies.length > 0) {
        _push(`<button class="text-sm">${ssrInterpolate(showReplies.value ? "hide" : "show")} replies <i class="${ssrRenderClass([showReplies.value ? "fa-chevron-up" : "fa-chevron-down", "fa-solid"])}"></i></button>`);
      } else {
        _push(`<!---->`);
      }
      if (props.replies.length > 0 && showReplies.value) {
        _push(`<div class="card bg-base-300 space-y-2 p-4"><!--[-->`);
        ssrRenderList(props.replies, (item) => {
          _push(ssrRenderComponent(_sfc_main$2, {
            id: item.id,
            author: item.user.username,
            body: item.body
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Comment.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  layout: _sfc_main$4
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
      router.post(`${router.page.url}/add-comment`, commentForm);
      commentForm.body = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
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
            _push2(`<form class="text-neutral-500 space-x-2"${_scopeId}>`);
            if (unref(attrs).update) {
              _push2(ssrRenderComponent(unref(Link), {
                href: `/post/${unref(attrs).post.id}/update`,
                class: "fa-solid fa-edit"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(attrs).delete) {
              _push2(`<button class="fa-solid fa-trash-alt"${_scopeId}></button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</form></div><article${_scopeId}>${unref(attrs).body}</article><hr${_scopeId}><form class="flex gap-2"${_scopeId}><textarea class="textarea textarea-bordered w-full" rows="1"${_scopeId}>${ssrInterpolate(unref(commentForm).body)}</textarea><button class="btn btn-secondary"${_scopeId}>Post</button></form>`);
            if (unref(attrs).comments.length > 0) {
              _push2(`<div class="card bg-base-200 p-4 mt-4"${_scopeId}><div class="space-y-8"${_scopeId}><!--[-->`);
              ssrRenderList(unref(attrs).comments, (item) => {
                _push2(ssrRenderComponent(_sfc_main$1, {
                  author: item.user.username,
                  body: item.body,
                  id: item.id,
                  replies: item.replies
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
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
                }, 8, ["href"]),
                createVNode("form", {
                  class: "text-neutral-500 space-x-2",
                  onSubmit: withModifiers(($event) => unref(router).post(`/post/${unref(attrs).post.id}/delete`, null), ["prevent"])
                }, [
                  unref(attrs).update ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: `/post/${unref(attrs).post.id}/update`,
                    class: "fa-solid fa-edit"
                  }, null, 8, ["href"])) : createCommentVNode("", true),
                  unref(attrs).delete ? (openBlock(), createBlock("button", {
                    key: 1,
                    class: "fa-solid fa-trash-alt"
                  })) : createCommentVNode("", true)
                ], 40, ["onSubmit"])
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
              unref(attrs).comments.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "card bg-base-200 p-4 mt-4"
              }, [
                createVNode("div", { class: "space-y-8" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(attrs).comments, (item) => {
                    return openBlock(), createBlock(_sfc_main$1, {
                      author: item.user.username,
                      body: item.body,
                      id: item.id,
                      replies: item.replies
                    }, null, 8, ["author", "body", "id", "replies"]);
                  }), 256))
                ])
              ])) : createCommentVNode("", true)
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
