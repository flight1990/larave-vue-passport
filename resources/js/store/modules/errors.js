export default {
    namespaced: true,
    state: {
        validationErrors: {},
        errorMessage: null
    },
    getters: {
        validationErrors(state) {
            return state.validationErrors
        },
        errorMessage(state) {
            return state.errorMessage
        }
    },
    mutations: {
        SET_VALIDATION_ERRORS(state, errors) {
            state.validationErrors = errors
        },
        SET_ERROR_MESSAGE(state, message) {
            state.errorMessage = message
        }
    },
    actions: {
        processingErrors({commit}, errors) {
            if (errors.response.status === 422) {
                commit("SET_VALIDATION_ERRORS", errors.response.data.errors)
            }
        },
        clearValidationErrors({commit, getters}) {
            if (Object.keys(getters.validationErrors).length) commit("SET_VALIDATION_ERRORS", {});
        }
    }
}
