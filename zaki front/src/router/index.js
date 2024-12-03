import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import ResearchPage from '@/views/ResearchPage.vue';
import Categories from '@/components/Products/Categories.vue';

const categories = {
    'cereales': {
        name: 'cereals',
        image: new URL('@/assets/categories/cereals.webp', import.meta.url).href,
        description: 'Riz, maïs, mil, sorgho, etc.',
        items: [ 'Riz', 'Maïs', 'Mil', 'Sorgho', 'Blé', 'Avoine', 'Orge', 'Fonio']
    },
    'fruits': {
        name: 'Fruits',
        image: new URL('@/assets/categories/fruits.webp', import.meta.url).href,
        description: 'Mangue, orange, ananas, etc.',
        items: ['Mangue', 'Orange', 'Ananas', 'Papaye', 'Banane', 'Goyave']
    },
}

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
        path: '/categorie/:categoryName',
        name: 'Category',
        component: Categories,
        props: route => {
            const category = categories[route.params.categoryName];
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
