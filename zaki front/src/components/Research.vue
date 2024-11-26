<template>
    <form action="#" method="post">
        <label for="Research" class="">
            <input id="Research" type="text" placeholder="Trouver mon produit, ex: manioc, charbon.">
            <button class="Research">
                <i class="ri-search-line"></i>
            </button>
        </label>
    </form>
</template>

<script>
export default {
    name: 'Research',
}
</script>

<style>
label{
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    border: 1px solid gray;
    border-radius: 1.2rem;
    cursor: pointer;
}

input{
    padding: 1rem;
    border: none;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    width: 100%;
}

input:focus{
    outline: none;
}

.Research{
    background: none;
    color: #058C42;
}

.Research i{
    background: #058C42;
    border-radius: 50%;
    color: white;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    transition: 0.4s ease-in-out;
}

.Research i:hover{
    background: #16DB65;
    color:white;
    font-size: 1.2rem;
}

@media (min-width: 768px) {
    label{
        display: flex;
        justify-content: space-between;
    }
}

@media (min-width: 1024px) {
    label{
        display: flex;
        justify-content: space-between;
    }
}
</style>