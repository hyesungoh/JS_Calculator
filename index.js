const buttons = document.querySelectorAll(".but-js");

const handleClick = (event) => {
    console.log(event.target);
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
