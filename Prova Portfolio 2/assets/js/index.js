

/* Hamburger */
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.body.classList.toggle("open");
});


/* card */
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    perPage: 2,
    type: `loop`,
    gap: `2vw`,
    padding: "2vw",
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});



/* Comparsa sezioni */
// elements
var elements_to_watch = document.querySelectorAll(".watch");
// callback
var callback = function (items) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("in-page");
    } else {
      item.target.classList.remove("in-page");
    }
  });
};
// observer
let observer = new IntersectionObserver(callback, { threshold: 0.5 });
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element);
});





/* Scrollify */
$(function() {
  $.scrollify({
    section : ".watch",
    interstitialSection: ".footer",
    afterRender:function() {
      if (window.innerWidth <= 600) {
          $.scrollify.disable();
        } else {
          $.scrollify.enable();
        }
    },
    afterResize:function() {
      if (window.innerWidth <= 600) {
          $.scrollify.disable();
        } else {
          $.scrollify.enable();
        }
    },
  });
});



/* gsap */

gsap.registerPlugin(ScrollTrigger);


/* gsap Home */
gsap.from(".hero__text", {
  scrollTrigger: {
    trigger: `.hero__text`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  x: -300,
  y: -200,
  duration: 3,
  ease: "power3.out"
});

gsap.from(".hero__button", {
  scrollTrigger: {
    trigger: `.hero__button`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  delay: 0.3,
  x: -300,
  y: -200,
  duration: 1.5,
  ease: "bounce.out"
});


gsap.from(".hero__img", {
  scrollTrigger: {
    trigger: `.hero__img`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  y: -400,
  duration: 2.5,
  ease: "power2.out"
});

/* gsap About */


gsap.from(".button-2", {
  scrollTrigger: {
    trigger: `.button-2`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  delay: 0.3,
  x: -300,
  duration: 1.5,
  ease: "bounce.out"
});


gsap.from(".cover__text__right", {
  scrollTrigger: {
    trigger: `.cover__text__title`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  x: -300,
  duration: 3,
  ease: "power3.out"
});
gsap.from(".cover__text__left", {
  scrollTrigger: {
    trigger: `.cover__text__title`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  x: 300,
  duration: 3,
  ease: "power3.out"
});

/* gsap Gallery */
gsap.from(".splide__left", {
  scrollTrigger: {
    trigger: `.splide__left`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  y: 270,
  duration: 2.5,
  ease: "power2.out"
});

gsap.from(".splide__right", {
  scrollTrigger: {
    trigger: `.splide__right`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  y: -270,
  duration: 2.5,
  ease: "power2.out"
});

/* gsap Contatti */

gsap.from(".contact__right", {
  scrollTrigger: {
    trigger: `.contact__right`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  x: -300,
  duration: 3,
  ease: "power3.out"
});
gsap.from(".contact__left", {
  scrollTrigger: {
    trigger: `.contact__left`,
    toggleActions: `restart none restart none`
  },
  opacity: 0,
  x: 300,
  duration: 3,
  ease: "power3.out"
});



















