<script setup>
import { useAttrs } from 'vue'
import { Link, router, useForm } from '@inertiajs/vue3'
import Content from '../../Components/Content.vue'
import CreateMeta from '../../Components/CreateMeta.vue'
import { config } from '../../config.js'
import Comment from '../../Components/Comment.vue'

const attrs = useAttrs()

const commentForm = useForm({
    body: ''
})

const storeComment = () => {
    router.post(`${router.page.url}/add-comment`, commentForm)
    commentForm.body = ''
}
</script>

<script>
import Layout from '../../Layouts/Layout.vue'

export default {
    layout: Layout
}
</script>

<template>
    <CreateMeta :title="attrs.post.title"
                :description="`${attrs.description} Comment on this post or create your own posts at ${config.url}`"
    />
    <Content>
        <div class="not-prose">
            <h1 class="font-bold">{{ attrs.post.title }}</h1>
            by <strong>{{ attrs.post.user.display_name }}</strong> <Link :href="`/u/${attrs.post.user.username}`" class="text-neutral-500">@{{ attrs.post.user.username }}</Link>
            <form class="text-neutral-500 space-x-2" @submit.prevent="router.post(`/post/${attrs.post.id}/delete`, null)">
                <Link v-if="attrs.update" :href="`/post/${attrs.post.id}/update`" class="fa-solid fa-edit"></Link>
                <button v-if="attrs.delete" class="fa-solid fa-trash-alt"></button>
            </form>
        </div>

        <article v-html="attrs.body"></article>

        <hr />

        <form class="flex gap-2" @submit.prevent="storeComment">
            <textarea class="textarea textarea-bordered w-full" rows="1" v-model="commentForm.body"></textarea>
            <button class="btn btn-secondary">Post</button>
        </form>

        <div class="card bg-base-200 p-4 mt-4" v-if="attrs.comments.length > 0">
            <div class="space-y-8">
                <Comment v-for="item in attrs.comments"
                         :author="item.user.username"
                         :body="item.body"
                         :id="item.id"
                         :replies="item.replies"
                />
            </div>
        </div>
    </Content>
</template>
