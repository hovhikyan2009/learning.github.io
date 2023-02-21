const respons = document.querySelector(".respons");
const navmenu = document.querySelector(".nav-menu");
var section = document.querySelector(".section");

respons.addEventListener("click", () => {
    respons.classList.toggle("active");
    navmenu.classList.toggle("active");
    section.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
   el: '.swiper-pagination',
   clickable: true,
   },
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});
