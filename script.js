gsap.registerPlugin(ScrollTrigger);

gsap.from("#logo h1", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from("#what-is-creo h2", {
  scrollTrigger: "#what-is-creo",
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from("#agency p", {
  scrollTrigger: "#what-is-creo",
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power2.out",
});

gsap.fromTo(
  "#line",
  { height: 0 },
  {
    height: "750px",
    duration: 3.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#line-animation-section",
      start: "top 5%",
      toggleActions: "play none none none",
    },
  }
);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#line1",
    start: "top 5%",
    toggleActions: "play none none none",
  },
});

tl.fromTo(
  "#line1",
  { width: 0 },
  { width: "300px", duration: 1, ease: "power2.out" }
)
  .fromTo(
    "#line2",
    { height: 0 },
    { height: "925px", duration: 1.5, ease: "power2.out" },
    "+=0.5"
  )
  .fromTo(
    "#line3",
    { width: 0 },
    { width: "300px", duration: 1, ease: "power2.out" },
    "+=0.5"
  );

gsap.fromTo(
  "#rethink-text",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#rethink-text",
      start: "top 75%",
      toggleActions: "play none none none",
    },
  }
);

gsap.fromTo(
  "#line4",
  { height: 0 },
  {
    height: "450px",
    duration: 3.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#line4-section",
      start: "top 5%",
      toggleActions: "play none none none",
    },
  }
);

gsap.fromTo(
  "#line5",
  { height: 0 },
  {
    height: "350px",
    duration: 3.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#line5-section",
      start: "top 5%",
      toggleActions: "play none none none",
    },
  }
);

gsap.utils.toArray("#text-sections > div").forEach((section, index) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
  });
});

gsap.from("#conclusion h2", {
  scrollTrigger: "#conclusion",
  opacity: 0,
  scale: 0.9,
  duration: 1.5,
  ease: "power2.out",
});
