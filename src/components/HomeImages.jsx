import React, { useEffect, useState } from "react";
import img1 from "../imgs/IMG-0430.png";
import img2 from "../imgs/IMG-0429.png";
import img3 from "../imgs/IMG-0423.png";
import img4 from "../imgs/IMG-0424.png";
import img5 from "../imgs/IMG-0425.png";
import img6 from "../imgs/IMG-0427.png";
import img7 from "../imgs/IMG-0420.png";
import img8 from "../imgs/IMG-0435.png";

const heroImgArray = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function HomeImages() {
  const [imgIndex, setImgIndex] = useState(Math.floor(Math.random() * heroImgArray.length));

  function getRando() {
    let hold = Math.floor(Math.random() * heroImgArray.length);
    if (imgIndex === hold) {
      getRando();
    } else {
      setImgIndex(hold);
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={heroImgArray[imgIndex]} alt='' />
      <button
        onClick={() => getRando()}
        className=' bg-white hover:bg-purple-800 rounded-2xl border-black border-2 p-2 w-[50%] mt-5'
      >
        Change Greeting
      </button>
    </div>
  );
}
