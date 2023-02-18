import router from "@/router";

export default {
    namespaced: true,
    state: {
        users: [],
        user: {}
    },
    getters: {
        users(state) {
            return state.users
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        },
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        async fetchUsers({commit, dispatch}) {
            commit("loader/SET_PROCESSING", true, {root: true});
            try {
                const response = await axios.get('/api/v1/users');
                commit("SET_USERS", response.data.data);

            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true});
            }
            commit("loader/SET_PROCESSING", false, {root: true});
        },
        async fetchUser({commit}, id) {
            commit("loader/SET_PROCESSING", true, {root: true});
            try {
                const response = await axios.get(`/api/v1/users/${id}`);
                commit("SET_USER", response.data.data);
            } catch (e) {
                commit("loader/SET_PROCESSING", true, {root: true});
            }
            commit("loader/SET_PROCESSING", false, {root: true});
        },
        async storeUser({commit, dispatch}, payload) {
            commit("loader/SET_PROCESSING", true, {root: true});
            try {
                await axios.post('/api/v1/users', payload);
                router.push({name: 'users.index'});

            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true});
            }
            commit("loader/SET_PROCESSING", false, {root: true});
        },
        async updateUser({commit, dispatch}, data) {
            commit("loader/SET_PROCESSING", true, {root: true});

            const {id, payload} = data;

            try {
                await axios.put(`/api/v1/users/${id}`, payload);
                router.push({name: 'users.index'});

            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true});
            }

            commit("loader/SET_PROCESSING", false, {root: true});
        },
        async destroyUser({commit, dispatch}, id) {
            commit("loader/SET_PROCESSING", true, {root: true});

            try {
                await axios.delete(`/api/v1/users/${id}`);
                router.push({name: 'users.index'});

            } catch (e) {
                dispatch("errors/processingErrors", e, {root: true});
            }

            commit("loader/SET_PROCESSING", false, {root: true});
        }
    }

}
