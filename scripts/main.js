const scrollbarDragElement = document.querySelector(".swiper-scrollbar-drag");
const swiperElement = document.querySelector(".swiper");
const scrollbarElement = document.querySelector(".swiper-scrollbar");

// unlock swiper
if (scrollbarElement.style.display === "none") {
  scrollbarElement.style.display = "block";
}

if (scrollbarElement.classList.contains("swiper-scrollbar-lock")) {
  scrollbarElement.classList.remove("swiper-scrollbar-lock");
}

// swiper scrolling, following coursor
swiperElement.addEventListener("mousemove", (e) => {
  const y = e.clientY - 320;
  if (146 > y && y > 0) {
    scrollbarDragElement.style.top = y + "px";
    console.log(scrollbarDragElement.style.top);
  }
});
