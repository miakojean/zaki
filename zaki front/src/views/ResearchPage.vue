<template>
  <div>
    <NavBar />
    <HeaderSection />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from '@/components/Landing/FooterSection.vue';
import HeaderSection from '@/components/Landing/HeaderSection.vue';
import NavBar from '@/components/Landing/NavBar.vue'; 

export default {
    components:{
        NavBar,
        HeaderSection,
        FooterSection,
    }

}
</script>

<style>

</style>