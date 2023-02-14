export default {
    namespaced: true,
    state: {
        processing: false,
    },
    getters: {
        isProcessing(state) {
            return state.processing
        }
    },
    mutations: {
        SET_PROCESSING(state, value) {
            state.processing = value
        }
    }
}
