var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const submitButton = document.querySelector('button[type=submit]');

buttonStatus();

if (localStorage.getItem('feedback-form-state') !== null) {
  form.elements.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  form.elements.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
  buttonStatus();
}

form.addEventListener('input', throttle(saveFormData, 500));

function saveFormData() {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  buttonStatus();
}

form.addEventListener('submit', onSubmit);

function onSubmit() {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function buttonStatus() {
  if (form.elements.email.value == '' || form.elements.message.value == '')
    submitButton.disabled = true;
  else {
    submitButton.disabled = false;
  }
}
