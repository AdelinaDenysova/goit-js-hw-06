const widget = document.querySelector('.widget');
const color = document.querySelector('.color');
const button = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const backgroundColor = getRandomHexColor();
  color.textContent = backgroundColor;
  widget.style.backgroundColor = backgroundColor;
}

button.addEventListener('click', changeColor);