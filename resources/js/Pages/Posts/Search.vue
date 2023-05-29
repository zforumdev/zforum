<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
    {{ attrs.posts }}
</template>
