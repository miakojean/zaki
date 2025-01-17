<template>
  <div class="stepper-container">
        <div class="step active">
            <div class="circle">1</div>
            <div class="label">Étape 1</div>
        </div>
        <div class="line"></div>
        <div class="step">
            <div class="circle">2</div>
            <div class="label">Étape 2</div>
        </div>
        <div class="line"></div>
        <div class="step">
            <div class="circle">3</div>
            <div class="label">Étape 3</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
:root {
    --primary-color: #058C42;
    --secondary-color: #f9fafe;
    --text-color: #333333;
    --circle-size: 40px;
    --line-width: 4px;
}

.stepper-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
}

.circle {
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    background-color: var(--secondary-color);
    border: 2px solid var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--primary-color);
}

.line {
    width: 50px;
    height: var(--line-width);
    background-color: var(--primary-color);
    margin: 0 5px;
    margin-bottom: 20px;
}

.label {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-color);
}

.step.active .circle {
    background-color: var(--primary-color);
    color: white;
}
</style>