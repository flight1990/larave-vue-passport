<template>
    <h1>Users</h1>

    <router-link :to="{name: 'users.create'}">Create new user</router-link>

    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody v-if="users.length">
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <router-link :to="{name: 'users.edit', params: {id: user.id}}">Edit</router-link>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">{{ loading ? "Loading data..." : "No data..." }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {
    name: "Index",
    computed: {
        ...mapGetters({users: "users/users", loading: "loader/isProcessing"})
    },
    methods: {
        ...mapActions({fetchUsers: "users/fetchUsers"})
    },
    mounted() {
        this.fetchUsers();
    }
}
</script>
