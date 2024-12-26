<template>
    <section>
        <header class="section__header">
            <h2> Newsletter </h2>
        </header>
        <div class="custom-head-divider"></div>
        <div class="Newsletter__Container">
            <h4>
                S'abonner à la newsletter pour être au courant de tout concernant le secteur agricole ivoirien.
            </h4>
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

<style scoped>

section{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.section__header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.Newsletter__Container{
    display: flex;
    flex-direction: column;
    align-items: center;
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

label {
    padding: 0.5rem;
    border: 1px solid gray;
    border-radius: 1rem;
    gap: 1rem;
    max-width: 400px;
}

input{
    padding: 0.8rem;
    border: none;
    font-size: 1rem;
}

input:focus{
    outline: none;
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

    form{
        display: flex;
    }
    
}

@media (min-width: 1024px) {
    .Newsletter__Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-content: center;
    }

}
</style>