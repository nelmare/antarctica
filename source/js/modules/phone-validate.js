import {userPhoneInput} from './form';

const userPhoneInputValidate = () => {
  userPhoneInput.addEventListener('invalid', () => {
    if (userPhoneInput.validity.tooShort) {
      userPhoneInput.setCustomValidity('Номер телефона должен содержать 11 цифр');
    } else if (userPhoneInput.validity.patternMismatch) {
      userPhoneInput.setCustomValidity('Введите данные цифрами, начиная с "+7" или "8"');
    } else if (userPhoneInput.validity.valueMissing) {
      userPhoneInput.setCustomValidity('Обязательное поле');
    } else {
      userPhoneInput.setCustomValidity('');
    }
  });
};

export {userPhoneInputValidate};
