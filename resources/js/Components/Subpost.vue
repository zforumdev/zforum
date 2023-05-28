<script setup>
import { ref } from 'vue'
import { Link, router, useForm } from '@inertiajs/vue3'
import { render } from '../render.js'

const props = defineProps(['author', 'subposts', 'body', 'id', 'parent'])

const show = ref(false)

const replyForm = useForm({
    body: '',
    parent_id: props.id
})

const makeSubpost = () => {
    router.post(`${router.page.url.replace('?', '')}/reply-nested`, replyForm)
    replyForm.body = ''
}

const filtered = (id) => props.subposts.filter((i) => i.parent_id === id)

console.log(props.subposts)
</script>

<template>
    <div class="border-l pl-2 ml-2 p-2">
        <Link class="text-sm mb-2" :href="`/u/${author}`">@{{ author }}</Link>

        <div v-html="render(body.replace(/(<([^>]+)>)/gi, ''), true)" class="whitespace-pre"></div>

        <button @click="show = !show" class="text-sm text-neutral-500">+ reply</button>
        <form v-if="show" class="flex
            'parent_id' => ['exists:subposts,id'] gap-2" @submit.prevent="makeSubpost">
            <textarea class="textarea textarea-bordered w-full" rows="1" v-model="replyForm.body"></textarea>
            <input type="number" v-model="replyForm.parent_id" hidden>
            <button class="btn btn-secondary">Post</button>
        </form>

        <div v-for="item in subposts">
            <Subpost :author="item.user.username"
                     :body="item.body"
                     :id="item.id"
                     :parent="item.parent_id"
                     :subposts="filtered(item.id)"
            />
        </div>
    </div>
</template>
