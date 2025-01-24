const all_swipers = document.querySelectorAll(".mySwiper")
const all_swipers2 = document.querySelectorAll(".mySwiper2")
const galleries = document.querySelectorAll(".gallery .card")

galleries.forEach(e => {
  var swiper = new Swiper(e.querySelector(".mySwiper"), {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

    var swiper2 = new Swiper(e.querySelector(".mySwiper2"), {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
});
