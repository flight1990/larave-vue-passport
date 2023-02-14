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
        async login({commit}, payload) {

            commit("loader/SET_PROCESSING", true, {root: true})
            commit("loader/SET_PROCESSING", false, {root: true})

            // router.push({name: 'home'})
        },
        async register({commit}, payload) {
            commit("loader/SET_PROCESSING", true, {root: true})
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
