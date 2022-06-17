let hamburgerIcon = document.querySelector(".header__hamburger");
let menuContent = document.querySelector(".header__menu");

hamburgerIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
  menuContent.classList.toggle("active");
}

function toggleOverlay() {
  return true;
}
