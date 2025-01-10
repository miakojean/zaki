<template>
    <div class="Box">
        <div class="research__box">
            <input
                type="text"
                placeholder="Entrer votre nom, numéro de commande ou n° de tel"
            />
            <i class="ri-search-line"></i>
        </div>
        <div class="result__box">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResearchBox',

}
</script>

<style>

.Box{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.research__box {
    position: relative;
    width: 100%;
    max-width: 600px;
    display: flex;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
}

input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
}

.ri-search-line{
  background: #058C42;
  border-radius: 50%;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  transition: 0.4s ease-in-out;
  cursor: pointer;
}

.ri-search-line:hover{
    background: #058C42;
    color:white;
    transform: scale(1.1);
}
</style>