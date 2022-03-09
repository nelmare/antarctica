const button = document.querySelector(".contacts-button");
const buttonClose = document.querySelector(".modal-close-button");
const modal = document.querySelector(".modal-wrapper");
const form = document.querySelector(".feedback-form");
const name = form.querySelector("[name=name]");
const email = form.querySelector("[name=email]");
const feedback = form.querySelector("[name=feedback]");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (storageName && storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
    feedback.focus();
  } else {
    name.focus();
  }
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  form.classList.remove("form-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !feedback.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      form.classList.remove("form-error");
    }
  }
});
