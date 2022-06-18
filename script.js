let hamburgerIcon = document.querySelector(".header__hamburger");
let menuContent = document.querySelector(".header__menu");
let body = document.querySelector("body");
let overlay = document.querySelector(".menu-overlay");
let sliderController = document.querySelector(".slider-controller");
let sliderIndicator = document.querySelector(".testimonials__indicator");

let slides = 4;
let idx = 1;

sliderIndicator.addEventListener("click", (e) => {
  if (e.target.classList.contains("radio")) {
    idx = +e.target.dataset.index;
    console.log(idx);

    if (idx === 1) {
      sliderController.style.transform = "translateX(0)";
    }
    if (idx === 2) {
      sliderController.style.transform = "translateX(calc(-100% - 24px))";
    }
    if (idx === 3) {
      sliderController.style.transform = "translateX(calc(-200% - 48px))";
    }
    if (idx === 4) {
      sliderController.style.transform = "translateX(calc(-300% - 72px))";
    }
  }

  // switch (+idx) {
  //   case 2:
  //     sliderController.style.transform = "translateX(calc(-100% - 24px))";
  //     break;
  //   case 3:
  //     sliderController.style.transform = "translateX(calc(-200% - 48px));";
  //     break;
  //   case 4:
  //     sliderController.style.transform = "translateX(calc(-300% - 64px));";
  //     break;
  //   default:
  //     return true;
  // }
});

hamburgerIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
  menuContent.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
  body.classList.toggle("locked");
  overlay.classList.toggle("active");
}
