<template>
    <header>
    <div class="header__container center__flex">
        <h1>
            Trouver vos produits viviriers et non vivriers ici.
        </h1>
        <p> 
            Profitez d'une plateforme simple et rapide pour 
            accéder aux meilleurs produits vivriers de Côte d'Ivoire. 
            Commandez, payez en ligne, et recevez vos produits directement chez vous.
        </p>
        <Research />
    </div>
</header>
</template>

<script>
import Research from '@/components/Research.vue';
export default {
components:{
    Research,
}

}
</script>

<style scoped>
.header__pic{
background-size: cover;
max-width: 400px;
max-height: 400px;
border-radius: 1rem;
}

.center__flex{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
}

header {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
padding: 3rem 0 0 0;
text-align: center;
/*border: 1px solid gray;*/
}

.header__container {
display: flex;
align-items: center;
text-align: center;
align-items: center;
/*border: 1px solid gray;*/
}

.header__img img {
width: 100%;
max-width: 400px;
border-radius: 1rem;
background-size: cover;
display: block;
text-align: center;
}

.search__input{
width: 100%;
}

/* Media Queries */
@media (min-width: 768px) {

header {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 3rem 2rem;
}

.header__container {
display: flex;
align-items: center;
text-align: center;
align-items: center;
/*border: 1px solid gray;*/
}

.header__img {
    width: 40%;
}

label{
    width: 100%;
}

.search__input input {
    width: 70%;
}
}

@media (min-width: 1024px) {
header {
    padding: 3rem 1rem 1rem;
}

.header__container {
    width: 40%;
}

.header__img {
    width: 40%;
}

.header__container {
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
/*border: 1px solid gray;*/
}
}
</style>