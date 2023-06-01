<script setup>
import { ref, useAttrs } from 'vue'
import { Link, router, useForm } from '@inertiajs/vue3'
import Content from '../../Components/Content.vue'
import CreateMeta from '../../Components/CreateMeta.vue'
import { config } from '../../config.js'
import Comment from '../../Components/Comment.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const attrs = useAttrs()
const allComments = ref(attrs.comments.data)

const commentForm = useForm({
    body: ''
})

const storeComment = () => {
    router.post(`${router.page.url}/add-comment`, commentForm)
    commentForm.body = ''
}

const loadMore = () => {
    router.visit(attrs.comments.next_page_url, {
        preserveState: true,
        preserveScroll: true,
        only: ['comments'],
        onSuccess: (data) => {
            allComments.value.push(...data.props.comments.data)
        }
    })
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
            <h1 class="font-bold text-xl">{{ attrs.post.title }}</h1>
            by <strong>{{ attrs.post.user.display_name }}</strong> <Link :href="`/u/${attrs.post.user.username}`" class="text-neutral-500">@{{ attrs.post.user.username }}</Link>
            <p>
                posted {{ dayjs(attrs.post.created_at).fromNow() }} ({{ dayjs(attrs.post.created_at).format('YYYY-MM-DD') }})
                <span v-if="attrs.post.edited_at != null">
                    edited {{ dayjs(attrs.post.edited_at).fromNow() }} ({{ dayjs(attrs.post.edited_at).format('YYYY-MM-DD') }})
                </span>
            </p>
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

        <div class="card bg-base-200 p-4 mt-4" v-if="allComments.length > 0">
            <div class="space-y-8">
                <Comment v-for="item in allComments"
                         :author="item.user.username"
                         :body="item.body"
                         :id="item.id"
                         :replies="item.replies"
                         :created="item.created_at"
                         :updated="item.updated_at"
                />
            </div>

            <button v-if="attrs.comments.current_page !== attrs.comments.last_page"
                    class="btn btn-primary w-full mt-5" @click="loadMore">
                Load More
            </button>
        </div>
    </Content>
</template>
