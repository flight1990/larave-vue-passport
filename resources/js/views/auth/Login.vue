<template>
    <h1>Login</h1>

    <form @submit.prevent="login(payload)">
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

        <BaseBtn text="Login"/>
    </form>

    <router-link :to="{name: 'register'}">Register</router-link>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseBtn from "@/components/BaseBtn.vue";
import {mapActions} from "vuex";

export default {
    name: "Login",
    components: {
        BaseInput,
        BaseBtn
    },
    data() {
        return {
            payload: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        ...mapActions({login: "auth/login"})
    }
}
</script>
