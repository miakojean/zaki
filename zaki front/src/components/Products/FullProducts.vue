<template>
    <section>
        <header class="section__header">
            <h2> Nos produits </h2>
            <h3>
                Découvrez ci-dessous les différentes catégories de produits
            </h3>
        </header>
        <div class="custom-head-divider"></div>
        <div class="card__container">
            <div class="cards" v-for="(category, index) in categories" :key="index">
                <h3>{{ category }}</h3>
                <img 
                    class="Pic" 
                    :src="getCategoryImagePath(category)" 
                    :alt="category" 
                />
                <p>{{ getCategoryDescription(category) }}</p>
                <!-- Utilisation de router-link pour rendre le bouton dynamique -->
                <router-link :to="getCategoryUrl(category)">
                    <MoreButton label="Commander" />
                </router-link>
            </div>
        </div>
    </section>
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
                'légumes',
                'Tubercules',
                'céréales',
                'Légumineuses',
                'produits de La Mer',
                'Produits laitiers',
                'Viandes',
                'Epices et Condiments',
                'Huiles et Graisses',
                'Fleurs et Plantes aromatiques',
                'Produits transformes locaux'
            ]
        };
    },
    methods: {
        getCategoryImagePath(category) {
            const imageMap = {
                'Fruits': new URL('@/assets/categories/fruits.webp', import.meta.url).href,
                'légumes': new URL('@/assets/categories/legumes.webp', import.meta.url).href,
                'Tubercules': new URL('@/assets/categories/tubercules.png', import.meta.url).href,
                'céréales': new URL('@/assets/categories/cereals.webp', import.meta.url).href,
                'Légumineuses': new URL('@/assets/categories/legumineuses.webp', import.meta.url).href,
                'Produits de la mer': new URL('@/assets/categories/produits-de-la-mer.webp', import.meta.url).href,
                'Produits dérivés du lait': new URL('@/assets/categories/produits-laitiers.webp', import.meta.url).href,
                'Viandes': new URL('@/assets/categories/viandes.webp', import.meta.url).href,
                'Epices et Condiments': new URL('@/assets/categories/epices.webp', import.meta.url).href,
                'Huiles et Graisses': new URL('@/assets/categories/huiles.webp', import.meta.url).href,
                'Fleurs et Plantes aromatiques': new URL('@/assets/categories/fleurs-plantes.webp', import.meta.url).href,
                'Produits transformés locaux': new URL('@/assets/categories/produits-transformes.webp', import.meta.url).href
            };

            return imageMap[category] || new URL('@/assets/categories/default.webp', import.meta.url).href;
        },
        getCategoryDescription(category) {
            const descriptions = {
                'Fruits': 'Mangue, orange, ananas, etc.',
                'Legumes': 'Tomates, oignons, aubergines, etc.',
                'Tubercules': 'Igname, manioc, patate douce, etc.',
                'Céréales et Grains': 'Riz, maïs, millet, etc.',
                'Légumineuses': 'Haricots, pois, lentilles, etc.',
                'produits De La Mer': 'Poisson fumé, crevettes, etc.',
                'Produits dérivés du lait': 'Lait, fromage, yaourt, etc.',
                'Viandes': 'Poulet, bœuf, agneau, etc.',
                'Epices et Condiments': 'Piments, gingembre, ail, etc.',
                'Huiles et Graisses': 'Huile de palme, beurre de karité, etc.',
                'Fleurs et Plantes aromatiques': 'Basilic, menthe, etc.',
                'Produits transformes locaux': 'Attiéké, gari, etc.'
            };
            return descriptions[category] || 'Description non disponible.';
        },
        getCategoryUrl(category) {
            // Convertir la catégorie en URL utilisable
            const categorySlug = category.toLowerCase().replace(/ /g, '');
            return `/products/categorie/${categorySlug}`;
        }
    }
};
</script>

<style>

@media (min-width: 768px) {
    
}

@media (min-width: 1024px) {
    
}

</style>