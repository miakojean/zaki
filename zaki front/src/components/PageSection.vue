<template>
    <section>
        <header>
            <h1> Nos produits </h1>
            <p> Découvrez ci-dessous les différentes catégories des produits proposés </p>
        </header>
        <div class="card__container">
            <div class="cards">
                <h3>Céréales et Grains</h3>
                <img class="Pic" src="@/assets/categories/cereales.jpg" alt="cereales" />
                <p>Riz, mais, mil, sorgho, etc.</p>
                <MoreButton />
            </div>
            <div class="cards">
                <h3>Fruits</h3>
                <img class="Pic" src="@/assets/categories/fruit.jpg" alt="fruits" />
                <p>Mangue, orange, ananas, etc.</p>
                <MoreButton />
            </div>
            <div class="cards">
                <h3>Tubercules</h3>
                <img class="Pic" src="@/assets/categories/manioc.jpg" alt="Tubercules" />
                <p>Manioc, igname, patates, tarots, etc.</p>
                <MoreButton />
            </div>
            <div class="cards">
                <h3>Produits transformés locaux</h3>
                <img class="Pic" src="@/assets/categories/cereales.jpg" alt="cereales" />
                <p>Attiéké, poudre de piment, huile rouge, Djoumgblé, etc.</p>
                <MoreButton />
            </div>
        </div>
    </section>
</template>

<script>
import MoreButton from '@/components/MoreButton.vue';

export default {
  data() {
    return {
      // Tableau des catégories
      categories: [
        'Fruits',
        'Légumes',
        'Tubercules',
        'Céréales et Grains',
        'Légumineuses',
        'Produits de la mer',
        'Produits dérivés du lait',
        'Viandes',
        'Épices et Condiments',
        'Huiles et Graisses',
        'Fleurs et Plantes aromatiques',
        'Produits transformés locaux'
      ]
    }
  },
  components:{
    MoreButton
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
padding: 0;
margin: 0;
box-sizing: border-box;

}

*:root{
    /* CSS HEX */
--mint-green: rgb(65, 92, 90);
--fluorescent-cyan: #52ffeeff;
--mint: #4fb477ff;
--hunter-green: #3f6634ff;
--dark-moss-green: #345511ff;
--text-color : #071d08;
}

a {
    text-decoration: none;
}

h1{
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.5rem, 4vw, 3rem); 
    text-align: center;
    font-weight: 700;
    color: var(--dark-moss-green);
}

h3{
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2rem); 
    text-align: start;
    font-weight: 700;
    color: var(--text-color);
}

p{
    font-family: 'Inter', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.25rem); 
    text-align: center;
    font-weight: 600;
    line-height: 1.5;
    color: gray;
}

section{
    padding: 1rem;
}

header{
    display: flex;
    align-items: center;
}

.card__container{
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
    align-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
}

.pic{
    background-size: cover;
    max-width: 320px;
    max-height: 320px;
    border-radius: 1rem;
}

/* Media Queries */
@media (min-width: 768px) {
    .card__container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 1rem;
    }
    
}

@media (min-width: 1024px) {
    .card__container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-area: 1rem;
    }
}
</style>