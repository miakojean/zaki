<template>
    <div class="landing-page">
        <NavBar />
        <Header />
        <hr class="section-divider">
        <PageSection />
        <hr class="section-divider">
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';
import PageSection from '@/components/PageSection.vue';

export default {
    components: {
        NavBar,
        Header,
        PageSection
    },
};
</script>

<style>
.section-divider {
    border: none; /* Supprime la bordure par défaut */
    height: 2px; /* Définit l'épaisseur de la ligne */
    background-color: gray; /* Couleur de la ligne */
    margin: 2rem 0; /* Espace autour de la ligne */
    opacity: 0.7; /* Transparence */
}

</style>
