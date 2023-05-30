<script setup>
import { ref, useAttrs, watch } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { markdown } from '@codemirror/lang-markdown'
import { oneDark } from '@codemirror/theme-one-dark'
import { router, useForm } from '@inertiajs/vue3'
import { render } from '../../render.js'

const attrs = useAttrs()

const code = ref(attrs.body ?? `# A VForum Post

VForum supports markdown for creating posts, and that's what this code editor is for.

If you don't know markdown, you can [learn it here](https://www.markdownguide.org/)
`)
const rendered = ref()

const form = useForm({
    title: attrs.title ?? '',
    body: attrs.body ?? '',
    subforum_id: attrs.subforum_id ?? 1
})

watch(code, () => {
    rendered.value = render(code.value)

    form.body = code.value
}, { immediate: true })

const create = () => {
    if (attrs.post) {
        router.post(`/post/${attrs.post.id}/update`, form)
    } else {
        router.post('/posts/create', form)
    }
}
</script>

<script>
import Layout from '../../Layouts/Layout.vue'

export default {
    layout: Layout
}
</script>

<template>
    <form class="flex justify-between gap-2 p-2 bg-base-200" @submit.prevent="create">
        <input v-model="form.title" class="input input-bordered w-full" placeholder="Post Title" :disabled="attrs.post">
        <input v-model="form.body" hidden>
        <select v-model="form.subforum_id" class="select select-bordered" :disabled="attrs.post">
            <option v-for="item in $page.props.subforums" :value="item.id">{{ item.name }}</option>
        </select>
        <button class="btn btn-primary">Post</button>
    </form>

    <div>
        <div v-for="error in attrs.errors" class="text-error">{{ error }}</div>
    </div>

    <div class="sm:flex flex-direction-col flex-grow">
        <div style="flex: 50%" class="min-w-[50%] sm:max-w-[50%]">
           <Codemirror
               v-model="code"
               :extensions="[markdown(), oneDark]"
               style="height: 100%"
            />
        </div>
        <div class="prose p-2" v-html="rendered"></div>
    </div>
</template>
