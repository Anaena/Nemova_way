import { scrollToElement } from './utils.min.js';

const tabsList = document.querySelector('.tab__box');
const tabs = tabsList.querySelectorAll('.tab__link');
const pagesList = document.querySelector('.tab__list');
const pages = document.querySelectorAll('.tab__item');
const catalogList = document.querySelector('.catalog__list');

const changeTabCard = (evt) => {
  evt.preventDefault();
  const target = evt.target;

  try {
    const country = target.closest('[data-country]').dataset.country;
    tabs.forEach((tab) => tab.classList.remove('tab__link--current'));
    pages.forEach((page) => page.classList.remove('tab__item--current'));
    tabsList.querySelector(`[data-country='${country}']`).classList.add('tab__link--current');
    pagesList.querySelector(`[data-tab='${country}']`).classList.add('tab__item--current');
    scrollToElement(tabsList.querySelector(`[data-country='${country}']`));
  } catch (err) {
    return err;
  }
};

const onTabClick = () => tabsList.addEventListener('click', changeTabCard);
const onCardListClick = () => catalogList.addEventListener('click', changeTabCard);

export { onTabClick, onCardListClick };
