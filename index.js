const buttons = document.querySelectorAll(".but-js");
const resultInput = document.querySelector(".result-js");

const resetResult = () => (resultInput.value = "");

const calculation = (currentValue) => {
    calculatedValue = eval(currentValue);
    resultInput.value = calculatedValue;
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
    } else {
        addNumber(currentBut);
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
