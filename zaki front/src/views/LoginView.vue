<template>
    <div class="log">
        <NavBar />
        <section>
            <div class="login__page">

                <h1>
                    Profitez d'achat de produits
                    viviriers et non-vivriers à
                    moindres coûts.
                </h1>

            </div>
            <div class="login__form flex_center">
                <h4 class="login__head">
                    Bienvenu chez Zaki
                </h4>
                <h3>
                    Connectez-vous
                </h3>
                <InputGroup 
                    label="Username"
                    type="text"
                    name="username"
                    id = "username"
                    placeholder="Entrer votre nom"
                />
                <InputGroup 
                    label="Password"
                    type="password"
                    name="password"
                    id = "password"
                    placeholder="Entrer votre mot de passe"
                />
                <div class="remeber">
                    <input type="Checkbox" placeholder="Se souvenir de moi">
                    <a href="#">
                        Mot de passe oublié?
                    </a>
                </div>
                <MainButton label = "connexion" />
                <p>
                    Pas de compte? <span>Cliquer ici</span>
                </p>
                <div class="separator">
                    <span>ou</span>
                </div>
            </div>
        </section>
        <FooterSection />
    </div>
</template>

<script>
import InputGroup from '@/components/Authentication/InputGroup.vue';
import FooterSection from '@/components/Landing/FooterSection.vue';
import NavBar from '@/components/Landing/NavBar.vue';
import MainButton from '@/components/MainButton.vue';


export default {

    components:{
        NavBar,
        MainButton,
        InputGroup,
        FooterSection,

    }

}
</script>

<style scoped>

.login__page{
    display: none;
}

section{
    padding-top: 4rem;
}

.flex_center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.login__form{
    padding: 1rem;
}

.login__head{
    color: #333;
    font-size:clamp(1.4375rem, 1.5vw, 1,5625rem); 
}

.input__group{
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 0.5rem;
    width: 100%;
    max-width: 400px
}

input[type="text"],
input[type="password"]{
    padding: 1rem;
    width: 100%;
    border: 1px solid #333;
    border-radius: 1rem;
    font-size: 1rem;
}

input:focus{
    outline: #058C42;
}

p{
    font-weight: 400;
}

span{
    color: #058C42;
    font-weight: 700;
}

.remeber{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.remeber a{
    color: #058C42;
    text-decoration: none;
    font-weight: 700;
}

.separator {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 1rem 0; /* Espace vertical */
    color: #555; /* Couleur du texte */
    font-size: 1rem; /* Taille du texte */
}

.separator::before,
.separator::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid black;
    margin: 0 1rem; /* Espace autour du texte "ou" */
}

@media (min-width: 768px) {

}

@media (min-width: 1024px) {

    section{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .login__page{
        display: flex;
        align-items: center;
    }
    
}
</style>