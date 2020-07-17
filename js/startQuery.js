// Function to run SliderJS  if screen is smaller than 768px
const init = () => {
  const query = window.matchMedia("(max-width: 768px)");

  if (query.matches) {
    sliderJS();
    hamburger();
  }
};

window.addEventListener("DOMContentLoaded", init());
