<template>
    <h1>Create new user</h1>

    <form @submit.prevent="storeUser(payload)">
        <BaseInput
            type="text"
            name="name"
            label="Name"
            v-model="payload.name" />

        <BaseInput
            type="text"
            name="email"
            label="Email"
            v-model="payload.email"/>

        <BaseInput
            type="password"
            name="password"
            label="Password"
            v-model="payload.password"/>

        <BaseInput
            type="password"
            name="password_confirmation"
            label="Password Confirmation"
            v-model="payload.password_confirmation"/>

        <BaseBtn text="Save new user" />
    </form>

    <router-link :to="{name: 'users.index'}">Return to users list</router-link>
</template>

<script>

import {mapActions} from "vuex";

import BaseInput from "@/components/BaseInput.vue";
import BaseBtn from "@/components/BaseBtn.vue";

export default {
    name: "Create",
    components: {
        BaseInput,
        BaseBtn
    },
    data() {
        return {
            payload: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        }
    },
    methods: {
        ...mapActions({storeUser: "users/storeUser"})
    }
}
</script>
