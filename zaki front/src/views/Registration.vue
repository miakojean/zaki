<template>
    <div class="registration">
      <NavBar />
      <section>
        <h2>Étape {{ step }} : Inscription</h2>
  
      <form @submit.prevent="nextStep">
        <div class="input" v-if="step === 1">
          <InputGroup
            label="Nom de famille"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Entrer votre nom de famille"
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
  
        <div v-if="step === 2">
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
  
        <div v-if="step === 3">
          <InputGroup
            label="Mot de passe"
            type="password"
            id="password"
            name="password"
            placeholder="Créer un mot de passe"
            v-model="user.password"
          />
        </div>
  
        <div class="actions">
          <button type="button" @click="prevStep" v-if="step > 1">Précédent</button>
          <button type="submit">
            {{ step < 3 ? "Suivant" : "Soumettre" }}
          </button>
        </div>
      </form>
      </section>
    </div>
</template>

<script setup>
import { ref } from "vue";

const step = ref(1);

const user = ref({
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
});

const nextStep = () => {
  if (step.value < 3) {
    step.value++;
  } else {
    console.log(user.value);
    alert("Inscription terminée !");
    // Vous pouvez ajouter ici une requête API pour soumettre les données.
  }
};

const prevStep = () => {
  if (step.value > 1) {
    step.value--;
  }
};
</script>

<style scoped>
header{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

header h3 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
}

section{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}

form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.Nextbutton{
    display: flex;
    align-items: center;
    justify-content:end;
    gap: 0.5rem;
    max-width: 400px;
}

i{
    font-size: 1rem;
    font-weight: 700;
}
</style>