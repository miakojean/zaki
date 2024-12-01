<template>
  <div>
    <NavBar />
    <HeaderProduct />
    <FullProducts />
    <FooterSection />
  </div>
</template>

<script>
import FooterSection from '@/components/Landing/FooterSection.vue';
import NavBar from '@/components/Landing/NavBar.vue'; 
import PageSection from '@/components/Landing/PageSection.vue';
import FullProducts from '@/components/Products/FullProducts.vue';
import HeaderProduct from '@/components/Products/HeaderProduct.vue';

export default {
    components:{
        NavBar,
        HeaderProduct,
        PageSection,
        FullProducts,
        FooterSection,
    }

}
</script>

<style>

</style>