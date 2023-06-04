<script setup>
import { ref } from 'vue'
import { Link, router, useForm } from '@inertiajs/vue3'
import { render } from '../render.js'
import Reply from './Reply.vue'

const props = defineProps([
    'id',
    'author',
    'body',
    'replies',
    'created',
    'updated'
])

const rendered = render(props.body, true)

const showReplyInput = ref(false)

const showReplies = ref(false)

const replyForm = useForm({
    body: '',
    comment_id: props.id
})

const storeReply = () => {
    router.post('/add-reply', replyForm, {
        preserveState: false
    })
    replyForm.body = ''
    showReplies.value = true
    showReplyInput.value = false
}
</script>

<template>
    <div class="not-prose">
        <div class="flex gap-2">
            <Link class="text-sm text-neutral-500" :href="`/u/${author}`">@{{ author }}</Link>
            <button class="text-sm" @click="showReplyInput = !showReplyInput" v-if="$page.props.auth">reply</button>
        </div>

        <p class="prose" v-html="rendered"></p>

        <form v-if="showReplyInput" @submit.prevent="storeReply" class="flex gap-2">
            <input class="input input-bordered w-full" v-model="replyForm.body">
            <input v-model="replyForm.comment_id" hidden>
            <button class="btn btn-secondary">Reply</button>
        </form>

        <button class="text-sm" @click="showReplies = !showReplies" v-if="props.replies.length > 0">
            {{ showReplies ? 'hide' : 'show' }} replies <i class="fa-solid" :class="showReplies ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </button>

        <div class="card bg-base-300 space-y-2 p-4" v-if="props.replies.length > 0 && showReplies">
            <Reply v-for="item in props.replies"
                   :id="item.id"
                   :author="item.user.username"
                   :body="item.body"
                   :created="item.created_at"
                   :updated="item.updated_at"
            />
        </div>
    </div>
</template>
