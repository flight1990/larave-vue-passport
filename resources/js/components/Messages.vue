<template>
    <div v-if="errorMessage">
        {{ errorMessage }}
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "Messages",
    computed: {
        ...mapGetters({errorMessage: "errors/errorMessage"})
    }
}
</script>
