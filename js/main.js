

const input = document.getElementById("whatsapp");
const formWrapper = document.getElementById("form-wrapper");
const successMessage = document.getElementById("success-message");
const inputContainer = document.querySelector(".input-container");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (input.value.trim() !== "") {
      formWrapper.style.display  = "none";
      successMessage.classList.remove("hidden");
    }
  }
});
input.addEventListener("input", () => {
  const regex = /^(010|011|012|015)\d{8}$/;

  if (regex.test(input.value)) {
    inputContainer.style.border = "2px solid green";
  } else {
    inputContainer.style.border = "2px solid red";
  }
});

const input2 = document.getElementById("whatsapp2");
const formWrapper2 = document.getElementById("form-wrapper2");
const successMessage2 = document.getElementById("success-message2");

input2.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (input2.value.trim() !== "") {
      formWrapper2.style.display  = "none";
      successMessage2.classList.remove("hidden");
    }
  }
});

const inputContainer2 = document.querySelector(".input-container2");
input2.addEventListener("input", () => {
  const regex = /^(010|011|012|015)\d{8}$/;

  if (regex.test(input2.value)) {
    inputContainer2.style.border = "2px solid green";
  } else {
    inputContainer2.style.border = "2px solid red";
  }
});