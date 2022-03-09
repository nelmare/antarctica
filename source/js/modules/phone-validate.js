import {userPhoneInput} from './form';

const userPhoneInputValidate = () => {
  userPhoneInput.addEventListener('input', () => {
    userPhoneInput.setCustomValidity('');
    userPhoneInput.checkValidity();
  });

  userPhoneInput.addEventListener('invalid', () => {
    if (userPhoneInput.value === '') {
      userPhoneInput.setCustomValidity('Введите номер телефона');
    } else {
      userPhoneInput.setCustomValidity('Введите номер телефона в формате: 123-456-7890');
    }
  });
};

export {userPhoneInputValidate};
