// Navigation
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Tabs
const links = document.querySelectorAll('.tab__link');
const pages = document.querySelectorAll('.tab__item');
const catalogButtons = document.querySelectorAll('.catalog-card__link');

const changeTabs = () => {
  let currentIndex = Array.from(links).findIndex((link) =>
    link.classList.contains('tab__link--current')
  );

  links.forEach((link, index) => {
    link.addEventListener('click', () => {

      links[currentIndex].classList.remove('tab__link--current');
      pages[currentIndex].classList.remove('tab__item--current');


      link.classList.add('tab__link--current');
      pages[index].classList.add('tab__item--current');

      currentIndex = index;
    });
  });
};

changeTabs();

catalogButtons.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    const cardId = evt.currentTarget.dataset.tab;
    const countryBoxElement = document.querySelector(`${evt.currentTarget.hash}`);
    const countryTabElement = document.querySelector(`#${cardId}`);

    if (cardId && countryBoxElement) {
      pages.forEach((page) => {
        page.classList.remove('tab__item--current');
      });
      countryBoxElement.classList.add('tab__item--current');

      links.forEach((link) => {
        link.classList.remove('tab__link--current');
      });
      countryTabElement.classList.add('tab__link--current');
    }
  });
});

// Modal-form
const openPopupButtons = document.querySelectorAll('.button--buy');
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');
const itemForm = popup.querySelectorAll('.form__item');
const itemPhone = popup.querySelector('.form__item--phone');
const itemEmail = popup.querySelector('.form__item--email');
const popupClose = popup.querySelector('.popup__close');

const successMessage = document.querySelector('.success');
const successClose = successMessage.querySelector('.success__close');

const resetForm = () => {
  itemPhone.value = '';
  itemEmail.value = '';
  popupForm.reset();

  itemForm.forEach((item) => {
    item.classList.remove('form__item--error');
  });
};

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

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('phone');
} catch (err) {
  isStorageSupport = false;
}

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
    if (storage) {
      itemPhone.value = storage;
      itemEmail.value = storage;
    } else {
      itemPhone.focus();
    }
  })
);

popupClose.addEventListener('click', closeModal);

popupForm.addEventListener('submit', (evt) => {
  if (!itemPhone.value) {
    evt.preventDefault();
    itemPhone.classList.add('form__item--error');
    }
  else  if (!itemEmail.value) {
    evt.preventDefault();
    itemEmail.classList.add('form__item--error');
    }
  else {
    showSuccessMessage();
    if (isStorageSupport) {
      localStorage.setItemlocalStorage.setItem('phone', itemPhone.value);
      localStorage.setItemlocalStorage.setItem('email', itemEmail.value);
    }
  }
});
