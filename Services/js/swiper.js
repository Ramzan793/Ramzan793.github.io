var swiper = new Swiper(".mySwiper", {
  rewind:true,
  loop: true,
  // slidesPerView: 4,
  // spaceBetween: 30,
  slidesPerView: 6,
  direction: 'horizontal',
  autoplay: true,
  autoplayTimeout: 1000,
  autoplaySpeed: 100,
  smartSpeed: 500,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },

});
