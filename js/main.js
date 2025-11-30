

const input = document.getElementById("whatsapp");
const formWrapper = document.getElementById("form-wrapper");
const successMessage = document.getElementById("success-message");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    if (input.value.trim() !== "") {
      formWrapper.style.display  = "none";
      successMessage.classList.remove("hidden");
    }
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
