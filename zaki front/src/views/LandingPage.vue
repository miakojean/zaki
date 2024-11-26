<template>
    <div class="landing-page">
        <NavBar />
        <Header />
        <div class="custom-divider"></div>
        <PageSection />
        <div class="custom-divider"></div>
        <MemberSection />
        <div class="custom-divider"></div>
        <Newsletter />
    </div>
</template>

<script>
import NavBar from '@/components/section/NavBar.vue';
import Header from '@/components/section/Header.vue';
import PageSection from '@/components/section/PageSection.vue';
import MemberSection from '@/components/section/MemberSection.vue';
import TestimonialSection from '@/components/section/TestimonialSection.vue';
import Newsletter from '@/components/section/Newsletter.vue';

export default {
    components: {
        NavBar,
        Header,
        PageSection,
        MemberSection,
        TestimonialSection,
        Newsletter,
    },
};
</script>

<style>
.custom-divider {
    width: 100%; /* La ligne occupe toute la largeur */
    height: 2px; /* Épaisseur de la ligne */
    background: linear-gradient(to right, #345511, #6c757d); /* Dégradé pour un effet stylé */
    margin: 2rem 0; /* Espace autour de la ligne */
}

</style>
