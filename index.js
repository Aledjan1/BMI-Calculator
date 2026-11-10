const weightCalc = document.querySelector("#weight");
const heightCalc = document.querySelector("#height");
const btnCalc = document.querySelector(".calculate-btn");
const bmiValue = document.querySelector(".bmi-value");
const weightError = document.querySelector("#weight-error");
const heightError = document.querySelector("#height-error");
const bmiCategory = document.querySelector(".bmi-category");
const bmiDescription = document.querySelector(".bmi-description");
const resultBox = document.querySelector(".result-box");

btnCalc.addEventListener("click", function() {
    const weight = Number(weightCalc.value);
    const height = Number(heightCalc.value);
    
    let isValid = true;

    if(weightCalc.value === "") {
        weightCalc.classList.add("input-error");
        weightError.textContent = "Please enter a weight value";
        isValid = false;
    } else if(weight < 20 || weight > 500) {
        weightCalc.classList.add("input-error");
        weightError.textContent = "Weight must be between 20 and 500 kg.";
        isValid = false;
    } else{
        weightCalc.classList.remove("input-error");
         weightError.textContent = "";
    }

    if(heightCalc.value === "") {
        heightCalc.classList.add("input-error");
        heightError.textContent = "Please enter a height value";
        isValid = false;
    } else if(height < 100 || height > 250) {
        heightCalc.classList.add("input-error");
        heightError.textContent = "Height must be between 100 and 250 cm.";
        isValid = false;
    } else{
        heightCalc.classList.remove("input-error");
        heightError.textContent = "";
    }

    if(isValid === false) {
        bmiValue.textContent = "--";
        bmiCategory.textContent = "Enter your details";
        bmiDescription.textContent = "Your result will appear here.";
        resultBox.classList.remove("is-underweight", "is-normal", "is-overweight", "is-obesity");
        return;
    }

    const heightMeters = height/100;
    const bmi = weight/(heightMeters**2);
    bmiValue.textContent = bmi.toFixed(1);
    resultBox.classList.remove("is-underweight", "is-normal", "is-overweight", "is-obesity");

    if(bmi < 18.5) {
        bmiCategory.textContent = "Underweight";
        bmiDescription.textContent = "Your BMI is below the normal range.";
        resultBox.classList.add("is-underweight");
    } else if(bmi >= 18.5 && bmi < 25) {
        bmiCategory.textContent = "Normal weight";
        bmiDescription.textContent = "Your BMI is within the normal range.";
        resultBox.classList.add("is-normal");
    } else if(bmi >= 25 && bmi < 30) {
        bmiCategory.textContent = "Overweight";
        bmiDescription.textContent = "Your BMI is above the normal range.";
        resultBox.classList.add("is-overweight");
    } else if(bmi >= 30) {
        bmiCategory.textContent = "Obesity";
        bmiDescription.textContent = "Your BMI is in the obesity range.";
        resultBox.classList.add("is-obesity");
    }
});

weightCalc.addEventListener("input", function() {
    weightCalc.classList.remove("input-error");
    weightError.textContent = "";
});

heightCalc.addEventListener("input", function() {
    heightCalc.classList.remove("input-error");
    heightError.textContent = "";
});