import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ResearchPage from '@/views/ResearchPage.vue';
import Categories from '@/components/Products/Categories.vue';
import { categoriesData } from '@/data/categoriesData.js';

console.log(categoriesData.céréales)


const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage,
    },
    {
        path: '/Products',
        name: 'Products',
        component: ResearchPage,
    },
    {
        path: '/products/categorie/:categoryName',
        name: 'Category',
        component: Categories,
        props: route => {
            const category = categoriesData[route.params.categoryName]; // Utilise categoriesData
            if (!category) {
                console.warn(`La catégorie '${route.params.categoryName}' n'existe pas.`);
            }
            return { category: category || null };
        }
    }      
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Utilise Vite pour les variables d'environnement
    routes,
});

export default router;
