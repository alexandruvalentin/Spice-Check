// Credits for the isValidEmail function: https://gist.github.com/tmazur/3965625
function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

const form = document.querySelector('form[name="contact__form"]');
const thanks = document.querySelector('.thank__you');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const contactForm = document.querySelector('.contactform__container')


let isFormValid = false;
let isValidationOn = false;

const inputs = [nameInput, emailInput, messageInput];

const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add('hide');
}

const invalidateElm = (elm) => {
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove('hide');
}

const validateInput = () => {
    if(!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }

    if (!messageInput.value) {
        isFormValid = false;
        invalidateElm(messageInput);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInput();
    if (isFormValid) {
        contactForm.remove();
        thanks.classList.remove('hide');
    }
})

inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateInput();
    });
});