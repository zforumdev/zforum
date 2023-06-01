<script setup>
import { Head } from '@inertiajs/vue3'
import { config } from '../config.js'

const props = defineProps([
    'title',
    'description',
    'image',
])

const escape = (str) => {
    return str.replace(/&/g, "&amp;")
        .replace(/>/g, "&gt;")
        .replace(/</g, "&lt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g,"&apos;")
}
</script>

<template>
    <Head>
        <title>{{ title }} - {{ config.name }}</title>
        <meta name="title" :content="escape(title)">
        <meta name="description" :content="escape(description ?? config.description)">
        <meta name="theme-color" content="#381e72">
        <meta property="og:type" content="website">
        <meta property="og:url" :content="escape(config.url)">
        <meta property="og:title" :content="escape(`${title} - ${config.name}`)">
        <meta property="og:description" :content="escape(description ?? config.description)">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" :content="escape(config.url)">
        <meta property="twitter:title" :content="escape(`${title} - ${config.name}`)">
        <meta property="twitter:description" :content="escape(description ?? config.description)">
    </Head>
</template>
