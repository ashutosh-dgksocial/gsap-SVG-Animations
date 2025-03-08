import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Home() {
  const app = useRef(null);
  const circle = useRef(null);

  useEffect(() => {
    gsap.to(app.current, {
      rotate: 360,
      repeat: -1,
    });
    // differenet
 
  }, []);
  gsap.to(circle.current, {
      opacity: 0,
      x: 100,

    });

  return (
    <div className="home-page px-20">
      <div ref={app} className="square w-20 h-20 bg-red-200 text-black">
        Hello World
      </div>
      <br />
      <div ref={circle} className="center rounded-full bg-blue-500 w-28 h-28">
        CIRCLE
      </div>
    </div>
  );
}

export default Home;
