<script setup>
import { ref } from 'vue'
import { router, useForm } from '@inertiajs/vue3'
import AuthLayout from '../../Layouts/AuthLayout.vue'

const form = useForm({
    display_name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    tos_confirm: false
})

const register = () => {
    router.post('/auth/register', form)
}
</script>

<script>
import Layout from '../../Layouts/Layout.vue'

export default {
    layout: Layout
}
</script>

<template>
    <AuthLayout page="register">
        <form @submit.prevent="register" class="card card-bordered bg-base-200 p-4 space-y-8">
            <label>
                Display Name
                <input v-model="form.display_name" class="input bg-primary w-full input-bordered" required>
                <span v-if="$attrs.errors.display_name" class="text-error">{{ $attrs.errors.display_name }}</span>
            </label>
            <label>
                Username
                <input v-model="form.username" class="input w-full input-bordered" required>
                <span v-if="$attrs.errors.username" class="text-error">{{ $attrs.errors.username }}</span>
            </label>
            <label>
                Email
                <input type="email" v-model="form.email" class="input w-full input-bordered" required>
                <span v-if="$attrs.errors.email" class="text-error">{{ $attrs.errors.email }}</span>
            </label>
            <label>
                Password
                <input type="password" v-model="form.password" class="input w-full input-bordered" required>
                <span v-if="$attrs.errors.password" class="text-error">{{ $attrs.errors.password }}</span>
            </label>
            <label>
                Password (Confirm)
                <input type="password" v-model="form.password_confirmation" class="input w-full input-bordered" required>
            </label>

            <label class="flex">
                <input type="checkbox" v-model="form.tos_confirm" class="checkbox" required />
                <span class="label-text ml-2 my-auto">I agree to the Terms of Service and the Privacy Policy</span>
            </label>

            <button class="btn btn-primary">Register</button>
        </form>
    </AuthLayout>
</template>
