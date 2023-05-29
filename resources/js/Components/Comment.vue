<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'
import { render } from '../render.js'

const props = defineProps([
    'author',
    'body',
    'replies'
])

const rendered = render(props.body, true)

const showReplyInput = ref(false)
</script>

<template>
    <div class="not-prose">
        <div>
            <Link class="text-sm text-neutral-500" :href="`/u/${author}`">@{{ author }}</Link>
            |
            <button class="text-sm" @click="showReplyInput = !showReplyInput">reply</button>
        </div>

        <div class="prose" v-html="rendered"></div>
    </div>
</template>
