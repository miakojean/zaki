<template>
  <header class="section__header">
    <h2> Categories </h2>
    <h3>
      Découvrer ci-dessous les différentes catégories de produits
    </h3>
  </header>
  <div class="custom-head-divider"></div>
  <div class="card__container">
      <div v-for="category in categories" :key="category.id" class="cards">
        <h3>{{ category.name }}</h3>
        <img :src="category.image" :alt="`Image de ${category.name}`" class="Pic" />
        <p>{{ category.items.slice(0,6).join(', ') }} ...</p>
        <MoreButton />
      </div>
  </div>
</template>

<script>

import { categoriesData } from '@/data/categoriesData';
import MoreButton from '../MoreButton.vue';

export default{
  data() {
    return {
      categories:categoriesData,
    };
  },
  components:{
    MoreButton
  }
};

</script>

<style scoped>
.item__group{
  line-height: 2;
}

.food__items{
    font-size: 1rem;
}

.items__list{
  border-top: 1px solid #058C42;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.items__list i{
    color: #058C42;
}

.categories{
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.food__h3{
  cursor: pointer;
}

.food__head{
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.food__head.active {
  transition: transform 0.5s ease-in;
}

.food__head i {
  font-size: 1.8rem;
  transition: transform .5s ease-in; /* Assure une transition fluide */
  transform: rotate(0deg); /* Position initiale */
}

.food__head.active i {
  transform: rotate(180deg); /* Rotation appliquée en état actif */
}


.food__desc{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-height: 0;
  overflow: hidden;
}

.food__desc.active {
  height: auto; 
}

@media (min-width: 768px) {
    .categories{
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      align-items: center;
    }
    .cards{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
}

@media (min-width: 1024px) {
    
}

</style>