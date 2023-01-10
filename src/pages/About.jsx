import React from "react";
import Skillscroll from "../components/Skillscroll";
import baseImg from "../imgs/IMG-0364.jpg";
import secImg from "../imgs/IMG-0196.jpg";
import { motion as M } from "framer-motion";

document.title = "About Me!";

function About() {
  return (
    <>
      <M.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className='container flex flex-col justify-center justify-items-center align-middle rounded-2xl border-slate-900 border-4 bg-gray-400 mt-10 py-10 drop-shadow-xl'
      >
        <div className='flex flex-col justify-center items-center text-center gap-5'>
          <div className=' border-slate-900 border-[3px] rounded-[100%] w-80 h-80 overflow-hidden drop-shadow-lg '>
            <img className='object-cover block hover:hidden ' src={baseImg} />
            <img className=' object-cover none hover:block h-[500px] w-[500px]' src={secImg} />
          </div>
          <h1 className=' font-bold text-2xl my-5 '>Hi, I'm Kody </h1>
          <p className='w-[60%] h-[auto] bg-slate-200 p-8 rounded-xl drop-shadow-lg'>
            I'm a 26 y/o Front-end web developer learning full stack development. I am a hardworking
            and driven indivdual Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            dolor ea, laboriosam iusto esse fugit quaerat doloremque optio aliquam eligendi iste
            eaque ullam quisquam saepe cumque quibusdam debitis nesciunt molestiae, error
            voluptatibus incidunt pariatur magni rerum dolorum? Ipsa incidunt, nemo magnam nesciunt
            hic fuga nisi deserunt quaerat pariatur debitis rerum.{" "}
          </p>
          <h2 className=' font-bold text-xl '>Here are some things I Know: </h2>
          <M.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          >
            <Skillscroll />
          </M.div>

          <h3 className=' font-bold text-xl my-5'> Things I'm learning:</h3>
          <M.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
          >
            <Skillscroll />
          </M.div>
        </div>
      </M.div>
    </>
  );
}

export default About;
