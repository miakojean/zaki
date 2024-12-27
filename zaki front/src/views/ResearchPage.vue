<template>
  <div>
    <NavBar />
    <HeaderProduct />
    <categories />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from '@/components/Landing/FooterSection.vue';
import NavBar from '@/components/Landing/NavBar.vue'; 
import PageSection from '@/components/Landing/PageSection.vue';
import HeaderProduct from '@/components/Products/HeaderProduct.vue';
import Categories from '@/components/Products/Categories.vue'

export default {
    components:{
      NavBar,
      HeaderProduct, 
      PageSection,
      Categories,
      FooterSection,
    }

}
</script>

<style>

</style>