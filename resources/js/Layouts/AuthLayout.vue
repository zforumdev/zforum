<script setup>
import { Link } from '@inertiajs/vue3'
import Layout from './Layout.vue'
import Content from '../Components/Content.vue'

const props = defineProps(['page'])
</script>

<template>
    <Layout>
        <Content>
            <div class="not-prose flex mb-4 w-fit mx-auto">
                <Link href="/auth/register" :class="{ underline: props.page === 'register' }">Register</Link>
                <div class="divider divider-horizontal"></div>
                <Link href="/auth/login" :class="{ underline: props.page === 'login' }">Log in</Link>
            </div>

            <slot />
        </Content>
    </Layout>
</template>
