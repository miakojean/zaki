<template>
    <section>
    <header>
        <h2> Souscrire à notre newsletter. </h2>
        <p class="Header__paragraph"> Rester au courant des dernières informations sur 
            vos principales denrées alimentaires
        </p>
    </header>
    <div class="custom-head-divider"></div>
    <div class="Newsletter__Container">
        <h3>
            S'abonner à la newsletter pour être au courant de tout concernant le secteur agricole ivoirien.
        </h3>
        <div class="Newform">
            <form action="#" method="post">
                <label for="Email">
                    <i class="ri-mail-line"></i>
                    <input type="email" placeholder="Entrer votre email">
                </label>
                <MainButton label ="Souscrire" />
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import MainButton from '@/components/MainButton.vue';

export default {
components:{
    MainButton,
}
}
</script>

<style>
.Newsletter__Container{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 2rem;
}
form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
form label{
    display: flex;
    align-items: center;
}

label i{
    font-size: 1.5rem;
    font-weight: 500;
    background: #058C42;
    padding: 0.5rem;
    border-radius: 50%;
    color: white;
}
@media (min-width: 768px) {
    .Newsletter__Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 1rem;
    }
    
}

@media (min-width: 1024px) {
    .Newsletter__Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-area: 1rem;
        align-content: center;
    }
}
</style>