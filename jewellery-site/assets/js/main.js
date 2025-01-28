var swiper = new Swiper(".products", {
    loop: true,
    cssMode: true,
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });