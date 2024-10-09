import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BlogList from "../views/BlogList.vue";
import BlogPost from "../views/BlogPost.vue";
import CreatePost from "../views/CreatePost.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogList },
    { path: '/blog/:id', component: BlogPost, props: true },
    { path: '/create', component: CreatePost },
    { path: '/login', component: LoginPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;