import  {navList} from "./mobile-menu";

// const anchors = document.querySelectorAll('a[href*="#"]');
const footerNavList = document.querySelector('.page-footer__nav-list');
const mainNavAnchors = navList.querySelectorAll('a');
const footerNavAnchors = footerNavList.querySelectorAll('a');

// const scrollAnchors = () => {
//   for (let anchor of anchors) {
//     anchor.addEventListener('click', function (evt) {
//       evt.preventDefault();
//
//       const blockID = anchor.getAttribute('href').substr(1);
//
//       document.getElementById(blockID).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     });
//   }
// };


const scrollAnchors = (evt, anchor) => {
      evt.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  }


const mainNavAnchorsScroll = (evt) => onMainNavAnchorScroll(evt, mainNavAnchor);

mainNavAnchors.forEach(mainNavAnchor => {
  mainNavAnchor.addEventListener('click', onMainNavAnchorScroll);
});

// const footerNavAnchorsScroll = () => {
//   for (let footerNavAnchor of footerNavAnchors) {
//     footerNavAnchor.addEventListener('click', scrollAnchors);
//   }
// };

// scrollAnchors(mainNavAnchors);


// export {anchors, scrollAnchors};
export {mainNavAnchors, footerNavAnchors, mainNavAnchorsScroll, footerNavAnchorsScroll};
