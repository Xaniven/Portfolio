import React from "react";
import "./Skillscroll.scss";

export default function Skillscroll({ imgArray }) {
  return (
    <div className='container'>
      <div className='slider'>
        <div className='slide-track'>
          {imgArray.map((data, i) => {
            return (
              <div key={i} className='slide'>
                <img
                  className=' hover:animate-pulse hover:animate-bounce'
                  src={data.src}
                  width={1080 / 6}
                />
                <p>{data.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// old static implimentaion
{
  /* 
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
          </div> */
}
