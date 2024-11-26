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
        <div class="custom-divider"></div>
        <FooterSection />
    </div>
</template>

<script>
import NavBar from '@/components/section/NavBar.vue';
import PageSection from '@/components/section/PageSection.vue';
import MemberSection from '@/components/section/MemberSection.vue';
import TestimonialSection from '@/components/section/TestimonialSection.vue';
import Newsletter from '@/components/section/Newsletter.vue';
import HeaderSection from '@/components/section/HeaderSection.vue';
import FooterSection from '@/components/section/FooterSection.vue';


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

</style>
