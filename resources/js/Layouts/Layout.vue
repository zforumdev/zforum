<script setup>
import { ref } from 'vue'
import { Link, router, useForm, usePage } from '@inertiajs/vue3'

const showSearch = ref(false)

const page = usePage()

const searchForm = useForm({
    search: ''
})

const reload = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('page')
    router.get(`${url.pathname}${url.search}`, { preserveScroll: true, preserveState: true })
}

const search = () => {
    if (router.page.url.startsWith('/?' || '/s/') || router.page.url === '/') {
        const url = new URL(window.location.href)
        url.searchParams.delete('page')
        url.searchParams.delete('search')
        url.searchParams.append('search', searchForm.search)
        router.get(`${url.pathname}${url.search}`)
    } else {
        router.get(`/?search=${searchForm.search}`)
    }
}
</script>

<template>
    <div class="drawer max-h-[100%] drawer-mobile">
        <input id="sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <div class="navbar bg-base-200">
                <div class="flex-1 gap-3">
                    <label for="sidebar" class="btn btn-primary drawer-button lg:hidden">
                        <i class="fa-solid fa-bars"></i>
                    </label>
                    <button @click="reload" class="btn btn-secondary btn-circle">
                        <i class="fa-solid fa-rotate-right"></i>
                    </button>
                    <Link href="/" class="btn btn-ghost normal-case text-xl font-bold">VForum</Link>
                </div>
                <div class="flex-none gap-2">
                    <div class="form-control">
                        <form @submit.prevent="search">
                            <input type="text"
                                   placeholder="Search"
                                   class="input input-bordered hidden sm:block"
                                   v-model="searchForm.search"
                            />
                        </form>
                        <button @click="showSearch = !showSearch" class="btn btn-secondary btn-circle block sm:hidden">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div v-if="$page.props.auth" class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="//daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><Link :href="`/u/${$page.props.auth.username}`">Profile</Link></li>
                            <li><a>Settings</a></li>
                            <li>
                                <form @submit.prevent="router.post('/auth/logout', null)">
                                    <button>Logout</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="dropdown dropdown-end">
                        <Link href="/auth/login" class="btn btn-ghost">Log In</Link>
                        <div class="hidden sm:inline">
                            <Link href="/auth/register" class="btn btn-primary">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
            <form v-if="showSearch" class="bg-base-200 pb-2 flex gap-2 px-2" @submit.prevent="search">
                <input type="text"
                       placeholder="Search"
                       class="input input-bordered w-full px-2"
                       v-model="searchForm.search"
                />
                <button class="btn btn-primary">Search</button>
            </form>

            <slot />
        </div>
        <div class="drawer-side">
            <label for="sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 pt-2 w-80 max-w-[90vw] bg-base-200 text-base-content">
                <li class="mb-2">
                    <Link href="/posts/create" class="btn btn-accent">
                        <span>
                            <i class="fa-solid fa-plus"></i> Create Post
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                          :class="{ active: page.url.startsWith('/?') || page.url === '/' }"
                    >
                        All Posts
                    </Link>
                </li>
                <li>
                    <Link v-for="item in $page.props.subforums"
                          :href="`/s/${item.slug}`"
                          :class="{ active: page.url.startsWith(`/s/${item.slug}`) }"
                    >
                        {{ item.name }}
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</template>
