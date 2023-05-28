<script setup>
import { useAttrs } from 'vue'
import { Link, router, useForm } from '@inertiajs/vue3'
import Content from '../../Components/Content.vue'
import Subpost from '../../Components/Subpost.vue'

const attrs = useAttrs()

const replyForm = useForm({
    body: ''
})

const makeSubpost = () => {
    router.post(`${router.page.url}/reply`, replyForm)
    replyForm.body = ''
}

const filtered = (id) => attrs.subposts.filter((i) => i.parent_id === id)
</script>

<script>
import Layout from '../../Layouts/Layout.vue'

export default {
    layout: Layout
}
</script>

<template>
    <Content>
        <div class="not-prose">
            <h1 class="font-bold">{{ attrs.post.title }}</h1>
            by <strong>{{ attrs.post.user.display_name }}</strong> <Link :href="`/u/${attrs.post.user.username}`" class="text-neutral-500">@{{ attrs.post.user.username }}</Link>
        </div>

        <article v-html="attrs.body"></article>

        <hr />

        <form class="flex gap-2" @submit.prevent="makeSubpost">
            <textarea class="textarea textarea-bordered w-full" rows="1" v-model="replyForm.body"></textarea>
            <button class="btn btn-secondary">Post</button>
        </form>

        <div v-for="item in attrs.subposts">
            <Subpost v-if="!item.parent_id"
                     :author="item.user.username"
                     :body="item.body"
                     :id="item.id"
                     :subposts="filtered(item.id)"
            />
        </div>
    </Content>
</template>
