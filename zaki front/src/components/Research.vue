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
.Research:hover{
    background: none;
    color: #020887ff;
}

.Research i {
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 600;
    color: #020887ff;
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