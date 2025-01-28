<template>
  <div class="news">
        <div class="pictures">
            <img class="Pic" src="@/assets/categories/welcome.webp" alt="agriculteurs" />
        </div>
        <div class="newsletter">
            <header>
                <h4>
                    S'abonner à la newsletter
                </h4>
                <p>
                    Restez informer de toutes sur nos différentes mise à jour,
                    promotions et bien d'autres.
                </p>
            </header>
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
  </div>
</template>

<script>
import MainButton from '../MainButton.vue';

export default {

    components:{
        MainButton,
    }

}
</script>

<style scoped >

.news{
  padding: 3rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
}

.newsltter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.pictures{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Pic{
    background-size: cover;
    width: 300px;
    height: 300px;
    border-radius: 1rem;
}

header{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.Newform{
    padding-top: 1rem;
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
    width: 100%;
    max-width: 600px;
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
    align-self: center;
    font-size: 1.5rem;
    font-weight: 500;
    background: #058C42;
    padding: 0.5rem;
    border-radius: 50%;
    color: white;
}

/* Media Queries */
@media (min-width: 768px) {

    .Pic{
    background-size: cover;
    width: 400px;
    height: 400px;
    border-radius: 1rem;
    }

}

@media (min-width: 1024px) {

  .order__section{
  padding: 1rem;
  }
  
  .news{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;
    height: auto;
    min-height: 100vh;
  }

  .pictures{
    display: flex;
  }
  .Pic{
    background-size: cover;
    max-height: 500px;
    max-width: 500px;
    border-radius: 1rem;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .results__box{
    width: 100%;
  }

  .newsltter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  }
}

@media (min-width: 1920px) {
  .order__section{
  padding: 1rem;
  }
  
  .news{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .pictures{
    display: flex;
  }
  
  .Pic{
    background-size: cover;
    max-height: 700px;
    max-width: 700px;
    border-radius: 1rem;
  }
  .newsltter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  }
}
</style>