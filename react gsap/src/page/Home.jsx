import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Har letter ko span me wrap karna
    const text = textRef.current;
    const letters = text.innerText.split("");
    text.innerHTML = letters.map((letter) => `<span class="letter">${letter}</span>`).join("");

    gsap.from(".letter", {
      opacity: 0,
      x: 100,
      duration: 0.5,
      stagger: 0.1, // Ek ek letter aayega
      ease: "power2.out",
    });

    gsap.to(".square", {
      x: 100,
      duration: 0.5,
      delay: 0.1,
      rotate: 180,
    });
  }, []);

  return (
    <div>
      <h1>GSAP Stagger Effect</h1>
      <div className="flex">
        <p ref={textRef} className="text-[100px]">REGISTER</p>
        <div className="square w-10 h-40 bg-white rounded-full bg-[radial-gradient(at_25%_25%,_white,_#18181b_75%)]"></div>
      </div>
    </div>
  );
};

export default Home;
