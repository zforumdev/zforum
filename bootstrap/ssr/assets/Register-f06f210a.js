import { mergeProps, withCtx, unref, createVNode, withModifiers, createTextVNode, withDirectives, vModelText, openBlock, createBlock, toDisplayString, createCommentVNode, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthLayout-db282edd.js";
import { _ as _sfc_main$2 } from "./Layout-07c57a74.js";
import "./Content-d8260f41.js";
const __default__ = {
  layout: _sfc_main$2
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ page: "register" }, _attrs), {
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
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
