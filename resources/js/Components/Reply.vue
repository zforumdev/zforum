<script setup>
import { Link } from '@inertiajs/vue3'

const props = defineProps([
    'id',
    'author',
    'body',
    'created',
    'updated'
])
</script>

<template>
    <div>
        <div>
            <Link class="text-sm text-neutral-500" :href="`/u/${author}`">@{{ author }}</Link>
        </div>

        <p class="prose" v-html="body"></p>
    </div>
</template>
