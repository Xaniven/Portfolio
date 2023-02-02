import React from "react";
import Spline from "@splinetool/react-spline";
import "../index.css";

export default function Home() {
  document.title = "Xaniven.eth";
  return (
    <div className='flex justify-center items-center'>
      <Spline scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode' />
    </div>
  );
}
