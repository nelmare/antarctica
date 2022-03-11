import {userPhoneInput} from './form';

const userPhoneInputValidate = () => {
  if (userPhoneInput) {
    userPhoneInput.addEventListener('input', () => {
      userPhoneInput.setCustomValidity('');
      userPhoneInput.checkValidity();
    });

    userPhoneInput.addEventListener('invalid', () => {
      if (userPhoneInput.value === '') {
        userPhoneInput.setCustomValidity('Введите номер телефона');
      } else if (typeof userPhoneInput.value === 'string') {
        userPhoneInput.setCustomValidity('Введите номер телефона цифрами');
      } else {
        userPhoneInput.setCustomValidity('');
      }
    });
  }
};

export {userPhoneInputValidate};
