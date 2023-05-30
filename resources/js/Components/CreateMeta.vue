<script setup>
import { Head } from '@inertiajs/vue3'
import { config } from '../config.js'

const props = defineProps([
    'title',
    'description',
    'image',
])
</script>

<template>
    <Head>
        <title>{{ title }} - {{ config.name }}</title>
        <meta name="title" :content="title">
        <meta name="description" :content="description ?? config.description">
        <meta name="theme-color" content="#381e72">
        <meta property="og:type" content="website">
        <meta property="og:url" :content="config.url">
        <meta property="og:title" :content="`${title} - ${config.name}`">
        <meta property="og:description" :content="description ?? config.description">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" :content="config.url">
        <meta property="twitter:title" :content="`${title} - ${config.name}`">
        <meta property="twitter:description" :content="description">
    </Head>
</template>
