<script setup>
import { useAttrs } from 'vue'
import Content from '../../Components/Content.vue'
import { router } from '@inertiajs/vue3'

const attrs = useAttrs()
</script>

<script>
import Layout from '../../Layouts/Layout.vue'

export default {
    layout: Layout
}
</script>

<template>
    <Content>
        <div class="flex justify-between bg-base-200 not-prose rounded-box p-4">
            <div class="flex">
                <img src="//daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    class="h-[4rem] object-contain aspect-square rounded-full mr-4"
                >
                <div class="flex justify-center flex-col">
                    <h1 class="text-2xl font-bold">{{ attrs.user.display_name }}</h1>
                    <h2>@{{ attrs.user.username }}</h2>
                </div>
            </div>

            <div class="flex justify-center flex-col">
                <h1>mod options</h1>
                <div class="flex justify-end gap-2">
                    <form class="tooltip tooltip-secondary"
                          data-tip="Restrict user"
                          @submit.prevent="router.post(`/admin/toggle-restrict-user/${attrs.user.id}`)"
                    >
                        <button><i class="fa-solid fa-ban"></i></button>
                    </form>

                    <form class="tooltip tooltip-secondary"
                          data-tip="Ban user"
                          @submit.prevent="router.post(`/admin/toggle-ban-user/${attrs.user.id}`)"
                    >
                        <button><i class="fa-solid fa-gavel"></i></button>
                    </form>

                    <form class="tooltip tooltip-secondary"
                          data-tip="Delete user"
                          @submit.prevent="router.post(`/admin/delete-user/${attrs.user.id}`)"
                    >
                        <button><i class="fa-solid fa-trash"></i></button>
                    </form>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2">
            <div>

            </div>

            <div>

            </div>
        </div>
    </Content>
</template>
