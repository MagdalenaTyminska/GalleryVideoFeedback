var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state') !== null) {
  form.elements.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  form.elements.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

form.addEventListener('input', throttle(saveFormData, 500));

function saveFormData(event) {
  const data = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}
