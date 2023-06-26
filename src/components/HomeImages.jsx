import React, { useEffect, useState } from "react";

const heroImgArray = [
  "/imgs/IMG-0430.PNG",
  "/imgs/IMG-0429.PNG",
  "/imgs/IMG-0423.PNG",
  "/imgs/IMG-0424.PNG",
  "/imgs/IMG-0425.PNG",
  "/imgs/IMG-0427.PNG",
  "/imgs/IMG-0420.PNG",
  "/imgs/IMG-0435.PNG",
  "/imgs/IMG-0426.PNG",
];

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
        🔀 Random
      </button>
    </div>
  );
}
