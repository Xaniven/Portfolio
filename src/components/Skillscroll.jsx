import React from "react";
import "./Skillscroll.scss";
import img1 from "../imgs/bootstrap-logo.svg";
import img2 from "../imgs/logo-logomark.svg";
import img3 from "../imgs/React-icon.svg";
import img4 from "../imgs/tailwindcss.svg";
import img5 from "../imgs/js.svg";
import img6 from "../imgs/framer.svg";

export default function Skillscroll() {
  return (
    <div>
      <div class='slider'>
        <div class='slide-track'>
          <div class='slide mx-20 my-10'>
            <img src={img1} height='200px' width={1080 / 6} />
            <p>BootStrap5</p>
          </div>
          <div class='slide mx-20 my-10'>
            <img src={img2} height='200px' width={1080 / 6} alt='' />
            <p>Firebase</p>
          </div>
          <div class='slide mx-20 my-10'>
            <img src={img3} height='200px' width={1080 / 6} alt='' />
            <p>React</p>
          </div>
          <div class='slide mx-20 my-10'>
            <img src={img4} height='200px' width={1080 / 6} alt='' />
            <p>TailwindCss</p>
          </div>
          <div class='slide mx-20 my-10'>
            <img src={img5} height='200px' width={1080 / 6} alt='' />
            <p>Javascript</p>
          </div>
          <div class='slide mx-20 my-10'>
            <img src={img6} height='200px' width={1080 / 6} alt='' />
            <p>FramerMotion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
