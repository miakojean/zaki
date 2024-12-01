<template>
    <div>
        <header class="section__header">
            <h2> Nos produits </h2>
            <h3>
                Découvrer ci-dessous les différentes catégories de produits
            </h3>
        </header>
        <div class="custom-head-divider"></div>
        <div class="card__container">
            <div class="cards" v-for="(category) in categories" :key="category">
                <h3>{{ category }}</h3>
                <img 
                    class="Pic" 
                    :src="getCategoryImagePath(category)" 
                    :alt="category" 
                />
                <p>{{ getCategoryDescription(category) }}</p>
                <MoreButton />
            </div>
        </div>
    </div>
</template>
  
<script>
import MoreButton from '../MoreButton.vue';

export default {
    components: {
        MoreButton,
    },
    data() {
        return {
            categories: [
                'Fruits',
                'Légumes',
                'Tubercules',
                'Céréales et Grains',
                'Légumineuses',
                'Produits de la mer',
                'Produits dérivés du lait',
                'Viandes',
                'Épices et Condiments',
                'Huiles et Graisses',
                'Fleurs et Plantes aromatiques',
                'Produits transformés locaux'
            ]
        };
    },
    methods: {
        getCategoryImagePath(category) {
            const imageMap = {
                'Fruits': new URL('@/assets/categories/fruits.webp', import.meta.url).href,
                'Légumes': new URL('@/assets/categories/legumes.webp', import.meta.url).href,
                'Tubercules': new URL('@/assets/categories/tubercules.png', import.meta.url).href,
                'Céréales et Grains': new URL('@/assets/categories/cereals.webp', import.meta.url).href,
                'Légumineuses': new URL('@/assets/categories/legumineuses.webp', import.meta.url).href,
                'Produits de la mer': new URL('@/assets/categories/produits-de-la-mer.webp', import.meta.url).href,
                'Produits dérivés du lait': new URL('@/assets/categories/produits-laitiers.webp', import.meta.url).href,
                'Viandes': new URL('@/assets/categories/viandes.webp', import.meta.url).href,
                'Épices et Condiments': new URL('@/assets/categories/epices.webp', import.meta.url).href,
                'Huiles et Graisses': new URL('@/assets/categories/huiles.webp', import.meta.url).href,
                'Fleurs et Plantes aromatiques': new URL('@/assets/categories/fleurs-plantes.webp', import.meta.url).href,
                'Produits transformés locaux': new URL('@/assets/categories/produits-transformes.webp', import.meta.url).href
            };

            return imageMap[category] || new URL('@/assets/categories/default.webp', import.meta.url).href;
        },
        getCategoryDescription(category) {
            const descriptions = {
                'Fruits': 'Mangue, orange, ananas, etc.',
                'Légumes': 'Tomates, oignons, aubergines, etc.',
                'Tubercules': 'Igname, manioc, patate douce, etc.',
                'Céréales et Grains': 'Riz, maïs, millet, etc.',
                'Légumineuses': 'Haricots, pois, lentilles, etc.',
                'Produits de la mer': 'Poisson fumé, crevettes, etc.',
                'Produits dérivés du lait': 'Lait, fromage, yaourt, etc.',
                'Viandes': 'Poulet, bœuf, agneau, etc.',
                'Épices et Condiments': 'Piments, gingembre, ail, etc.',
                'Huiles et Graisses': 'Huile de palme, beurre de karité, etc.',
                'Fleurs et Plantes aromatiques': 'Basilic, menthe, etc.',
                'Produits transformés locaux': 'Attiéké, gari, etc.'
            };
            return descriptions[category] || 'Description non disponible.';
        }
    }
};
</script>
