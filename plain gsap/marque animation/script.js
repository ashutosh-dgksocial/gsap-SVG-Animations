window.addEventListener('wheel', function (event) {

    if (event.deltaY > 0) {
        console.log("up")
        gsap.to(".box p", {
            transform: "translateX(-200%)",
            // delay: 1,
            duration: 4,
            repeat: -1,
            ease: "none"

        })
        gsap.to(".arrow", {
            rotate: 180
        })

    } else {
        console.log("down")
        gsap.to(".box p", {
            transform: "translateX(0%)",
            // delay: 1,
            duration: 4,
            repeat: -1,
            ease: "none"
        })
        gsap.to(".arrow", {
            rotate: 0
        })
    }

})
