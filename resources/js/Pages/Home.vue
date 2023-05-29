<script setup>
import { onMounted, ref, useAttrs } from 'vue'
import { Link, router } from '@inertiajs/vue3'
import Content from '../Components/Content.vue'
import CreateMeta from '../Components/CreateMeta.vue'

const attrs = useAttrs()

const el = ref(null)
const allPosts = ref(attrs.posts.data)

onMounted(() => {
    if (attrs.posts.current_page !== 1) {
        const url = new URL(window.location.href)
        url.searchParams.delete('page')
        router.get(`${url.pathname}${url.search}`)
    }
})

const loadMore = () => {
    router.visit(attrs.posts.next_page_url, {
        preserveState: true,
        preserveScroll: true,
        only: ['posts'],
        onSuccess: (data) => {
           allPosts.value.push(...data.props.posts.data)
        }
    })
}
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
        <article class="space-y-5" id="el">
            <section v-for="(item, index) in allPosts" class="not-prose">
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
        <button v-if="attrs.posts.current_page !== attrs.posts.last_page"
                class="btn btn-primary w-full mt-5" @click="loadMore">
            Load More
        </button>
    </Content>
</template>
