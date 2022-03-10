let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let navList = document.querySelector('.main-nav__list');
let navLinks = navList.querySelectorAll('a');

export const toggleMenu = () => {
  navMain.classList.remove('is-nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('is-closed')) {
      navMain.classList.remove('is-closed');
      navMain.classList.add('is-open');
    } else {
      navMain.classList.add('is-closed');
      navMain.classList.remove('is-open');
    }
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      if (navMain.classList.contains('is-open')) {
        navMain.classList.remove('is-open');
        navMain.classList.add('is-closed');
      }
    });
  });
};
