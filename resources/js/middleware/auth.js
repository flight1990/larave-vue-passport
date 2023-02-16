export default function auth({to, next, store}) {
    store.dispatch("auth/getAuthUser").then(() => {
        if (!store.getters["auth/authUser"]) next({name: 'login'});
        else next();
    });
}
