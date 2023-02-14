<template>
    <div>
        <label
            :for="name"
            v-if="label"
        >
            {{ label }}
        </label>
        <input
            :disabled="loading"
            :id="name"
            :type="type"
            :value="modelValue"
            @input="updateValue"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
        />
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "BaseInput",
    computed: {
        ...mapGetters({loading: "loader/isProcessing"})
    },
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: null,
        },
        autocomplete: {
            type: String,
            default: null,
        },
    },
    methods: {
        updateValue(event) {
            return this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>
