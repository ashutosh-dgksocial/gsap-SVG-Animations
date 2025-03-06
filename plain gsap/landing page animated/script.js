function gsapAnimation() {

  let tl = gsap.timeline();

  tl.from("nav h1,  nav li, nav button", {
    // rotate: 360,
    opacity: 0,
    duration: 0.4,
    delay: 1,
    y: -25,
    stagger: .2,
    ease: 'linear'
  });
  tl.from(".hero .left-box h1", {
    opacity: 0,
    duration: 0.5,
    x: -100,
    ease: 'linear',
  }, '-=0.3');
  tl.from(".hero .left-box p", {
    opacity: 0,
    duration: 0.5,
    x: -50,
    ease: 'linear',
  },);
  tl.from(".hero .left-box button", {
    opacity: 0,
    duration: 0.5,
    x: -50,
    ease: 'linear',
  },);
  tl.from(".hero .right-box img", {
    x: 50,
    opacity: 0,
    duration: 0.5,
    ease: 'linear',

  }, "-=2");
  tl.from(".partners .partner-card", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    ease: 'linear',
    stagger: 0.2,

  },);

}
// first flow
gsapAnimation();

function gsapScrollerAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      scroller: "body",
      start: "top 80%",
      end: "bottom top",
      scrub: 1,
      // markers: true,
    }
  });
  tl2.from('.services', {
    x: -20,
    opacity: 0,
    delay: 1,
  })
  tl2.from('#c_1', {
    x: -300,
    opacity: 0,
    duration: 2,
    delay: 1,
  }, 'sath_me_chal')
  tl2.from('#c_2', {
    x: 300,
    opacity: 0,
    duration: 2,
    delay: 1,
  }, 'sath_me_chal')
  tl2.from('#c_3', {
    x: -300,
    opacity: 0,
    duration: 2,
    delay: 1,
  }, 'chalega_ha')
  tl2.from('#c_4', {
    x: 300,
    opacity: 0,
    duration: 2,
    delay: 1,
  }, 'chalega_ha')
}
// second flow

gsapScrollerAnimation();
