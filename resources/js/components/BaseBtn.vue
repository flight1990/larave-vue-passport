<template>
    <button
        :disabled="loading"
        :type="type"
    >
        {{ text }}
    </button>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "BaseBtn",
    computed: {
        ...mapGetters({loading: "loader/isProcessing"})
    },
    props: {
        type: {
            type: String,
            default: "submit",
        },
        text: {
            type: String,
            default: "Submit",
        },
    },
};
</script>
