<template>
    <section>
        <header class="section__header">
            <h2> Nos produits </h2>
            <h3>
                Découvrer ci-dessous les différentes catégories de produits
            </h3>
        </header>
        <div class="custom-head-divider"></div>
        <div class="card__container">
            <div class="cards">
                <h3>Céréales et Grains</h3>
                <img class="Pic" src="@/assets/categories/cereals.webp" alt="cereales" />
                <p>Riz, mais, mil, sorgho, etc.</p>
                <MoreButton :route="'/Products'" />
            </div>
            <div class="cards">
                <h3>Fruits</h3>
                <img class="Pic" src="@/assets/categories/fruits.webp" alt="fruits" />
                <p>Mangue, orange, ananas, etc.</p>
                <MoreButton :route="'/Products'" />
            </div>
            <div class="cards">
                <h3>Tubercules</h3>
                <img class="Pic" src="@/assets/categories/tubercules.png" alt="Tubercules" />
                <p>Manioc, igname, patates, tarots, etc.</p>
                <MoreButton :route="'/Products'" />
            </div>
            <div class="cards">
                <h3>Produits transformés</h3>
                <img class="Pic" src="@/assets/categories/cereales.jpg" alt="cereales" />
                <p>Attiéké, huile rouge, Djoumgblé, etc.</p>
                <MoreButton :route="'/Products'" />
            </div>
            <div class="cards">
                <h3>Autres produits</h3>
                <img class="Pic" src="@/assets/categories/cereales.jpg" alt="cereales" />
                <p>Découvrez tous nos produits ici.</p>
                <MoreButton label = "Tous nos produits" :route="'/Products'"/>
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
        'cereals',
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

.section-divider {
    border: none; /* Supprime la bordure par défaut */
    height: 2px; /* Définit l'épaisseur de la ligne */
    background-color: gray; /* Couleur de la ligne */
    margin: 2rem 0; /* Espace autour de la ligne */
    opacity: 0.7; /* Transparence */
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
    gap: 1rem;
    padding: 0.5rem;
}

.Pic{
    background-size: cover;
    width: 320px;
    height: 320px;
    border-radius: 1rem;
}

/* Media Queries */
@media (min-width: 768px) {

    .card__container{
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 1rem;
    }

    .Pic{
        background-size: cover;
        height: 240px;
        width: 240px;
        cursor: pointer;
    }
    
}

@media (min-width: 1024px) {
    .card__container{
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-area: 1rem;
    }
    .Pic{
        background-size: cover;
        height: 300px;
        width: 300px;
        cursor: pointer;
    }
    .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    padding: 0.5rem;
    }
    .section__header{
        padding: 1rem;
    }
}
</style>