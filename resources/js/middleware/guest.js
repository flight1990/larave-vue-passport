export default function guest({ next, store }) {
    if (store.getters["auth/authToken"] && store.getters["auth/authUser"]) {
        next({ name: "home" });
    } else {
        next();
    }
}
