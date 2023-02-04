import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import HomeImages from "../components/HomeImages";

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
      <>
        <div className='homeWrap flex w-[100vw] gap-6 m-10'>
          <div className='textSection basis-2/3 bg-slate-200 p-8 rounded-xl drop-shadow-lg break-keep'></div>
          <div className='imgSection basis-1/3'>
            <HomeImages />
          </div>
        </div>
      </>
    );
  }
}
