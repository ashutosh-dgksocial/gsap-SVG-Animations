import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 




export default function App() {
  const container = useRef();
  const circle = useRef();
  const square = useRef();

  useGSAP(() => {
    // gsap code here...
    gsap.to(square.current, { rotate: 360, repeat: -1, ease: 'none' }); // <-- automatically reverted
  }, { scope: container }); // <-- scope is for selector text (optional)



  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center mb-10">
        MAKE A SQUARE CIRLCE AND A SQUIRE
      </h1>
      {/* main box */}
      <section className="flex gap-5 justify-center ">

        <div className="border bottom-2 p-10 flex gap-5 flex-col ">
          <div className="circle w-[200px] h-[200px] rounded-full bg-red-500 flex justify-center items-center">circle</div>
          <div className=" w-[200px] h-[200px] bg-blue-500 flex justify-center items-center">square</div>
        </div>
        {/* main body */}
        <div ref={container} className=" container border bottom-2 p-10 flex gap-5 flex-col ">
          {/* circle */}
          <div ref={circle} className=" w-[200px] h-[200px] rounded-full bg-red-500 flex justify-center items-center ">circle</div>
          {/* square */}

          <div ref={square} className=" w-[200px] h-[200px] bg-blue-500 flex justify-center items-center">square</div>
        </div>
      </section>
      <section></section>
    </div>
  )
}