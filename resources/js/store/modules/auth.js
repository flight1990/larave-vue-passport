import router from "@/router";

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
        async getAuthUser({commit, dispatch, getters}) {
            try {
                axios.defaults.headers.common.Authorization = `Bearer ${getters.authToken}`;
                const response = await axios.get('/api/v1/user');

                commit("SET_USER", response.data.data.user);
            } catch (e) {

                commit("SET_USER", null);
                commit("SET_TOKEN", null);

                dispatch("errors/processingErrors", e, {root: true});
            }
        },
        async login({commit, dispatch, getters}, payload) {
            commit("loader/SET_PROCESSING", true, {root: true});

            try {
                const response = await axios.post('/api/v1/login', payload);

                commit("SET_USER", response.data.data.user);
                commit("SET_TOKEN", response.data.data.token);

                router.push({name: 'home'})
            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true})
            }

            commit("loader/SET_PROCESSING", false, {root: true})
        },
        async register({commit, dispatch}, payload) {
            commit("loader/SET_PROCESSING", true, {root: true});

            try {
                const response = await axios.post('/api/v1/register', payload);

                commit("SET_USER", response.data.data.user);
                commit("SET_TOKEN", response.data.data.token);

                router.push({name: 'home'})
            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true});
            }

            commit("loader/SET_PROCESSING", false, {root: true});
        },
        async logout({commit, dispatch}) {
            commit("loader/SET_PROCESSING", true, {root: true});

            try {
                await axios.post('/api/v1/logout');

                commit("SET_USER", null);
                commit("SET_TOKEN", null);

                router.push({name: 'login'});
            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true});
            }

            commit("loader/SET_PROCESSING", false, {root: true});
        },
        setGuest({commit}) {
            commit("SET_USER", null);
            commit("SET_TOKEN", null);
        }
    }
}
