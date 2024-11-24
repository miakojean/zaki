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
            <div class="search__input">
                <Research />
            </div>
        </div>
        <div class="header__img">
            <img src="@/assets/famer1.webp" alt="Farmer" />
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
padding: 0;
margin: 0;
box-sizing: border-box;

}

*:root{
    /* CSS HEX */
--mint-green: #dcfffdff;
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

label{
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
}

.Research{
    border: none;
    background: none;
}

i{
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 600;
    color: var(--dark-moss-green);
}

input{
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    width: 80%;
}

input:focus{
    outline: none;
}

img{
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
    text-align: center;
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

/* Media Queries */
@media (min-width: 768px) {
    
    header {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 5rem 2rem;
    }

    .header__container {
        width: 70%;
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
}
  
</style>