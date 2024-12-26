<template>
  <div class="">
    <NavBar />
    <section>
        <div class="login__page">

            <h1>
                Profitez d'achat de produits
                viviriers et non-vivriers à
                moindres coûts.
            </h1>

        </div>
        
        
        <div class="regist__form flex_center">
            <h4>Bienvenu chez Zaki</h4>
                <h3>
                    Inscrivez-vous
                </h3>
                <div class="step" v-if="step === 1">
                    <InputGroup 
                        label="Nom de famille"
                        name = "first_name"
                        id = "firstname"
                        placeholder="Entre votre nom de famille"
                        v-model="user.firstname"
                    />
                    <InputGroup
                        label="Prénom"
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Entrer votre prénom"
                        v-model="user.lastname"
                    />
                </div>
                <div class="step" v-if="step ===2">
                    <InputGroup
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Entrer votre email"
                        v-model="user.email"
                    />
                    <InputGroup
                        label="Nom d'utilisateur"
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Entrer votre nom d'utilisateur"
                        v-model="user.username"
                    />
                </div>
                <div class="step" v-if="step === maxstep">
                    <InputGroup
                        label="Mot de passe"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Créer un mot de passe"
                        v-model="user.password"
                    />
                </div>
            
            <div class="prevnext">
                <span v-if="step > 1" @click="prevStep">
                    <i class="ri-arrow-left-line"> </i>
                    Retour 
                </span>
                <MoreButton
                    :label="step <= 2 ? 'Suivant' : 'Inscription'"
                    @click="nextStep"
                />

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
import MoreButton from '@/components/MoreButton.vue';

export default {
    data() {
        return {
            user: {
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: ""
            },
            step: 1,
            maxstep: 3,
            errorMessage: "",
            successMessage: ""
        };
    },

    methods: {
        nextStep() {
            if (this.step < this.maxstep) {
                this.step++;
            } else if (this.step === this.maxstep) {
                this.submitForm();
            }
        },
        prevStep() {
            if (this.step > 1) {
                this.step--;
            }
        },
        async submitForm() {
            try {
                const response = await fetch('http://127.0.0.1:8000/zakiapi/register/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        first_name: this.user.firstname,
                        last_name: this.user.lastname,
                        username: this.user.username,
                        email: this.user.email,
                        password: this.user.password
                    })
                });

                if (response.ok) {
                    this.successMessage = "Utilisateur créé avec succès !";
                    this.resetForm();
                } else {
                    const errorData = await response.json();
                    this.errorMessage = errorData.error || "Erreur lors de la création de l’utilisateur.";
                }
            } catch (error) {
                this.errorMessage = "Une erreur réseau est survenue.";
            }
        },
        resetForm() {
            this.user = {
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                password: ""
            };
            this.step = 1; // Revenir à la première étape
        }
    },

    components: {
        NavBar,
        InputGroup,
        MoreButton,
        FooterSection
    }
};
</script>


<style>
section{
    padding-top: 4rem;

}

.login__page{
    display: none;
}

.flex_center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.regist__form{
    padding: 1rem;
}

.input__group{
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 0.5rem;
    width: 100%;
    max-width: 400px
}

.step{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    padding: 0;
}

.prevnext{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

span{
    color: #04471C;
    font-weight: 700;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    gap: 1rem;
    max-width: 400px;
}

form{
    width: 100%;
}

button{
    width: 100%;
}

@media (min-width: 768px) {

}

@media (min-width: 1024px) {

    section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    .login__page{
        display: flex;
        align-items: center;
    }
    form{
    width: 100%;
    }
    
}
</style>