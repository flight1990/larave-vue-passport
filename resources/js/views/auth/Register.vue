<template>
    <h1>Register</h1>

    <form @submit.prevent="register(payload)">
        <BaseInput
            type="text"
            name="name"
            label="Name"
            v-model="payload.name"
        />
        <BaseInput
            type="text"
            name="email"
            label="Email"
            v-model="payload.email"
        />
        <BaseInput
            type="password"
            name="password"
            label="Password"
            v-model="payload.password"
        />
        <BaseInput
            type="password"
            name="password_confirmation"
            label="Password Confirmation"
            v-model="payload.password_confirmation"
        />
        <BaseBtn text="Register"/>
    </form>

    <router-link :to="{name: 'login'}">Login</router-link>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseBtn from "@/components/BaseBtn.vue";
import {mapActions} from "vuex";

export default {
    name: "Register",
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
        ...mapActions({register: "auth/register"})
    }
}
</script>
