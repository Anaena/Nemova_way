import { getBodyScrollTop, scrollToElement } from './utils.min.js';

const body = document.querySelector('body');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  body.dataset.scrollY = getBodyScrollTop();
  body.style.top = `-${body.dataset.scrollY}px`;

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    body.classList.add('page__body--locked');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    body.classList.remove('page__body--locked');
  }
});

const onSmoothLinksClick =() =>{
  const smoothLinks = document.querySelectorAll('a[href^="#"]:not(a[href="#"]');
  for (const smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = smoothLink.getAttribute('href');
      scrollToElement(document.querySelector(id));
    });
  }
};

export { onSmoothLinksClick };
