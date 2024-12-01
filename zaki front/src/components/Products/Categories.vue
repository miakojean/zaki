<template>
    <div>
        <NavBarVue />
        <section>
            <div class="categories">
                <div class="cards">
                    <h4>{{ category.name }}</h4>
                    <img class="Pic" :src="category.image" :alt="category.name" />
                    <p>{{ category.description }}</p>
                    <MainButton label="Commander" />
                </div>

                <div class="food__items">
                    <h2>Liste de {{ category.name }}</h2>
                    <ul class="item__group">
                        <li
                            v-for="(item, idx) in category.items"
                            :key="idx"
                            class="items__list"
                        >
                            {{ item }} <i class="ri-arrow-right-line"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import NavBarVue from '../Landing/NavBar.vue';
import MainButton from '../MainButton.vue';

export default {
    components: {
        NavBarVue,
        MainButton
    },
    props: {
        category: {
            type: Object,
            required: true
        }
    }
};
</script>



<style>
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


</style>