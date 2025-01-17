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

<style scoped>
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f9fafe;
    border: 2px solid #058C42;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #058C42;
}

.line {
    width: 50px;
    height: 4px;
    background-color: #058C42;
    margin: 0 5px;
    margin-bottom: 20px;
}

.label {
    font-size: 14px;
    font-weight: 500;
    color: #333333;
}

.step.active .circle {
    background-color: #058C42;
    color: white;
}
</style>