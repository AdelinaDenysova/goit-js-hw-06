const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length');

input.addEventListener("blur", () => {
    input.classList.add("invalid");

    if (input.value.length === Number(dataLength)) {
        input.classList.replace("invalid", "valid");
    };
});