import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ResearchPage from '@/views/ResearchPage.vue';
import OrderView from '@/views/OrderView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage,
    },
    {
        path: '/product',
        name: 'Product',
        component: ResearchPage,
    },
    {
        path: '/Order',
        name: 'OrderView',
        component: OrderView,
    },
    {
        path: '/Basket',
        name: 'Panier'
    },
    {
        path: '/Login',
        name: 'login',
        component: LoginView
    }
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Utilise Vite pour les variables d'environnement
    routes,
});

export default router;
