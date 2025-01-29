//Header Js

const header = document.querySelector("header");
const menuBtn = document.querySelector(".mobile-menu i");
const menuBar = document.querySelector("header .btm-nav");

menuBtn.addEventListener("click", ()=> menuBar.classList.contains("open") ? menuBar.classList.remove("open") : menuBar.classList.add("open"));

window.addEventListener("scroll", () => {

  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//Slider Js

var productSlider = new Swiper(".products", {
  loop: true,
  cssMode: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
  },
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    380: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var testimonials = new Swiper(".testimonials", {
  loop: true,
  cssMode: true,
  autoplay: {
    delay: 3500,
    pauseOnMouseEnter: true,
  },
  speed: 2000,
  slidesPerView: 1,
  pagination: {
    el: ".rigth-side .swiper-pagination",
    clickable: true,
  },
});