import { showSuccessMessage } from './modal-message.min.js';

const mainForm = document.querySelector('.form');
const itemForm = mainForm.querySelectorAll('.form__item');
const itemPhone = mainForm.querySelector('.form__item--phone');
const itemEmail = mainForm.querySelector('.form__item--email');

let userPhoneSaved = '';
let userEmailSaved = '';

const isStorage = () => {
  try {
    userPhoneSaved = localStorage.getItem('userPhoneSaved');
    userEmailSaved = localStorage.getItem('userEmailSaved');
    return true;
  } catch (err) {
    return false;
  }
};

const resetForm = () => {
  itemPhone.value = '';
  itemEmail.value = '';
  mainForm.reset();

  itemForm.forEach((item) => {
    item.classList.remove('form__item--error');
  });
};

const fillForm = (form) => {
  isStorage();
  const userPhoneField = form['user-phone'];
  const userEmailField = form['user-email'];
  if (userPhoneSaved) {
    userPhoneField.value = userPhoneSaved;
  }
  if (userEmailSaved) {
    userEmailField.value = userEmailSaved;
  }
};

const isStorageSupport = isStorage();

const onFormSubmit = (evt) => {
  if (!itemPhone.value) {
    evt.preventDefault();
    itemPhone.classList.add('form__item--error');
  } else if (!itemEmail.value) {
    evt.preventDefault();
    itemEmail.classList.add('form__item--error');
  } else {
    showSuccessMessage();
    if (isStorageSupport) {
      localStorage.setItemlocalStorage.setItem('phone', itemPhone.value);
      localStorage.setItemlocalStorage.setItem('email', itemEmail.value);
      fillForm(mainForm);
    }
  }
};

const submitListener = () => mainForm.addEventListener('click', onFormSubmit);

export { onFormSubmit, submitListener, mainForm, resetForm, fillForm };
