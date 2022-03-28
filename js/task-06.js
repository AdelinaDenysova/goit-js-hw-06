const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener("blur", () => {
    input.classList.value =  input.value.length === Number(dataLength) ? "valid" : "invalid";
});