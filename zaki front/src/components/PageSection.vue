<template>
    <section>
        <header>
            <h1> Nos produits </h1>
            <p> Découvrez ci-dessous les différentes catégories des produits proposés </p>
        </header>
        <div class="card__container">
            <div class="cards">
                <h3>Fruits</h3>
                <img src="@/assets/categories/cereales.jpg" alt="cereales" />
                <button> Voir</button>
            </div>
        </div>
    </section>
</template>

<script>

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
    Button,
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
}
</style>