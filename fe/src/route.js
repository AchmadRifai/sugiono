import { createRouter, createWebHistory } from "vue-router"
import Index from './view/Index.vue'
import Test from './view/Test.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index
        }, {
            path: '/test',
            component: Test
        }, {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ],
})