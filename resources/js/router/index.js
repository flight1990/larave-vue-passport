import { createWebHistory, createRouter } from 'vue-router';
import routes from "@/router/routes";
import store from "@/store";
import middlewarePipeline from "@/router/middlewarePipeline";


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {

    store.dispatch("errors/clearValidationErrors");
    store.dispatch("errors/clearValidationErrors");

    const middleware = to.meta.middleware;
    const context = { to, from, next, store };

    if (!middleware) {
        return next();
    }

    middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    });
});

export default router
