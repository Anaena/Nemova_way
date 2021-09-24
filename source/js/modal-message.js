import { onPopupEscKeydown } from './user-modal.min.js';
import { resetForm } from './form.min.js';

const successMessage = document.querySelector('.success');
const successClose = successMessage.querySelector('.success__close');

const onSuccessRemove = () => {
  successMessage.classList.remove('success--show');
  resetForm();
  successClose.removeEventListener('click', onSuccessRemove);
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const showSuccessMessage = () => {
  successMessage.classList.add('success--show');
  document.addEventListener('keydown', onPopupEscKeydown);
  successClose.addEventListener('click', onSuccessRemove);
};

export { showSuccessMessage, onSuccessRemove };
