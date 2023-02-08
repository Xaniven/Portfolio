import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import HomeImages from "../components/HomeImages";
import CommentSection from "../components/CommentSection";

export default function Home() {
  document.title = "Xaniven.eth";

  const [dEnabled, setdEnabled] = useState(false);
  if (dEnabled === true) {
    return (
      <div className='flex justify-center items-center'>
        <Spline scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode' />
      </div>
    );
  } else if (dEnabled === false) {
    return (
      <div className='flex flex-col w-[100%]'>
        <div className='homeWrap flex  h-[100%] gap-6 m-8'>
          <div className=' textSection basis-2/3 bg-slate-200 p-4 rounded-xl drop-shadow-lg break-keep'>
            hi
          </div>
          <div className=' h-[100%] imgSection basis-1/3'>
            <HomeImages />
          </div>
        </div>
        <div className='commentWrap w-[100%]'>
          <CommentSection />
        </div>
      </div>
    );
  }
}
