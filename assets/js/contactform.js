// Credits for the isValidEmail function: https://gist.github.com/tmazur/3965625
function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="name"]');

const validateInput = () => {
    nameInput.classList.remove('invalid');
    nameInput.nextElementSibling.classList.add('hide');

    if (!nameInput.value) {
        nameInput.classList.add('invalid');
        nameInput.nextElementSibling.classList.remove('hide');
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
})

nameInput.addEventListener("input", () => {
    validateInput();
})