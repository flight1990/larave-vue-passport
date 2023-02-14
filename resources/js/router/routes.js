
const Default  = () => import("@/views/layouts/Default.vue");

const Home  = () => import("@/views/pages/Home.vue");
const NotFound  = () => import("@/views/pages/NotFound.vue");

const Login  = () => import("@/views/auth/Login.vue");
const Register  = () => import("@/views/auth/Register.vue");

const routes = [
    {
        path: "/",
        component: Default,
        children: [
            {
                name: "home",
                path: "/",
                component: Home
            },
            {
                name: "login",
                path: "/login",
                component: Login
            },
            {
                name: "register",
                path: "/register",
                component: Register
            }
        ]
    },
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: NotFound
    }
];

export default routes
