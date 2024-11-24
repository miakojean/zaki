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
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
}

.Research{
    border: none;
    background: none;
}

i{
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 600;
    color: var(--dark-moss-green);
}

input{
    border: none;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    width: 80%;
}

input:focus{
    outline: none;
}
</style>