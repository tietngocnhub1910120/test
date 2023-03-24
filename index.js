const inputEls = document.querySelectorAll(".form__input");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const showErrEl = document.querySelector(".show-error");
const checkboxEl = document.querySelector("#checkbox");
const btnSignin = document.querySelector(".btn-primary");
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let errEmail = false;
let errPassword = false;
emailEl.addEventListener("change", (e) => {
  let value = e.target.value;

  let toggle = value.match(regexEmail) ? true : false;
  showErrEl.classList.toggle("err", toggle);
  showErrEl.innerHTML = toggle ? "" : "Email không hợp lệ";
  errEmail = toggle ? true : false;
  checkEmpty(errPassword, errEmail);
});

emailEl.addEventListener("blur", (e) => {
  let value = e.target.value;

  let toggle = value.match(regexEmail) ? true : false;
  showErrEl.classList.toggle("err", toggle);
  showErrEl.innerHTML = toggle ? "" : "Email không hợp lệ";
  errEmail = toggle ? true : false;
  checkEmpty(errPassword, errEmail);
});
passwordEl.addEventListener("change", (e) => {
  errPassword = e.target.value ? true : false;
  checkEmpty(errPassword, errEmail);
});
passwordEl.addEventListener("blur", (e) => {
  errPassword = e.target.value ? true : false;
  checkEmpty(errPassword, errEmail);
});
checkboxEl.addEventListener("change", (e) => {
  passwordEl.setAttribute("type", e.target.checked ? "text" : "password");
});

function checkEmpty(isPass, isEmail) {
  let isCheck = false;
  if (isPass && isEmail) {
    isCheck = true;
  } else {
    isCheck = false;
  }
  btnSignin.toggleAttribute("disabled", !isCheck);
  btnSignin.classList.toggle("disabled", !isCheck);
}
