<template>
    <div class="log">
        <NavBar />
        <section class="reg__section">

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
                    label="Nom d'utilisateur"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Entrer votre nom d'utilisateur"
                    v-model="user.username"
                />
                <InputGroup
                    label="Mot de passe"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Créer un mot de passe"
                    v-model="user.password"
                />
                <div class="remeber">
                    <span>
                        Se souvenir de moi
                        <input type="checkbox" placeholder="Se souvenir de moi">
                    </span>
                    <a href="#">
                        Mot de passe oublié?
                    </a>
                </div>
                <MainButton label="Connexion" @click="loginForm" />
                <span>
                    Pas de compte? <router-link to="/registration"> cliquer ici </router-link>
                </span>
                <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
                <p v-if="successMessage" class="success">{{ successMessage }}</p>
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
    data() {
        return {
            user: {
                username: "",
                password: ""
            },
            errorMessage: "",
            successMessage: ""
        };
    },

    components: {
        NavBar,
        MainButton,
        InputGroup,
        FooterSection,
    },

    methods: {
        async loginForm() {
            this.errorMessage = ""; // Reset error message
            this.successMessage = ""; // Reset success message
            
            try {
                const response = await fetch('http://127.0.0.1:8000/zakiapi/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.user.username,
                        password: this.user.password,
                    })
                });

                if (response.ok) {
                    this.successMessage = "Utilisateur connecté avec succès";
                    // Redirection ou autre logique après la connexion réussie
                } else {
                    const errorData = await response.json();
                    this.errorMessage = errorData.error || "Erreur de connexion. Veuillez réessayer.";
                }
            } catch (error) {
                this.errorMessage = "Une erreur s'est produite. Veuillez vérifier votre connexion.";
            }
        }
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
    color:#333;
    font-weight: 700;
    text-align: center;
    justify-content: center;
}

span a{
    text-decoration: none;
    color: #058C42;
}

.remeber{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    
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
    .reg__section{
        height: 100vh;
    }
    .login__page{
        display: flex;
        align-items: center;
    }
    .remeber{
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    
}
</style>