// import axios from "axios";

export default {
    namespaced: true,
    state: {
        user: null,
        token: null
    },
    getters: {
        authUser(state) {
            return state.user
        },
        authToken(state) {
            return state.token
        }
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        SET_TOKEN(state, token) {
            state.token = token
        }
    },
    actions: {
        async login({commit, dispatch}, payload) {

            commit("loader/SET_PROCESSING", true, {root: true})

            try {
                const response = await axios.post('/api/v1/login', payload)
                console.log(response)
            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true})
            }

            commit("loader/SET_PROCESSING", false, {root: true})

            // router.push({name: 'home'})
        },
        async register({commit, dispatch}, payload) {
            commit("loader/SET_PROCESSING", true, {root: true})

            try {
                const response = await axios.post('/api/v1/register', payload)
                console.log(response)
            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true})
            }

            commit("loader/SET_PROCESSING", false, {root: true})

            // router.push({name: 'home'})
        },
        async logout({commit}) {
            commit("loader/SET_PROCESSING", true, {root: true})
            commit("loader/SET_PROCESSING", false, {root: true})
            // router.push({name: 'login'})
        }
    }
}
