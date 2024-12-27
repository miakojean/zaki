<template>
        <div class="HeaderSection">
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
            <div class="head__pic">
                <img class="header__pic" src="@/assets/famer1.webp" alt="Farmer" />
            </div>
        </div>
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
.HeaderSection{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.header__pic{
    background-size: cover;
    height: 240px;
    width: 240px;
    cursor: pointer;
    border-radius: 1rem;
}

.center__flex{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.header__container {
    display: flex;
    align-items: center;
    text-align: center;
    align-items: center;
    padding: 3rem 0 0 0;
    /*border: 1px solid gray;*/
}

.search__input{
    width: 100%;
}

/* Media Queries */
@media (min-width: 768px) {
    .HeaderSection{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    }

    .header__container{
        width: 50%;
    }
    
    .head__pic{
        padding-top: 1rem;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header__pic{
        background-size: cover;
        height: 320px;
        width: 320px;
        cursor: pointer;

}
    
}

@media (min-width: 1024px) {
    .HeaderSection{
        padding-top: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .header__container{
        width: 50%;
    }
    
    .head__pic{

        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header__pic{
        background-size: cover;
        height: 320px;
        width: 320px;
        cursor: pointer;
    } 
}
</style>