import { useAttrs, ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { Codemirror } from "vue-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import { useForm } from "@inertiajs/vue3";
import { r as render } from "./render-615d7717.js";
import { _ as _sfc_main$1 } from "./Layout-07c57a74.js";
import "marked";
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const attrs = useAttrs();
    const code = ref(attrs.body ?? `# A VForum Post

VForum supports markdown for creating posts, and that's what this code editor is for.

If you don't know markdown, you can [learn it here](https://www.markdownguide.org/)
`);
    const rendered = ref();
    const form = useForm({
      title: attrs.title ?? "",
      body: attrs.body ?? "",
      subforum_id: attrs.subforum_id ?? 1
    });
    watch(code, () => {
      rendered.value = render(code.value);
      form.body = code.value;
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><form class="flex justify-between gap-2 p-2 bg-base-200"><input${ssrRenderAttr("value", unref(form).title)} class="input input-bordered w-full" placeholder="Post Title"${ssrIncludeBooleanAttr(unref(attrs).post) ? " disabled" : ""}><input${ssrRenderAttr("value", unref(form).body)} hidden><select class="select select-bordered"${ssrIncludeBooleanAttr(unref(attrs).post) ? " disabled" : ""}><!--[-->`);
      ssrRenderList(_ctx.$page.props.subforums, (item) => {
        _push(`<option${ssrRenderAttr("value", item.id)}>${ssrInterpolate(item.name)}</option>`);
      });
      _push(`<!--]--></select><button class="btn btn-primary">Post</button></form><div><!--[-->`);
      ssrRenderList(unref(attrs).errors, (error) => {
        _push(`<div class="text-error">${ssrInterpolate(error)}</div>`);
      });
      _push(`<!--]--></div><div class="sm:flex flex-direction-col flex-grow"><div style="${ssrRenderStyle({ "flex": "50%" })}" class="min-w-[50%] sm:max-w-[50%]">`);
      _push(ssrRenderComponent(unref(Codemirror), {
        modelValue: code.value,
        "onUpdate:modelValue": ($event) => code.value = $event,
        extensions: [unref(markdown)(), unref(oneDark)],
        style: { "height": "100%" }
      }, null, _parent));
      _push(`</div><div class="prose p-2">${rendered.value}</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
