import { mergeProps, useSSRContext, withCtx, unref, createTextVNode, createVNode, renderSlot, withModifiers, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vModelCheckbox, useAttrs, Fragment, renderList, ref, watch, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { Link, useForm, router, usePage, createInertiaApp } from "@inertiajs/vue3";
import { Codemirror } from "vue-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import { marked } from "marked";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "prose w-[65ch] mx-auto p-4" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Content.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Content = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = {
  __name: "AuthLayout",
  __ssrInlineRender: true,
  props: ["page"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Content, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="not-prose flex mb-4 w-fit mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/auth/register",
              class: { underline: props.page === "register" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="divider divider-horizontal"${_scopeId}></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/auth/login",
              class: { underline: props.page === "login" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log in`);
                } else {
                  return [
                    createTextVNode("Log in")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("div", { class: "not-prose flex mb-4 w-fit mx-auto" }, [
                createVNode(unref(Link), {
                  href: "/auth/register",
                  class: { underline: props.page === "register" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Register")
                  ]),
                  _: 1
                }, 8, ["class"]),
                createVNode("div", { class: "divider divider-horizontal" }),
                createVNode(unref(Link), {
                  href: "/auth/login",
                  class: { underline: props.page === "login" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Log in")
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: true
    });
    const login = () => {
      router.post("/auth/login", form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({ page: "login" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="card card-bordered bg-base-200 p-4 space-y-8"${_scopeId}><label${_scopeId}> Email <input type="email"${ssrRenderAttr("value", unref(form).email)} class="input w-full input-bordered"${_scopeId}>`);
            if (_ctx.$attrs.errors.email) {
              _push2(`<span class="text-error"${_scopeId}>${ssrInterpolate(_ctx.$attrs.errors.email)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label><label${_scopeId}> Password <input type="password"${ssrRenderAttr("value", unref(form).password)} class="input w-full input-bordered"${_scopeId}>`);
            if (_ctx.$attrs.errors.password) {
              _push2(`<span class="text-error"${_scopeId}>${ssrInterpolate(_ctx.$attrs.errors.password)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label><label class="flex"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} class="checkbox"${_scopeId}><span class="label-text ml-2 my-auto"${_scopeId}>Remember Me</span></label><button class="btn btn-primary"${_scopeId}>Register</button></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(login, ["prevent"]),
                class: "card card-bordered bg-base-200 p-4 space-y-8"
              }, [
                createVNode("label", null, [
                  createTextVNode(" Email "),
                  withDirectives(createVNode("input", {
                    type: "email",
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    class: "input w-full input-bordered"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).email]
                  ]),
                  _ctx.$attrs.errors.email ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-error"
                  }, toDisplayString(_ctx.$attrs.errors.email), 1)) : createCommentVNode("", true)
                ]),
                createVNode("label", null, [
                  createTextVNode(" Password "),
                  withDirectives(createVNode("input", {
                    type: "password",
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    class: "input w-full input-bordered"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).password]
                  ]),
                  _ctx.$attrs.errors.password ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-error"
                  }, toDisplayString(_ctx.$attrs.errors.password), 1)) : createCommentVNode("", true)
                ]),
                createVNode("label", { class: "flex" }, [
                  withDirectives(createVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                    class: "checkbox"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelCheckbox, unref(form).remember]
                  ]),
                  createVNode("span", { class: "label-text ml-2 my-auto" }, "Remember Me")
                ]),
                createVNode("button", { class: "btn btn-primary" }, "Register")
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      display_name: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      tos_confirm: false
    });
    const register = () => {
      router.post("/auth/register", form);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({ page: "register" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="card card-bordered bg-base-200 p-4 space-y-8"${_scopeId}><label${_scopeId}> Display Name <input${ssrRenderAttr("value", unref(form).display_name)} class="input bg-primary w-full input-bordered" required${_scopeId}>`);
            if (_ctx.$attrs.errors.display_name) {
              _push2(`<span class="text-error"${_scopeId}>${ssrInterpolate(_ctx.$attrs.errors.display_name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label><label${_scopeId}> Username <input${ssrRenderAttr("value", unref(form).username)} class="input w-full input-bordered" required${_scopeId}>`);
            if (_ctx.$attrs.errors.username) {
              _push2(`<span class="text-error"${_scopeId}>${ssrInterpolate(_ctx.$attrs.errors.username)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label><label${_scopeId}> Email <input type="email"${ssrRenderAttr("value", unref(form).email)} class="input w-full input-bordered" required${_scopeId}>`);
            if (_ctx.$attrs.errors.email) {
              _push2(`<span class="text-error"${_scopeId}>${ssrInterpolate(_ctx.$attrs.errors.email)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label><label${_scopeId}> Password <input type="password"${ssrRenderAttr("value", unref(form).password)} class="input w-full input-bordered" required${_scopeId}>`);
            if (_ctx.$attrs.errors.password) {
              _push2(`<span class="text-error"${_scopeId}>${ssrInterpolate(_ctx.$attrs.errors.password)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label><label${_scopeId}> Password (Confirm) <input type="password"${ssrRenderAttr("value", unref(form).password_confirmation)} class="input w-full input-bordered" required${_scopeId}></label><label class="flex"${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).tos_confirm) ? ssrLooseContain(unref(form).tos_confirm, null) : unref(form).tos_confirm) ? " checked" : ""} class="checkbox" required${_scopeId}><span class="label-text ml-2 my-auto"${_scopeId}>I agree to the Terms of Service and the Privacy Policy</span></label><button class="btn btn-primary"${_scopeId}>Register</button></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(register, ["prevent"]),
                class: "card card-bordered bg-base-200 p-4 space-y-8"
              }, [
                createVNode("label", null, [
                  createTextVNode(" Display Name "),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => unref(form).display_name = $event,
                    class: "input bg-primary w-full input-bordered",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).display_name]
                  ]),
                  _ctx.$attrs.errors.display_name ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-error"
                  }, toDisplayString(_ctx.$attrs.errors.display_name), 1)) : createCommentVNode("", true)
                ]),
                createVNode("label", null, [
                  createTextVNode(" Username "),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => unref(form).username = $event,
                    class: "input w-full input-bordered",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).username]
                  ]),
                  _ctx.$attrs.errors.username ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-error"
                  }, toDisplayString(_ctx.$attrs.errors.username), 1)) : createCommentVNode("", true)
                ]),
                createVNode("label", null, [
                  createTextVNode(" Email "),
                  withDirectives(createVNode("input", {
                    type: "email",
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    class: "input w-full input-bordered",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).email]
                  ]),
                  _ctx.$attrs.errors.email ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-error"
                  }, toDisplayString(_ctx.$attrs.errors.email), 1)) : createCommentVNode("", true)
                ]),
                createVNode("label", null, [
                  createTextVNode(" Password "),
                  withDirectives(createVNode("input", {
                    type: "password",
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    class: "input w-full input-bordered",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).password]
                  ]),
                  _ctx.$attrs.errors.password ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-error"
                  }, toDisplayString(_ctx.$attrs.errors.password), 1)) : createCommentVNode("", true)
                ]),
                createVNode("label", null, [
                  createTextVNode(" Password (Confirm) "),
                  withDirectives(createVNode("input", {
                    type: "password",
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    class: "input w-full input-bordered",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).password_confirmation]
                  ])
                ]),
                createVNode("label", { class: "flex" }, [
                  withDirectives(createVNode("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": ($event) => unref(form).tos_confirm = $event,
                    class: "checkbox",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelCheckbox, unref(form).tos_confirm]
                  ]),
                  createVNode("span", { class: "label-text ml-2 my-auto" }, "I agree to the Terms of Service and the Privacy Policy")
                ]),
                createVNode("button", { class: "btn btn-primary" }, "Register")
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
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
                class: "card bg-base-200 p-4 no-underline w-[65ch]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-2xl font-bold"${_scopeId2}>${ssrInterpolate(item.title)}</h3><span${_scopeId2}>by @${ssrInterpolate(item.user.username)}</span>`);
                  } else {
                    return [
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
                      class: "card bg-base-200 p-4 no-underline w-[65ch]"
                    }, {
                      default: withCtx(() => [
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
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const render = (src) => {
  return marked.parse(
    src.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
    { mangle: false }
  );
};
const _sfc_main$2 = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const code = ref(`# A VForum Post

VForum supports markdown for creating posts, and that's what this code editor is for.

If you don't know markdown, you can [learn it here](https://www.markdownguide.org/)
`);
    const rendered = ref();
    const form = useForm({
      title: "",
      body: "",
      subforum_id: 1
    });
    watch(code, () => {
      rendered.value = render(code.value);
      form.body = code.value;
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><form class="flex justify-between gap-2 p-2 bg-base-200"><input${ssrRenderAttr("value", unref(form).title)} class="input input-bordered w-full" placeholder="Post Title"><input${ssrRenderAttr("value", unref(form).body)} hidden><select class="select select-bordered"><!--[-->`);
      ssrRenderList(_ctx.$page.props.subforums, (item) => {
        _push(`<option${ssrRenderAttr("value", item.id)}>${ssrInterpolate(item.name)}</option>`);
      });
      _push(`<!--]--></select><button class="btn btn-primary">Post</button></form><div class="sm:flex flex-direction-col flex-grow"><div style="${ssrRenderStyle({ "flex": "50%" })}" class="min-w-[50%] sm:max-w-[50%]">`);
      _push(ssrRenderComponent(unref(Codemirror), {
        modelValue: code.value,
        "onUpdate:modelValue": ($event) => code.value = $event,
        extensions: [unref(markdown)(), unref(oneDark)],
        style: { "height": "100%" }
      }, null, _parent));
      _push(`</div><div class="prose p-2">${rendered.value}</div></div><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Create.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
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
            _push2(`</div><div${_scopeId}>${unref(attrs).body}</div>`);
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
              createVNode("div", {
                innerHTML: unref(attrs).body
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Show.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const showSearch = ref(false);
    const page = usePage();
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
      _push(`</div><div class="flex-none gap-2"><div class="form-control"><input type="text" placeholder="Search" class="input input-bordered hidden sm:block"><button class="btn btn-secondary btn-circle block sm:hidden"><i class="fa-solid fa-magnifying-glass"></i></button></div>`);
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
        _push(`</div>`);
      }
      _push(`</div></div>`);
      if (showSearch.value) {
        _push(`<div class="bg-base-200 pb-2"><input type="text" placeholder="Search" class="input input-bordered w-full px-2"></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="drawer-side"><label for="sidebar" class="drawer-overlay"></label><ul class="menu p-4 w-80 max-w-[90vw] bg-base-200 text-base-content"><li class="mb-2">`);
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
        class: { active: unref(page).url === `/` }
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
          class: { active: unref(page).url === `/s/${item.slug}` }
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
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Auth/Register.vue": __vite_glob_0_1, "./Pages/Home.vue": __vite_glob_0_2, "./Pages/Posts/Create.vue": __vite_glob_0_3, "./Pages/Posts/Show.vue": __vite_glob_0_4 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = page2.default.layout || _sfc_main;
      return page2;
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
