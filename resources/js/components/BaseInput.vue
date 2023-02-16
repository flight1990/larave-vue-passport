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
            @change="delete validationsErrors[name]"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
        />
        <template v-if="validationsErrors[name]">
            <small v-for="(error, i) in validationsErrors[name]" :key="i">{{ error }}</small>
        </template>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "BaseInput",
    computed: {
        ...mapGetters({loading: "loader/isProcessing", validationsErrors: "errors/validationErrors"})
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
