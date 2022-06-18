let hamburgerIcon = document.querySelector(".header__hamburger");
let menuContent = document.querySelector(".header__menu");
let body = document.querySelector("body");
let overlay = document.querySelector(".menu-overlay");
let sliderController = document.querySelector(".slider-controller");
let sliderIndicator = document.querySelector(".testimonials__indicator");
let btnEmailValidation = document.querySelector("#button-email-validation");
let inputEmail = document.querySelector("#input-email");

btnEmailValidation.addEventListener("click", validateInput);

function validateInput(e) {
  e.preventDefault();
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (!inputEmail.value.trim()) {
    alert("Input can't be empty!");
    inputEmail.classList.add("invalid");
  } else {
    if (regex.test(inputEmail.value)) {
      alert("Success! Your request has been successfully submitted.");
      inputEmail.classList.add("valid");
    } else if (!regex.test(inputEmail.value)) {
      inputEmail.classList.add("invalid");
      alert("Invalid email!!");
    }
  }
}

//Carousel Functionality
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
});

//Hamburger Toggle
hamburgerIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
  menuContent.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
  body.classList.toggle("locked");
  overlay.classList.toggle("active");
}
