const body = document.querySelector("body");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("close");
const nav = document.querySelector(".links");
const backgroundMobile = document.querySelector("body > div");

hamburger.addEventListener("click", (e) => {
  body.style.overflow = "hidden";
  backgroundMobile.classList.toggle("back-mobile");
  nav.classList.toggle("links-mobile");
  if (!nav.classList.contains("links-mobile")) {
    body.style.overflow = "auto";
  }
});
