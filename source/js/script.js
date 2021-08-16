// Navigation

(function () {
  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
}());

// Tabs
(function () {
  const links = document.querySelectorAll('.tab__link');
  const pages = document.querySelectorAll('.tab__item');

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
})();

// popup
(function () {
  const openPopupButtons = document.querySelectorAll('.button--buy');
  const popup = document.querySelector('.popup');
  const popupClose = popup.querySelector('.popup__close');

  const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  // const onModalMessageHide = () => {
  //   document.removeEventListener('click', () => {
  //     popup.classList.remove('popup--show');
  //   })
  // };

  // const showModalMessage = () => {
  //   document.addEventListener('click', onModalMessageHide);
  // };

  const openModal = () => {
    popup.classList.add('popup--show');
    document.addEventListener('keydown', onPopupEscKeydown);
  };

  const closeModal = () => {
    popup.classList.remove('popup--show');

    document.removeEventListener('keydown', onPopupEscKeydown);
  };

  openPopupButtons.forEach(btn =>
    btn.addEventListener('click', () => {
      openModal();
    })
  );

  popupClose.addEventListener('click', closeModal);

}());

// Form

(function () {
  const contactForm = document.querySelector('.form');
  const buttonForm = document.querySelector('.form__button');
  const fields = contactForm.querySelector('input[required]');

  fields.forEach(field => {
    field.addEventListener('focus', () => {
      field.classList.remove('form__item--error');
    });
  });

  buttonForm.addEventListener('click', function (evt) {
    let isValid = true;

    fields.forEach(field => {
      if (!field.value) {
        isValid = false;
        field.classList.add('form__item--error');
      }
    });

    if (!isValid) {
      evt.preventDefault();
    }
  });
}());
