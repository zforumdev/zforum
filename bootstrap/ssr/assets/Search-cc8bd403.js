import { useAttrs, unref, useSSRContext } from "vue";
import { ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`${ssrInterpolate(unref(attrs).posts)}`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
