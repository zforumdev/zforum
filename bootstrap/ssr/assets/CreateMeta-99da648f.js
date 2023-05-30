import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
const config = {
  "name": "VForum",
  "description": "VForum is a forum software created with Laravel and Vue, made to be used or run by anyone.",
  "url": "https://localhost",
  "meta-image": "https://bbfs.midiidev.xyz/uploads/JvdkFR2/467242c739438cf51d2eeafb3116f4e0.png"
};
const _sfc_main = {
  __name: "CreateMeta",
  __ssrInlineRender: true,
  props: [
    "title",
    "description",
    "image"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.title)} - ${ssrInterpolate(unref(config).name)}</title><meta name="title"${ssrRenderAttr("content", __props.title)}${_scopeId}><meta name="description"${ssrRenderAttr("content", __props.description ?? unref(config).description)}${_scopeId}><meta name="theme-color" content="#381e72"${_scopeId}><meta property="og:type" content="website"${_scopeId}><meta property="og:url"${ssrRenderAttr("content", unref(config).url)}${_scopeId}><meta property="og:title"${ssrRenderAttr("content", `${__props.title} - ${unref(config).name}`)}${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.description ?? unref(config).description)}${_scopeId}><meta property="twitter:card" content="summary_large_image"${_scopeId}><meta property="twitter:url"${ssrRenderAttr("content", unref(config).url)}${_scopeId}><meta property="twitter:title"${ssrRenderAttr("content", `${__props.title} - ${unref(config).name}`)}${_scopeId}><meta property="twitter:description"${ssrRenderAttr("content", __props.description)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.title) + " - " + toDisplayString(unref(config).name), 1),
              createVNode("meta", {
                name: "title",
                content: __props.title
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "description",
                content: __props.description ?? unref(config).description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "theme-color",
                content: "#381e72"
              }),
              createVNode("meta", {
                property: "og:type",
                content: "website"
              }),
              createVNode("meta", {
                property: "og:url",
                content: unref(config).url
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:title",
                content: `${__props.title} - ${unref(config).name}`
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:description",
                content: __props.description ?? unref(config).description
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                property: "twitter:url",
                content: unref(config).url
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:title",
                content: `${__props.title} - ${unref(config).name}`
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "twitter:description",
                content: __props.description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CreateMeta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  config as c
};
