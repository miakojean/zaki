<template>
    <section>
        <header>
            <h2> Nos produits </h2>
            <p> Découvrez ci-dessous les différentes catégories des produits proposés </p>
        </header>
        <div class="custom-head-divider"></div>
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
                <h3>Produits transformés</h3>
                <img class="Pic" src="@/assets/categories/cereales.jpg" alt="cereales" />
                <p>Attiéké, huile rouge, Djoumgblé, etc.</p>
                <MoreButton />
            </div>
            <div class="cards">
                <h3>Autres produits</h3>
                <img class="Pic" src="@/assets/categories/cereales.jpg" alt="cereales" />
                <p>Découvrez tous nos produits ici.</p>
                <MoreButton label = "Tous nos produits" />
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

:root{
    /* CSS HEX */
  --tea-green: #c6ebbeff;
  --celadon: #a9dbb8ff;
  --air-superiority-blue: #7ca5b8ff;
  --secondary--color: #38369aff;
  --resolution-blue: #1d1f91ff;
  --primary--color: #020887ff;
  --resolution-blue-2: #191e92ff;
}

.section-divider {
    border: none; /* Supprime la bordure par défaut */
    height: 2px; /* Définit l'épaisseur de la ligne */
    background-color: gray; /* Couleur de la ligne */
    margin: 2rem 0; /* Espace autour de la ligne */
    opacity: 0.7; /* Transparence */
}

a {
    text-decoration: none;
}

h1{
    font-family: 'Inter', sans-serif;
    font-size: clamp(2.5rem, 4vw, 3rem); 
    text-align: center;
    font-weight: 700;
    color: var(--primary--color);
}

h3{
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.25rem, 2.5vw, 1.75rem); 
    text-align: start;
    font-weight: 700;
    color: var(--air-superiority-blue);
}

p{
    font-family: 'Inter', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.25rem); 
    text-align: center;
    font-weight: 600;
    line-height: 1.5;
    color: gray;
}

header p{
    font-family: 'Inter', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.25rem); 
    text-align: center;
    font-weight: 600;
    line-height: 1.5;
    color: #071d08;
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