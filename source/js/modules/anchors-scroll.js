const anchors = document.querySelectorAll('[data-anchor]');

const anchorsScroll = () => {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (evt) {
      evt.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {anchors, anchorsScroll};
