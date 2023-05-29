<script setup>
import { useAttrs } from 'vue'
import { Link } from '@inertiajs/vue3'
import Content from '../Components/Content.vue'
import CreateMeta from '../Components/CreateMeta.vue'

const attrs = useAttrs()
</script>

<script>
import Layout from '../Layouts/Layout.vue'

export default {
    layout: Layout
}
</script>

<template>
    <CreateMeta title="Home" />
    <Content>
        <h1 class="text-center">{{ attrs.sub }}</h1>
        <article class="space-y-5">
            <section v-for="(item, index) in attrs.posts" class="not-prose">
                <Link :href="`/post/${item.id}`" class="card bg-base-200 p-4 no-underline">
                    <div class="text-sm breadcrumbs">
                        <ul>
                            <li>Root</li>
                            <li>{{ item.subforum.name }}</li>
                            <li>Post</li>
                        </ul>
                    </div>
                    <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                    <span>by @{{ item.user.username }}</span>
                </Link>
            </section>
        </article>
    </Content>
</template>
