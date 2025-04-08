import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin();

const Home = () => {
  const square = useRef(null);
  const [xValue, setXValue] = useState(0);
  const [rotation, setRotation] = useState(0);

  useGSAP(() => {
    gsap.to(square.current, {
      x: xValue,
      rotate: rotation,
      duration: 1,
      ease: "power2.out",
    });
  }, [xValue, rotation]);

  const handleAnimate = () => {
    setXValue(gsap.utils.random(-500, 500, 100));
    setRotation(gsap.utils.random(-180, 180, 10));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-xl font-bold">Gsap Random Animation</h1>
      <button
        onClick={handleAnimate}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
      >
        Animate
      </button>
      <div
        ref={square}
        className="rounded-full w-48 h-48 flex items-center justify-center bg-gradient-to-r from-white to-gray-800"
      >circle</div>
    </div>
  );
};

export default Home;
