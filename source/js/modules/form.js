const form = document.querySelector(".booking__form");
const button = form.querySelector(".btn");
// const buttonClose = document.querySelector(".modal-close-button");
// const modal = document.querySelector(".modal-wrapper");

const userNameInput = form.querySelector("[name=name]");
const userEmailInput = form.querySelector("[name=e-mail]");
const userPhoneInput = form.querySelector("[name=phone]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";
let storagePhone = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
  storagePhone = localStorage.getItem("phone");
} catch (err) {
  isStorageSupport = false;
}

// button.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   // modal.classList.add("modal-show");
//   if (storageName && storageEmail && storagePhone) {
//     userNameInput.value = storageName;
//     userEmailInput.value = storageEmail;
//     userPhoneInput.value = storagePhone;
//     // feedback.focus();
//   } else {
//     userNameInput.focus();
//   }
// });

// buttonClose.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   modal.classList.remove("modal-show");
//   form.classList.remove("form-error");
// });

userPhoneInput.addEventListener('invalid', () => {
  // const phoneValue = userPhoneInput.value;

  if (userPhoneInput.validity.valueMissing) {
    userPhoneInput.setCustomValidity('Обязательное поле');
  }
  // else if (userPhoneInput.validity.typeMismatch) {
  //   userPhoneInput.setCustomValidity('Данные должны быть в числовом формате');
  // }
  else {
    userPhoneInput.setCustomValidity('');
  }
  // userPhoneInput.reportValidity();
});

form.addEventListener("submit", function (evt) {
  if (!userNameInput.value || !userEmailInput.value || !userPhoneInput.value) {
    evt.preventDefault();
    // form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    // form.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", userNameInput.value);
      localStorage.setItem("email", userEmailInput.value);
      localStorage.setItem("phone", userPhoneInput.value);
    }
  }
});



// const onNameFill = () => {
//   if (!name.value) {
//     name.setCustomValidity(`Цена за ночь не должна превышать ${MAX_PRICE}`);
//     showErrorBorder(adPriceInput);
//   } else if (valuePrice < MinPrice[adHouseType.value]) {
//     adPriceInput.setCustomValidity(`Цена за ночь не должна быть меньше ${MinPrice[adHouseType.value]}`);
//     showErrorBorder(adPriceInput);
//   } else {
//     adPriceInput.setCustomValidity('');
//     removeErrorBorder(adPriceInput);
//   }
//   adPriceInput.reportValidity();
// };
//
// adPriceInput.addEventListener('input', onPriceInputFill);


// window.addEventListener("keydown", function (evt) {
//   if (evt.key === "Esc" || evt.key === "Escape") {
//     evt.preventDefault();
//     if (modal.classList.contains("modal-show")) {
//       modal.classList.remove("modal-show");
//       form.classList.remove("form-error");
//     }
//   }
// });
