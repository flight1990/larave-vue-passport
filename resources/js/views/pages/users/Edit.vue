`<template>
    <h1>Edit user</h1>

    <form @submit.prevent="updateUser({id: user.id, payload: payload})">
        <BaseInput
            type="text"
            name="name"
            label="Name"
            v-model="payload.name"/>

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

        <BaseBtn text="Update user"/>
        <BaseBtn type="button" text="Delete user" @click.prevent="destroyUser(user.id)"/>
    </form>

    <router-link :to="{name: 'users.index'}">Return to users list</router-link>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

import BaseInput from "@/components/BaseInput.vue";
import BaseBtn from "@/components/BaseBtn.vue";

export default {
    name: "Edit",
    components: {
        BaseInput,
        BaseBtn
    },
    computed: {
        ...mapGetters({user: "users/user"}),
    },
    watch: {
        user(user) {
            const {name, email} = user;

            this.payload.name = name;
            this.payload.email = email;
        }
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
        ...mapActions({fetchUser: "users/fetchUser", destroyUser: "users/destroyUser", updateUser: "users/updateUser"})
    },
    mounted() {
        this.fetchUser(this.$route.params.id);
    }
}
</script>
