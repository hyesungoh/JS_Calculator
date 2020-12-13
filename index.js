const buttons = document.querySelectorAll(".but-js");
const resultInput = document.querySelector(".result-js");
const placeholder = document.querySelector(".placeholder-js");
const Operators = ["+", "-", "*", "/"];
let isAnyOperator = false;

const resetResult = () => {
    resultInput.value = "";
    placeholder.innerText = "";
};

const calculation = (currentValue) => {
    calculatedValue = eval(currentValue);
    placeholder.innerText = currentValue;
    resultInput.value = calculatedValue;
};

const tempCalculation = (currentValue) => {
    calculatedValue = eval(currentValue);
    placeholder.innerText = calculatedValue;
};

const addNumber = (currentBtn) => {
    resultInput.value += currentBtn;
};

const handleClick = (event) => {
    const currentBut = event.target.innerText;
    if (currentBut === "AC") {
        resetResult();
    } else if (currentBut === "=") {
        calculation(resultInput.value);
    } else if (Operators.includes(currentBut)) {
        isAnyOperator = true;
        addNumber(currentBut);
    } else {
        addNumber(currentBut);
        tempCalculation(resultInput.value);
    }
};

const addEventListenerAll = () => {
    buttons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });
};

const init = () => {
    addEventListenerAll();
};

init();
