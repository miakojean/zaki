<template>
    <section>
        <header>
            <h2> Devenir partenaire </h2>
            <p>
                Mettez-vous en ligne pour accroitre votre visibilité.
            </p>
        </header>
        <div class="custom-head-divider"></div>
        <div class="card___container">
            <div class="cards">
                <img class="Pic" src="@/assets/categories/farmer2.webp" alt="cereales" />
            </div>
            <div class="cards">
                <p>
                    Rejoignez ZAKI et devenez partenaire d'une plateforme innovante dédiée 
                    à la promotion des produits vivriers et non vivriers en Côte d'Ivoire. 
                    En tant que partenaire, vous bénéficierez d'une visibilité 
                    accrue pour vos produits, d'un accès à une clientèle diversifiée, et d'un 
                    accompagnement personnalisé pour développer vos activités.
                </p>
                <MoreButton label ="Ouvrir mon compte pro" />
            </div>
        </div>
    </section>
</template>

<script>
import MoreButton from '@/components/MoreButton.vue';

export default {
  
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

.custom-head-divider {
    width: 50%; /* La ligne occupe la moitié de la largeur */
    height: 2px; /* Épaisseur de la ligne */
    background: linear-gradient(to right, #345511, #6c757d); /* Dégradé pour un effet stylé */
    margin: 2rem auto; /* Centre horizontalement la ligne */
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
    color: var(--resolution-blue-2);
}

h2{
    font-family: 'Inter', sans-serif;
    font-size: clamp(2rem, 3.5vw, 2.5rem); 
    text-align: center;
    font-weight: 700;
    color: var(--resolution-blue-2);
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
    justify-content: space-between;
    padding: 1rem;
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
    .card___container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 1rem;
    }
    
}

@media (min-width: 1024px) {
    .card___container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 1rem;
    }
}
</style>