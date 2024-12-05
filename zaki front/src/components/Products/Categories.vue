<template>
    <div v-if="category">
        <NavBarVue />
        <section>
            <div class="categories">
                <div class="cards">
                    <h4>{{ category.name }}</h4>
                    <img class="Pic" :src="category.image" :alt="category.name" />
                    <p>{{ category.description }}</p>
                    
                </div>

                <div class="food__items">
                    <h2>Liste de {{ category.name }}</h2>
                    <div v-for="(item, idx) in category.items" :key="idx" class="food__card">
                        <div class="food__head">
                            <h3 class="food__h3">{{ item }}</h3>  <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <div class="food__desc">
                            <p class="food__paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Alias ad, autem corrupti similique deleniti dicta eaque 
                                soluta consequuntur laboriosam tempora ratione? Voluptates 
                                minus amet eius facilis distinctio, modi non cumque!
                            </p>
                            <p class = "price">
                                Prix: 2000 FCFA
                            </p>
                            <MainButton label="Commander" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <h2>Catégorie non trouvée</h2>
        <p>La catégorie demandée n'existe pas. Veuillez vérifier l'URL.</p>
    </div>
</template>

<script>
import Accordion from '../Accordion.vue';
import NavBarVue from '../Landing/NavBar.vue';
import MainButton from '../MainButton.vue';



export default {
    components: {
        NavBarVue,
        MainButton,
        Accordion,
    },
    props: {
        category: {
            type: Object,
            required: false,
            default: null
        }
    },
    methods: {
        
    } 

};
</script>




<style scoped>
.item__group{
    line-height: 2;
}

.food__items{
    font-size: 1rem;
}

.items__list{
    border-top: 1px solid #058C42;
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.items__list i{
    color: #058C42;
}

.categories{
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.food__h3{
    cursor: pointer;
}

.food__head{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.food__head i{
    font-size: 1.8rem;
    transition: transform .5s ease-in;
}

.food__head.active i{
    transform: rotate(180deg);
}

.food__desc{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-height: 0;
    overflow: hidden;
}

.food__desc.active {
   height: auto; 
}

@media (min-width: 768px) {
    .categories{
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    }
    .cards{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }
}

@media (min-width: 1024px) {
    
}

</style>