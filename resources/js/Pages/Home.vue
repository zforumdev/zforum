<script setup>
import { onMounted, ref, useAttrs } from 'vue'
import { Link, router } from '@inertiajs/vue3'
import Content from '../Components/Content.vue'
import CreateMeta from '../Components/CreateMeta.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Layout from '../Layouts/Layout.vue'
dayjs.extend(relativeTime)

const attrs = useAttrs()

const el = ref(null)
const allPosts = ref(attrs.posts.data ?? attrs.posts)

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
        <h1 class="text-center" style="margin-bottom: 0">{{ attrs.subforum?.name ?? 'All Posts' }}</h1>
        <div class="text-center" v-if="attrs.subforum != null">
            <p>{{ attrs.subforum.description }}</p>
        </div>

        <article class="space-y-5" id="el">
            <section v-for="item in allPosts" class="not-prose">
                <Link :href="`/post/${item.id}`" class="card bg-base-200 p-4 no-underline active:scale-[0.98] transition duration-70 ease-in-out">
                    <div class="text-sm breadcrumbs">
                        <ul>
                            <li>/</li>
                            <li>{{ item.subforum.name }}</li>
                            <li>@{{ item.user.username }}</li>
                            <li>Post</li>
                        </ul>
                    </div>
                    <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                    <span>by <strong>{{ item.user.display_name }}</strong> | posted {{ dayjs(item.created_at).fromNow() }}</span>
                    <p>{{ item.description }}</p>
                </Link>
            </section>
        </article>
        <button v-if="attrs.posts.current_page !== attrs.posts.last_page"
                class="btn btn-primary w-full mt-5" @click="loadMore">
            Load More
        </button>
    </Content>
</template>
