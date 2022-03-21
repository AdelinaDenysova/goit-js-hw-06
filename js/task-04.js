const value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0; 
value.textContent = counterValue;

const decrementValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const incrementValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementValue);
incrementBtn.addEventListener("click", incrementValue);