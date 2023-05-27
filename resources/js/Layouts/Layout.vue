<script setup>
import { ref } from 'vue'
import { Link, router } from '@inertiajs/vue3'

const showSearch = ref(false)
</script>

<template>
    <div class="drawer max-h-[100%] drawer-mobile">
        <input id="sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <div class="navbar bg-base-200">
                <div class="flex-1">
                    <label for="sidebar" class="btn btn-primary drawer-button lg:hidden">
                        <i class="fa-solid fa-bars"></i>
                    </label>
                    <Link href="/" class="btn btn-ghost normal-case text-xl font-bold">VForum</Link>
                </div>
                <div class="flex-none gap-2">
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered hidden sm:block" />
                        <button @click="showSearch = !showSearch" class="btn btn-secondary block sm:hidden">
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
                            <li><Link :href="`/users/${$page.props.auth.id}`">Profile</Link></li>
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
                        <Link href="/auth/register" class="btn btn-primary">Register</Link>
                    </div>
                </div>
            </div>
            <div v-if="showSearch" class="bg-base-200 pb-2">
                <input type="text" placeholder="Search" class="input input-bordered w-full px-2" />
            </div>

            <slot />
        </div>
        <div class="drawer-side">
            <label for="sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 bg-base-200 text-base-content">
                <label for="sidebar" class="btn btn-primary drawer-button lg:hidden">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>

        </div>
    </div>
</template>
