if (document.querySelector(".banner-fullsize .swiper")) {
  const bannerFullSize = new Swiper(".banner-fullsize .swiper", {
    direction: "horizontal",
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    effect: "fade",
  });
}
if (document.querySelector(".branch .branch-slider .swiper")) {
  const branchSlider = new Swiper(".branch .branch-slider .swiper", {
    direction: "horizontal",
    speed: 500,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if (document.querySelector(".testimonials .testimonials-slider .swiper")) {
  const testimonialsSlider = new Swiper(
    ".testimonials .testimonials-slider .swiper",
    {
      direction: "horizontal",
      speed: 500,
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 40,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".testimonials .testimonials-slider .slider-btn-next",
        prevEl: ".testimonials .testimonials-slider .slider-btn-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    }
  );
}

if (document.querySelector(".relate .relate-slider .swiper")) {
  const relateSlider = new Swiper(".relate .relate-slider .swiper", {
    direction: "horizontal",
    speed: 500,
    spaceBetween: 50,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
}

if (document.querySelector(".product-detail .detail-thumb .swiper")) {
}

if (document.querySelector(".product-detail .detail-slider .swiper")) {
  const detailThumb = new Swiper(".product-detail .detail-thumb .swiper", {
    direction: "horizontal",
    speed: 1000,
    slidesPerView: 8,
    spaceBetween: 5,
    loop: true,
  });

  const detailSlider = new Swiper(".product-detail .detail-slider .swiper", {
    direction: "horizontal",
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    effect: "fade",
    thumbs: {
      swiper: detailThumb,
    },
  });
}
