import { createRouter, createWebHistory } from "vue-router"
import Index from '@/components/Main/Index.vue'
import AddTitle from '@/components/AddTitle/AddTitle.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/add_title',
            name: 'AddTitle',
            component: AddTitle,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }

    ]
})
export default router;