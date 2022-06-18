let hamburgerIcon = document.querySelector(".header__hamburger");
let menuContent = document.querySelector(".header__menu");
let body = document.querySelector("body");
let overlay = document.querySelector(".menu-overlay");

hamburgerIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
  menuContent.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
  body.classList.toggle("locked");
  overlay.classList.toggle("active");
}

function toggleOverlay() {
  return true;
}
