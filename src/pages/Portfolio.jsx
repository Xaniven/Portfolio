import React from "react";
import { motion as M } from "framer-motion";
import pdf1 from "../imgs/Coursera.png";
import npd from "../imgs/npd.jpg";
import "../pages/Port.scss";

document.title = " I Got Skillz";
export default function Portfolio() {
  return (
    <M.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      className='container flex flex-col justify-center items-center rounded-2xl border-slate-900 border-4 bg-gray-400 mt-10 p-10 drop-shadow-xl px-5 min-h-[75vh]'
    >
      <h1 className=' font-bold text-2xl mb-5'>Things i've worked on:</h1>
      <img src={npd} alt='' />
      <section className=''>
        <M.details initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} open>
          <summary className=' text-2xl font-bold underline p-5 marker:text-white'>
            Coursera Certificates 📜:{" "}
          </summary>
          <div className='card-group grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-4'>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' absolute bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Programming With Javascript
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' absolute bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Programming With Javascript
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' absolute bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Programming With Javascript
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' absolute bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Programming With Javascript
                </p>
              </div>
            </div>
            <div className='card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img className='card' src={pdf1} alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' absolute bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Programming With Javascript
                </p>
              </div>
            </div>
          </div>
        </M.details>
        <details>
          <summary className=' text-2xl font-bold underline p-5 marker:text-white'>
            Github Projects 🤖:
          </summary>
        </details>
      </section>
    </M.div>
  );
}
