let swiper = new Swiper(".mySwiper", {
  // snapOnRelease: true,
  slidesPerView: 4,
  centeredSlides: false,
  // slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  // loop: true,
  slideToClickedSlide: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },

  // breakpoints: {
  //   769: {
  //     slidesPerView: 4,
  //     slidesPerGroup: 1,
  //   },
  // },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    snapOnRelease: true,
    dragSize: 50,
    draggable: true,
  },
  direction: "vertical",
  clickable: true,
});
