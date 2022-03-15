let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
export let navList = document.querySelector('.main-nav__list');
let navLinks = navList.querySelectorAll('a');

export const toggleMenu = () => {
  navMain.classList.remove('is-nojs');

  document.addEventListener('click', () => {
    if (navMain.classList.contains('is-open')) {
      navMain.classList.remove('is-open');
      navMain.classList.add('is-closed');
      document.body.classList.remove('scroll-lock');
    }
  });

  navToggle.addEventListener('click', function (evt) {
    evt.stopPropagation();
    if (navMain.classList.contains('is-closed')) {
      document.body.classList.add('scroll-lock');
      navMain.classList.remove('is-closed');
      navMain.classList.add('is-open');
    } else {
      document.body.classList.remove('scroll-lock');
      navMain.classList.add('is-closed');
      navMain.classList.remove('is-open');
      document.body.classList.remove('scroll-lock');
    }
    return false;
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      if (navMain.classList.contains('is-open')) {
        navMain.classList.remove('is-open');
        navMain.classList.add('is-closed');
        document.body.classList.remove('scroll-lock');
      }
    });
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      if (navMain.classList.contains('is-open')) {
        navMain.classList.remove('is-open');
        navMain.classList.add('is-closed');
        document.body.classList.remove('scroll-lock');
      }
    }
  });
};
