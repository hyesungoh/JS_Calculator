# JS Calculator
###### Calculator with JavaScript
![ezgif com-gif-maker](https://user-images.githubusercontent.com/26461307/102013519-0697d500-3d94-11eb-9de7-1e57dfd1754f.gif)
---
```js
const buttons = document.querySelectorAll(".but-js"),
    resultInput = document.querySelector(".result-js"),
    placeholder = document.querySelector(".placeholder-js");
    
const Operators = ["+", "-", "*", "/"];

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
    // 초기화
    if (currentBut === "AC") {
        resetResult();

        // 계산
    } else if (currentBut === "=") {
        calculation(resultInput.value);

        // 연산자 입력 시 추가만
    } else if (Operators.includes(currentBut)) {
        addNumber(currentBut);

        // 추가와 함께 placeholder에 결과 보여주기
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
```