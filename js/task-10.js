const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const numberInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.marginTop = '30px';

let number = 0;

numberInput.addEventListener("input", () => {
  number = numberInput.value;
});

const createBoxes = (amount) => {
  let boxSize = 20;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    boxSize += 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.marginRight = '10px';
    box.style.marginBottom = '10px';
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
  };
  boxes.append(...elements);
};

createBtn.addEventListener("click", () => {
  createBoxes(number);
  createBtn.disabled = true;
  numberInput.value = '';
});

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
  createBtn.disabled = false;
});