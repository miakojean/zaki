<template>
    <div class="landing-page">
        <NavBar />
        <HeaderSection />
        <div class="custom-divider"></div>
        <PageSection />
        <div class="custom-divider"></div>
        <MemberSection />
        <div class="custom-divider"></div>
        <Newsletter />
        <div class="custom-divider-none"></div>
        <FooterSection />
    </div>
</template>

<script>
import NavBar from '@/components/Landing/NavBar.vue';
import PageSection from '@/components/Landing/PageSection.vue';
import MemberSection from '@/components/Landing/MemberSection.vue';
import TestimonialSection from '@/components/Landing/TestimonialSection.vue';
import Newsletter from '@/components/Landing/Newsletter.vue';
import HeaderSection from '@/components/Landing/HeaderSection.vue';
import FooterSection from '@/components/Landing/FooterSection.vue';


export default {
    components: {
        NavBar,
        HeaderSection,
        PageSection,
        MemberSection,
        TestimonialSection,
        Newsletter,
        FooterSection
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

.custom-divider-none {
    width: 100%; /* La ligne occupe toute la largeur */
    height: 2px; /* Épaisseur de la ligne */
    background: none; /* Dégradé pour un effet stylé */
    margin: 2rem 0; /* Espace autour de la ligne */
}

</style>
