<template>

    <AuthUser v-if="authUser"></AuthUser>

    <header>
        <nav>
            <ul>
                <template v-if="authUser">
                    <li>
                        <router-link :to="{name: 'home'}">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'users.index'}">Users</router-link>
                    </li>
                </template>
                <template v-else>
                    <li>
                        <router-link :to="{name: 'login'}">Login</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'register'}">Register</router-link>
                    </li>
                </template>
            </ul>
        </nav>
    </header>
</template>

<script>

import {mapGetters} from "vuex";
import AuthUser from "./AuthUser.vue";

export default {
    name: "Header",
    components: {
        AuthUser
    },
    computed: {
        ...mapGetters({authUser: "auth/authUser"})
    }
}
</script>
