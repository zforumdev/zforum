import { withCtx, unref, createTextVNode, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { C as Content } from "./Content-d8260f41.js";
const _sfc_main = {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
