import { resetForm, fillForm } from './form.min.js';
import { onSuccessRemove } from './modal-message.min.js';

const openPopupButtons = document.querySelectorAll('.button--buy');
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const popupClose = popup.querySelector('.popup__close');

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    resetForm();
    onSuccessRemove();
    closeModal();
  }
};

const onModalHide = () => {
  document.removeEventListener('click', onModalHide);
};

const hideModal = (evt) => {
  if (evt.target === popup) {
    closeModal();
  }
};

const closeModal = () => {
  popup.classList.remove('popup--show');
  resetForm();

  itemForm.forEach((item) => {
    item.classList.remove('form__item--error')
  });
  popup.removeEventListener('click', hideModal);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const openModal = () => {
  popup.classList.add('popup--show');

  document.addEventListener('click', hideModal);
  document.addEventListener('keydown', onPopupEscKeydown);
};

openPopupButtons.forEach(btn =>
  btn.addEventListener('click', () => {
    openModal();
    fillForm();
  })
);

popupClose.addEventListener('click', closeModal);

export { onPopupEscKeydown, popupForm };
