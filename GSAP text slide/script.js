document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from("#page-2 h1", {
      x: "-100%",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page-2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "bottom 0%",
        scrub: 2,
        // Removed pin: true
      }
    });
  });
  