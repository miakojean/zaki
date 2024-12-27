<template>
  <section>
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
          <p>{{ category.items.slice(0,5).join(', ') }} ...</p>
          <MoreButton />
        </div>
    </div>
  </section>
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

section{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.section__header{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
}

.card___container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 1rem;
}

.cards{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
}

img{
  background-size: cover;
  max-width: 300px;
  max-height: 300px;
  border-radius: 10px;
}

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

@media (min-width: 768px) {

  .card__container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    padding: 0.5rem;
  }
  img{
    background-size: cover;
    max-width: 320px;
    max-height: 320px;
    border-radius: 10px;
  }
    
}

@media (min-width: 1024px) {

  .card__container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
  .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    padding: 0.5rem;
  }
  img{
    background-size: cover;
    max-width: 320px;
    max-height: 320px;
    border-radius: 10px;
  } 
}

</style>