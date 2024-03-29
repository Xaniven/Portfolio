import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import HomeImages from "../components/HomeImages";
import CommentSection from "../components/CommentSection";
import { motion as M } from "framer-motion";
import { TfiGithub, TfiTwitterAlt, TfiLinkedin } from "react-icons/tfi";

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
      <M.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: -1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className='flex flex-col gap-8 mt-10 w-[100%]  '
      >
        <div className='mb-20 pb-12 '>
          <div className='homeWrap flex lg:flex-row flex-col-reverse h-[100%] gap-6 m-8 '>
            <div className=' h-auto text-center textSection basis-2/3 bg-slate-200 p-6 rounded-xl drop-shadow-lg break-keep text-2xl'>
              <div className=' flex flex-col justify-evenly h-[90%] '>
                <h1 className=' italic font-bold drop-shadow-lg'>
                  {" "}
                  Hey, Hi, Hello, Welcome to my website! ✨
                </h1>
                <br />
                <p className='drop-shadow-lg'>
                  I am a 26/yo developer on the east coast US. I am currently available for hire or
                  contract/freelance work. I can be contacted on any of the platforms below, or via
                  the contact page of this site.
                  <br />
                  Look Forward to hearing from you! 😁
                </p>

                <div className='linkWrap flex flex-row justify-evenly mt-16 bottom-0 gap-10'>
                  <a href='https://twitter.com/Xaniven'>
                    <button className='hover:text-purple-600 hover:animate-bounce focus:animate-ping'>
                      <TfiTwitterAlt size={35} />
                    </button>
                  </a>
                  <a href='https://www.linkedin.com/in/kody-kelley-564510240/'>
                    <button className='hover:text-purple-600 hover:animate-bounce focus:animate-ping'>
                      <TfiLinkedin size={35} />
                    </button>
                  </a>
                  <a href='https://github.com/Xaniven'>
                    <button className='hover:text-purple-600 hover:animate-bounce focus:animate-ping'>
                      <TfiGithub size={35} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className=' h-[100%] imgSection basis-1/3'>
              <HomeImages />
            </div>
          </div>
        </div>
        <div className='spacer border-b border-purple-400 w-[80vw] self-center '></div>
        <div className='commentWrap'>
          <h3 className=' text-center text-gray-50 font-extrabold text-2xl'>
            Leave a Comment, thought, or sh*t post 📈 below!
          </h3>
          <CommentSection />
        </div>
      </M.div>
    );
  }
}
