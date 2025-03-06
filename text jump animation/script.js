let demo = document.querySelector("#demo");

function splitText() {
  let mytext = demo.innerText;
  let textSplit = mytext.split("");

  let halfText = Math.floor(textSplit.length / 2)

  let emptyStr = "";

  textSplit.forEach((item, index) => {
    if (index < halfText) {
      emptyStr += `<span class="a">${item}</span>`;

    } else {
      emptyStr += `<span class="b">${item}</span>`;
    }

  });
  demo.innerHTML = emptyStr;
}

splitText();

gsap.from("#demo .a", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.15,
  ease: "linear"

})
gsap.from("#demo .b", {
  y: 70,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.15,
  ease: "linear"
})
// gsap.from("#demo span", {
//   y: 70,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.5,
//   stagger: 0.15

//   // rotate: 3039,
//   // repeat: -1,
//   // ease : "linear"
// })