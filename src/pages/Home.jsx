import React from "react";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <div className='flex justify-center items-center sm:overflow-hidden lg:overflow-auto'>
        <Spline scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode' />
      </div>
    </div>
  );
}
