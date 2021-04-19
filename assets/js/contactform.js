// RegEx function(credit: https://gist.github.com/tmazur/3965625)
const isValidEmail = (emailAddress) => {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

// RegEx function(credit: https://stackoverflow.com/a/35458020/14692310)
const isValidName = (fullName) => {
    var pattern = new RegExp(/^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/i);
    return pattern.test(fullName);
}

// Declare constants
const form = document.querySelector('form[name="contact__form"]');
const thanks = document.querySelector('.thank__you');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const contactForm = document.querySelector('.contactform__container');
const inputs = [nameInput, emailInput, messageInput];

//Declare variables
let isFormValid = false; //initiate as false;
let isValidationOn = false; //initiate as false;

//Removes 'invalid' error message after clearing the faulty input
const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add('hide');
}

//Adds 'invalid' error message underneath input field
const invalidateElm = (elm) => {
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove('hide');
}

const validateInput = () => {
    if(!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    //Returns 'invalid' error message if the Full Name input is empty or contains special characters
    if (!isValidName(nameInput.value)) {
        isFormValid = false;
        invalidateElm(nameInput);
    }
    //Returns 'invalid' error message if the E-mail Address input doesn't contain '@'
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }
    //Returns 'invalid' error message if the Message input is lower than 20 characters
    if (messageInput.value.length < 20) {
        isFormValid = false;
        invalidateElm(messageInput);
    }
    //Returns 'invalid' error message if the Message input is empty or contains special characters
    if (!isValidName(messageInput.value)) {
        isFormValid = false;
        invalidateElm(messageInput);
    }
}

//Loop through each input and validate
inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateInput();
    });
});

form.addEventListener("submit", (e) => {
    //the default action that belongs to the form will not occur
    e.preventDefault();
    isValidationOn = true;
    validateInput();

    //if the form is valid, it removes it and it displays a Thank You message
    if (isFormValid) {
        contactForm.remove();
        thanks.classList.remove('hide');
    };
});