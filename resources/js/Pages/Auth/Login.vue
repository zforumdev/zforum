<script setup>
import { router, useForm } from '@inertiajs/vue3'
import AuthLayout from '../../Layouts/AuthLayout.vue'

const form = useForm({
    email: '',
    password: '',
    remember: true,
})

const login = () => {
    router.post('/auth/login', form)
}
</script>

<template>
    <AuthLayout page="login">
        <form @submit.prevent="login" class="card card-bordered bg-base-200 p-4 space-y-8">
            <label>
                Email
                <input type="email" v-model="form.email" class="input w-full input-bordered">
                <span v-if="$attrs.errors.email" class="text-error">{{ $attrs.errors.email }}</span>
            </label>
            <label>
                Password
                <input type="password" v-model="form.password" class="input w-full input-bordered">
                <span v-if="$attrs.errors.password" class="text-error">{{ $attrs.errors.password }}</span>
            </label>

            <label class="flex">
                <input type="checkbox" v-model="form.remember" class="checkbox" />
                <span class="label-text ml-2 my-auto">Remember Me</span>
            </label>

            <button class="btn btn-primary">Register</button>
        </form>
    </AuthLayout>
</template>
