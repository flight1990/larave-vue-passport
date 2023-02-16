<template>
  <div>
      <h3>{{ authUser.name }}</h3>
      <small>{{ authUser.email }}</small>

      <div>
          <a href="#" @click.prevent="logout">Logout</a>
      </div>

  </div>
</template>

<script>

import {mapGetters, mapActions} from "vuex";

export default {
    name: "AuthUser",
    computed: {
        ...mapGetters({authUser: "auth/authUser"})
    },
    methods: {
        ...mapActions({logout: "auth/logout"})
    }

}
</script>
