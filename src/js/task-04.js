const value = document.querySelector("#value");
let counterValue = 0; 
value.innerHTML = counterValue;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementValue = () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
};

const incrementValue = () => {
    counterValue += 1;
    value.innerHTML = counterValue;
};

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);