const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const getBodyScrollTop = () => {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

const scrollToElement = (element) =>{
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export { isEscEvent, getBodyScrollTop, scrollToElement };
