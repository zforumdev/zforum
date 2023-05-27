<script setup>
import { useAttrs } from 'vue'
import { Link } from '@inertiajs/vue3'
import Content from '../../Components/Content.vue'

const attrs = useAttrs()
</script>

<template>
    <Content>
        <div class="not-prose">
            <h1 class="font-bold">{{ attrs.post.title }}</h1>
            by <strong>{{ attrs.post.user.display_name }}</strong> <Link :href="`/u/${attrs.post.user.username}`" class="text-neutral-500">@{{ attrs.post.user.username }}</Link>
        </div>

        <div v-html="attrs.body"></div>
    </Content>
</template>
