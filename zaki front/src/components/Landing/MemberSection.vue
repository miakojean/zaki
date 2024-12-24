<template>
    <section>
        <header class="section__header">
            <h2> Devenir partenaire </h2>
            <h3>
                Mettez-vous en ligne pour accroitre votre visibilité.
            </h3>
        </header>
        <div class="custom-head-divider"></div>
        <div class="card___container">
            <div class="cards">
                <img class="Member__Pic" src="@/assets/categories/farmer2.webp" alt="cereales" />
            </div>
            <div class="cards">
                <p>
                    Rejoignez ZAKI et devenez partenaire d'une plateforme innovante dédiée 
                    à la promotion des produits vivriers et non vivriers en Côte d'Ivoire. 
                    En tant que partenaire, vous bénéficierez d'une visibilité 
                    accrue pour vos produits, d'un accès à une clientèle diversifiée, et d'un 
                    accompagnement personnalisé pour développer vos activités.
                </p>
                <MainButton label="Ouvrir mon compte pro" icon="ri-arrow-right-line" />
            </div>
        </div>
    </section>
</template>

<script>
import MoreButton from '@/components/MoreButton.vue';
import MainButton from '../MainButton.vue';


export default {
  
  components:{
    MoreButton,MainButton
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.custom-head-divider {
    width: 50%; /* La ligne occupe la moitié de la largeur */
    height: 2px; /* Épaisseur de la ligne */
    background: linear-gradient(to right, #345511, #6c757d); /* Dégradé pour un effet stylé */
    margin: 2rem auto; /* Centre horizontalement la ligne */
}

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

.section__header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
}

.section__header h2, h3 {
    width: 100%;
    text-align: center;
    
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

.Member__Pic{
    background-size: cover;
    max-width: 240px;
    max-height: 240px;
    border-radius: 10px;
}

/* Media Queries */
@media (min-width: 768px) {
    .card___container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 2rem;
    }
    .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    padding: 0.5rem;
    }
    .Member__Pic{
    background-size: cover;
    max-width: 320px;
    max-height: 320px;
    border-radius: 10px;
    }
    
}

@media (min-width: 1024px) {
    .card___container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 1rem;
    }

    .cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: 1rem;
    padding: 0.5rem;
    }
}
</style>