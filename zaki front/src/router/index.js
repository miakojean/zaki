import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ResearchPage from '@/views/ResearchPage.vue';

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
        path: '/Basket',
        name: 'Panier'
    }
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Utilise Vite pour les variables d'environnement
    routes,
});

export default router;
