import { createWebHistory, createRouter } from 'vue-router';
import routes from "@/router/routes";
import store from "@/store";


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    store.dispatch("errors/clearValidationErrors");
    next();
});

export default router
