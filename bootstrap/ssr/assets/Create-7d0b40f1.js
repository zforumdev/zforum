import { ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { Codemirror } from "vue-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";
import { useForm } from "@inertiajs/vue3";
import { marked } from "marked";
import { _ as _sfc_main$1 } from "./Layout-c5dc6467.js";
const render = (src, inline) => {
  if (inline) {
    return marked.parseInline(
      src.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
      { mangle: false }
    );
  } else {
    return marked.parse(
      src.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""),
      { mangle: false }
    );
  }
};
const __default__ = {
  layout: _sfc_main$1
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
