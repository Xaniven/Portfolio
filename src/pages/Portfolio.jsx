import React from "react";
import { motion as M } from "framer-motion";
import pdf1 from "../imgs/Coursera.png";
import npd from "../imgs/npd.jpg";
import "../pages/Port.scss";

export default function Portfolio() {
  document.title = " I Got Skillz";
  return (
    <M.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ type: "spring", stiffness: 200 }}
      className='container flex flex-col justify-center items-center rounded-2xl border-slate-900 border-4 bg-gray-400 mt-10 p-10 drop-shadow-xl px-5 min-h-[75vh]'
    >
      <h1 className=' font-bold text-2xl mb-5'>Things I've worked on:</h1>
      <img src={npd} alt='' />
      <section className=''>
        <M.details initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} open>
          <summary className=' text-2xl font-bold underline p-5 marker:text-white'>
            Coursera Certificates 📜:{" "}
          </summary>
          <div className='card-group mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-4'>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Programming With Javascript
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Version Control
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  HTML and CSS in depth
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  React Basics
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Introduction to Front-End Development
                </p>
              </div>
            </div>
          </div>
        </M.details>
        <details>
          <summary className='mt-2 text-2xl font-bold underline p-5 marker:text-white'>
            Github Projects 🤖:
          </summary>
          <div className='card-group mt-6 gap-4'>
            <div className='ghWrap min-h-[40vh] gap-4 flex lg:flex-row flex-col '>
              <div className=' lg:w-[60%] lg:mr-5 bg-slate-200 p-8 rounded-xl drop-shadow-lg break-keep'>
                <p>
                  I'm currently working on building a E-commernce site using Square Web Payments
                  API. I have a CBD side project i'm working on and the commonly used Stripe API
                  doesn't allow anything CBD related. I plan on releasing this as an open source
                  template that others who have the same issue with Stripe that I did, after a lot
                  of refactoring and a rebuild using tailwind instead of bootstrap. Note: in it's
                  current state this is just me working to get a working prototype ASAP, I know the
                  code is kind of ugly 😅
                </p>
              </div>
              <iframe
                className='lg:w-[40%] rounded-lg'
                src='https://xaniven.github.io/firebase-practice/'
                frameborder='0'
              ></iframe>
            </div>
          </div>
        </details>
      </section>
    </M.div>
  );
}
