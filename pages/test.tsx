import { useElementScroll } from "framer-motion";
import React, { useRef } from "react";

const Test = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useElementScroll(ref);

  console.log("scrollY :>> ", scrollY);
  return (
    <div ref={ref}>
      <div className="h-[20vh] flex justify-center items-center bg-green-500">
        Header
      </div>
      <div className="flex flex-row w-full h-[400vh] bg-blue-200 ">
        <div className="w-1/2 flex justify-center items-center h-screen bg-red-300 sticky top-0">
          About me
        </div>
        <div className="w-1/2 flex flex-col h-full">
          <div className="flex-1 bg-slate-300 flex justify-center items-center">
            Content1
          </div>
          <div className="flex-1 bg-lime-700 flex justify-center items-center">
            Content2
          </div>
          <div className="flex-1 bg-violet-300 flex justify-center items-center">
            Content3
          </div>
          <div className="flex-1 bg-fuchsia-300 flex justify-center items-center">
            Content4
          </div>
        </div>
      </div>
      <div className="h-[20vh] flex justify-center items-center bg-green-500">
        Footer
      </div>
    </div>
  );
};

export default Test;
