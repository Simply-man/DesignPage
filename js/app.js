const form = document.querySelector(".contact-form");
const inputForm = form["text-input"];
// const textInput = document.getElementById("text-input");
const spanValidEmail = document.querySelector(".valid-email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputForm.addEventListener("keyup", (e) => {
  e.preventDefault();
  let inputFormIncludes =
    inputForm.value.includes("@") && inputForm.value.includes(".");
  let inputFormInclude = inputForm.value.indexOf("@.");
  let inputFormLength = inputForm.value.length;
  let inputFormIndexOf = inputForm.value.indexOf(".") + 1;

  if (
    (inputFormIncludes &&
      inputFormIndexOf !== inputFormLength &&
      inputFormInclude === -1) ||
    inputFormLength === 0
  ) {
    spanValidEmail.style.display = "none";
    inputForm.classList.remove("text-input-active");
  } else {
    spanValidEmail.style.display = "block";
    inputForm.classList.add("text-input-active");
  }
});

// Slider JS
// const tagSliders = document.querySelectorAll(".people-desc-sliders > a");
// const newAr = Array.from(tagSliders).map((item) => item.getAttribute("href"));
