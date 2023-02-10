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
        {/* <Spline scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode' /> */}
      </div>
    );
  } else if (dEnabled === false) {
    return (
      <div className='flex flex-col gap-8 m-10 w-[100%]'>
        <h1 className=' text-center font-extrabold text-2xl'>Best Hero Section Ever</h1>
        <div className='homeWrap flex lg:flex-row flex-col-reverse h-[100%] gap-6 m-8 '>
          <div className=' h-auto text-center textSection basis-2/3 bg-slate-200 p-4 rounded-xl drop-shadow-lg break-keep'>
            Hey, Hi, Hello, <br />
            Welcome to my website! ✨ <br /> HTML & CSS are the best programming languages, JS is
            for nerdz 😎 <br /> /s
          </div>
          <div className=' h-[100%] imgSection basis-1/3'>
            <HomeImages />
          </div>
        </div>
        <div className='commentWrap'>
          <h2 className=' text-center font-extrabold text-2xl'>Comment Section</h2>
          <CommentSection />
        </div>
      </div>
    );
  }
}
