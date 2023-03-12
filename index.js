
// Hide background images (warning icons) inside input boxes on page load

const buttons = document.querySelectorAll('form input');
const submitButton = document.getElementById('submit-button');
const main = document.querySelector('main');
const errMessages = document.querySelectorAll('.err-msg');

window.addEventListener('load', () => {
  buttons.forEach(button => {
    button.style.backgroundImage = 'none';
  });
  buttons.forEach(button => {
    button.classList.remove('red-border');
  });
  errMessages.forEach(errmsg => {
    errmsg.style.display = 'none';
  })
});
//


// VALIDATION

const firstName = document.getElementById('first-name');
const firstNameMsg = document.getElementById('first-name-msg');

const lastName = document.getElementById('last-name');
const lastNameMsg = document.getElementById('last-name-msg');

const email = document.getElementById('email');
const emailMsg = document.getElementById('email-msg');

const password = document.getElementById('password');
const passwordMsg = document.getElementById('password-msg');


// When clicked again after error message; error message, icon and red border disappear.
firstName.addEventListener('click', () => { firstNameMsg.style.display = 'none'; firstName.style.backgroundImage = "none"; firstName.classList.remove('red-border')});
lastName.addEventListener('click', () => { lastNameMsg.style.display = 'none'; lastName.style.backgroundImage = "none"; lastName.classList.remove('red-border') });
email.addEventListener('click', () => { emailMsg.style.display = 'none'; email.style.backgroundImage = "none"; email.classList.remove('red-border') });
password.addEventListener('click', () => { passwordMsg.style.display = 'none'; password.style.backgroundImage = "none"; password.classList.remove('red-border') });
//

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
})



function validateFirstName() {

  if (firstName.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    firstNameMsg.textContent = 'First Name cannot contain special characters';
    firstNameMsg.style.display = 'block';

    firstName.style.backgroundImage = "url('/images/icon-error.svg')";
    firstName.classList.add('red-border');
  }
  else if (firstName.value.match(/[0-9]/)) {
    firstNameMsg.textContent = 'First Name cannot contain numbers';
    firstNameMsg.style.display = 'block';

    firstName.style.backgroundImage = "url('/images/icon-error.svg')";
    firstName.classList.add('red-border');
  }
  else if (firstName.value.length === 0) {
    firstNameMsg.textContent = 'First Name cannot be empty';
    firstNameMsg.style.display = 'block';

    firstName.style.backgroundImage = "url('/images/icon-error.svg')";
    firstName.classList.add('red-border');
  }
  else if (firstName.value.length > 32) {
    firstNameMsg.textContent = 'Names longer than 32 characters are not valid';
    firstNameMsg.style.display = 'block';

    firstName.style.backgroundImage = "url('/images/icon-error.svg')";
    firstName.classList.add('red-border');
  }
}
function validateLastName() {

  if (lastName.value.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    lastNameMsg.textContent = 'Last Name cannot contain special characters';
    lastNameMsg.style.display = 'block';

    lastName.style.backgroundImage = "url('/images/icon-error.svg')";
    lastName.classList.add('red-border');
  }
  else if (lastName.value.match(/[0-9]/)) {
    lastNameMsg.textContent = 'Last Name cannot contain numbers';
    lastNameMsg.style.display = 'block';

    lastName.style.backgroundImage = "url('/images/icon-error.svg')";
    lastName.classList.add('red-border');
  }
  else if (lastName.value.length === 0) {
    lastNameMsg.textContent = 'Last Name cannot be empty';
    lastNameMsg.style.display = 'block';

    lastName.style.backgroundImage = "url('/images/icon-error.svg')";
    lastName.classList.add('red-border');
  }
  else if (lastName.value.length > 32) {
    lastNameMsg.textContent = 'Names longer than 32 characters are not valid';
    lastNameMsg.style.display = 'block';

    lastName.style.backgroundImage = "url('/images/icon-error.svg')";
    lastName.classList.add('red-border');
  }

}

function validateEmail() {

  if (email.value.length === 0) {
    emailMsg.textContent = 'E-mail cannot be empty';
    emailMsg.style.display = 'block';

    email.style.backgroundImage = "url('/images/icon-error.svg')";
    email.classList.add('red-border');
  }
  else if (!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    emailMsg.textContent = 'Looks like this is not an email';
    emailMsg.style.display = 'block';

    email.style.backgroundImage = "url('/images/icon-error.svg')";
    email.classList.add('red-border');
  }
}

function validatePassword() {

  if (password.value.length === 0) {
    passwordMsg.textContent = 'Password cannot be empty';
    passwordMsg.style.display = 'block';

    password.style.backgroundImage = "url('/images/icon-error.svg')";
    password.classList.add('red-border');
  }
  else if (password.value.length < 8) {
    passwordMsg.textContent = 'Password must contain 8 or more characters';
    passwordMsg.style.display = 'block';

    password.style.backgroundImage = "url('/images/icon-error.svg')";
    password.classList.add('red-border');
  }

}


