let tl = gsap.timeline({ paused: true });

let burger = document.querySelector("#burger");
let close_ico = document.querySelector("#close_ico");

tl.to("#nav_box", {
  right: 0,
  duration: 0.4,
});

tl.from("#nav_box #navlist p", {
  x: 150,
  duration: 0.4,
  stagger: 0.25,
  opacity: 0
});

tl.from('#close_ico', {
  opacity: 0
});

// Event Listeners
burger.addEventListener('click', function () {
  tl.play();
});

close_ico.addEventListener('click', function () {
  tl.reverse();
});


// burger.addEventListener('click', function () {

//   tl.to("#nav_box", {
//     right: 0,
//     duration: 0.6,
//   });
//   tl.from("#nav_box #navlist p", {
//     x: 150,
//     duration: 0.6,
//     stagger: 0.25,
//     // ease: 'linear',
//     opacity: 0
//   });
//   tl.from('#close_ico', {
//     opacity: 0
//   })

// })
// close_ico.addEventListener('click', function () {
//   tl.to("#nav_box", {
//     right: "-40%",
//     duration: 0.6,
//   });

// })
