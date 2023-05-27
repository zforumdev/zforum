<script setup>
import { useAttrs } from 'vue'
import { Link } from '@inertiajs/vue3'
import Content from '../Components/Content.vue'

const attrs = useAttrs()
</script>

<template>
    <Content>
        <h1 class="text-center">{{ attrs.sub }}</h1>
        <article class="space-y-5">
            <section v-for="(item, index) in attrs.posts" class="not-prose">
                <Link :href="`/post/${item.id}`" class="card bg-base-200 p-4 no-underline w-[65ch]">
                    <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                    <span>by @{{ item.user.username }}</span>
                </Link>
            </section>
        </article>
    </Content>
</template>
