import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ResearchPage from '@/views/ResearchPage.vue';
import LoginView from '@/views/LoginView.vue';
import Registration from '@/views/Registration.vue';
import Products from '@/components/Products/Products.vue';
import OrderSection from '@/components/Order/OrderSection.vue';

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
        path:'/product/:category',
        name:'categories',
        component: Products,
    },
    {
        path: '/Order',
        name: 'OrderView',
        component: OrderSection,
    },
    {
        path: '/Basket',
        name: 'Panier'
    },
    {
        path: '/Login',
        name: 'login',
        component: LoginView
    },
    {
        path:'/Registration',
        name: 'Inscription',
        component: Registration
    },
    
    
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Utilise Vite pour les variables d'environnement
    routes,
});

export default router;
