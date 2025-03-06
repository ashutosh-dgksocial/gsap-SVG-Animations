let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image_img = document.querySelector("#image img");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out(1.7)",
  });
});
image_img.addEventListener("mouseenter", function () {
  cursor.innerText = "add more";
  gsap.to(cursor, {
    scale: 4,
  });
});
image_img.addEventListener("mouseleave", function () {
  cursor.innerText = null;
  gsap.to(cursor, {
    scale: 1,
  });
});
