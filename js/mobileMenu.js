const body = document.querySelector("body");
const hamburgerMenu = document.getElementById("hamburger");
const closeMenu = document.getElementById("close");
const nav = document.querySelector(".links");
const backgroundMobile = document.querySelector("body > div");

const hamburger = () => {
  // Listener to open a mobile menu
  hamburgerMenu.addEventListener("click", (e) => {
    body.style.overflow = "hidden";

    backgroundMobile.classList.add("back-mobile");
    nav.classList.add("links-mobile");

    hamburgerMenu.style.display = "none";
    closeMenu.style.display = "block";
  });

  // Listener to close mobile menu
  closeMenu.addEventListener("click", (e) => {
    body.style.overflow = "auto";

    backgroundMobile.classList.remove("back-mobile");
    nav.classList.remove("links-mobile");

    hamburgerMenu.style.display = "block";
    closeMenu.style.display = "none";
  });
};
