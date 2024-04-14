const phoneInput = document.getElementById('phone');
const errorMessage = document.getElementById('error-message');

phoneInput.addEventListener('blur', function () {
  if (!this.value.trim()) {
    errorMessage.textContent = '';
  } else if (!this.checkValidity()) {
    errorMessage.textContent = 'Невірний формат номеру';
  } else {
    errorMessage.textContent = '';
  }
});

errorMessage.addEventListener('click', function () {
  this.textContent = '';
  phoneInput.focus();
});

const emailInput = document.getElementById('email');
const emailErrorMessage = document.getElementById('email-error-message');

emailInput.addEventListener('blur', function () {
  if (!this.checkValidity()) {
    emailErrorMessage.textContent = 'Невірний формат електронної пошти';
  } else {
    emailErrorMessage.textContent = '';
  }
});

emailErrorMessage.addEventListener('click', function () {
  this.textContent = '';
  emailInput.focus();
});