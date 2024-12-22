<template>
  <div class="">
    <NavBar />
    <section>
        <div class="container">
            <div class="regist__form">
                <h4>Incription</h4>
                <form action="">
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
                </form>
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

    data () {
        return {
            user : {
                firstname: "",
                lastname:"",
                username:"",
                email:"",
                password:""
            },
            
            step: 1,
            maxstep: 3,
        }
    },

    methods:{
        nextStep(){
            if (this.step < this.maxstep){
                this.step++;
            }
        },
        prevStep(){
            if(this.step > 1){
                this.step --;
            }
        },

    },

    components:{
        NavBar,
        InputGroup,
        MoreButton,
        FooterSection
    }

}
</script>

<style>
section{
    padding: 5rem 1rem 1rem 1rem;
    height: 100vh;

}

.regist__form{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 2rem;
}

.step{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 2rem;
}

.prevnext{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
}
</style>