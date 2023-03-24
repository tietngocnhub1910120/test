const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
function validate(inputs) {
  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const checkEmpty = e.target.value === "" ? true : false;
      let spanEl = e.target.nextElementSibling;
      if (checkEmpty) {
        spanEl.classList.add("show-error");
        spanEl.innerHTML = `Vui long nhap ${e.target.name}`;
      } else {
        spanEl.classList.remove("show-error");
        spanEl.innerHTML = "";

        if (e.target.name === "email") {
          const checkEmail = e.target.value.match(regexEmail);
          if (checkEmail) {
            spanEl.classList.remove("show-error");
            spanEl.innerHTML = "";
          } else {
            spanEl.classList.add("show-error");
            spanEl.innerHTML = `${e.target.name} Khong hop le!`;
          }
        }
        if (e.target.name === "phone") {
          const checkPhone = e.target.value.match(regexPhone);
          if (checkPhone) {
            spanEl.classList.remove("show-error");
            spanEl.innerHTML = "";
          } else {
            spanEl.classList.add("show-error");
            spanEl.innerHTML = `${e.target.name} Khong hop le!`;
          }
        }
      }
    });
    input.addEventListener("blur", (e) => {
      const checkEmpty = e.target.value === "" ? true : false;
      let spanEl = e.target.nextElementSibling;
      if (checkEmpty) {
        spanEl.classList.add("show-error");
        spanEl.innerHTML = `Vui long nhap ${e.target.name}`;
      } else {
        spanEl.classList.remove("show-error");
        spanEl.innerHTML = "";

        if (e.target.name === "email") {
          const checkEmail = e.target.value.match(regexEmail);
          if (checkEmail) {
            spanEl.classList.remove("show-error");
            spanEl.innerHTML = "";
          } else {
            spanEl.classList.add("show-error");
            spanEl.innerHTML = `${e.target.name} Khong hop le!`;
          }
        }
        if (e.target.name === "phone") {
          const checkPhone = e.target.value.match(regexPhone);
          if (checkPhone) {
            spanEl.classList.remove("show-error");
            spanEl.innerHTML = "";
          } else {
            spanEl.classList.add("show-error");
            spanEl.innerHTML = `${e.target.name} Khong hop le!`;
          }
        }
      }
    });
  });
}
