import auth from "@/middleware/auth";
import guest from "@/middleware/guest";


const Default = () => import("@/views/layouts/Default.vue");

const Home = () => import("@/views/pages/Home.vue");
const UsersIndex = () => import("@/views/pages/users/Index.vue");
const UsersCreate = () => import("@/views/pages/users/Create.vue");
const UsersEdit = () => import("@/views/pages/users/Edit.vue");
const NotFound = () => import("@/views/pages/NotFound.vue");

const Login = () => import("@/views/auth/Login.vue");
const Register = () => import("@/views/auth/Register.vue");

const routes = [
    {
        path: "/",
        component: Default,
        children: [
            {
                name: "home",
                path: "/",
                component: Home,
                meta: {middleware: [auth]},
            },
            {
                name: "users.index",
                path: "/users",
                component: UsersIndex,
                meta: {middleware: [auth]},
            },
            {
                name: "users.create",
                path: "/users/create",
                component: UsersCreate,
                meta: {middleware: [auth]},
            },
            {
                name: "users.edit",
                path: "/users/:id/edit",
                component: UsersEdit,
                meta: {middleware: [auth]},
            },
            {
                name: "login",
                path: "/login",
                component: Login,
                meta: {middleware: [guest]},
            },
            {
                name: "register",
                path: "/register",
                component: Register,
                meta: {middleware: [guest]},
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
