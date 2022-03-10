export const form = document.querySelector('.booking__form');
export const userNameInput = form.querySelector('[name=name]');
export const userEmailInput = form.querySelector('[name=e-mail]');
export const userPhoneInput = form.querySelector('[name=phone]');

const localStorageDataSet = () => {
  if (form) {
    let isStorageSupport = true;

    try {
      localStorage.getItem('name');
    } catch (err) {
      isStorageSupport = false;
    }

    form.addEventListener('submit', function (evt) {
      if (!userNameInput.value || !userEmailInput.value || !userPhoneInput.value) {
        evt.preventDefault();
        form.offsetWidth = form.offsetWidth;
      } else {
        if (isStorageSupport) {
          localStorage.setItem('name', userNameInput.value);
          localStorage.setItem('email', userEmailInput.value);
          localStorage.setItem('phone', userPhoneInput.value);
        }
      }
    });
  }
};

export {localStorageDataSet};
