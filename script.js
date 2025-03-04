const initialPath = `M 10 100 Q 500 100 990 100`;

const string = document.querySelector(`#string`);
const svg = document.querySelector("svg path");

string.addEventListener("mousemove", function (event) {
    let newPath = `M 10 100 Q ${event.x} ${event.y} 990 100`;

    gsap.to(svg, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power2.out"
    });

});

string.addEventListener("mouseleave", function () {
    gsap.to(svg, {
        attr: { d: initialPath },
        duration: 0.3,
        ease: "elastic.out(1,0.2)",
    });

});
