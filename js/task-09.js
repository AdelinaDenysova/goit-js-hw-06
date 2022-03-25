const widget = document.querySelector('.widget');
const color = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const backgroundColor = getRandomHexColor();
  color.textContent = backgroundColor;
  body.style.backgroundColor = backgroundColor;
}

button.addEventListener('click', changeColor);