import React from "react";
import { motion as M } from "framer-motion";
import { TfiGithub, TfiTwitterAlt, TfiLinkedin } from "react-icons/tfi";

export default function Contact() {
  document.title = "Get in Touch!";
  return (
    <M.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ type: "spring", stiffness: 100 }}
      className='container flex flex-col justify-center text-center items-center rounded-lg border-slate-900 border-4 bg-gray-400 mt-10 p-10 drop-shadow-xl px-5 w-[100%]'
    >
      <h1 className='  text-2xl font-extrabold mb-5 '>Get In Contact!</h1>
      <p className='text-xl font-semibold mb-4'>
        Have an idea for a sweet new landing page for your brand or need a motivated devloper to
        join your team? Send an E-mail below and lets get started!
      </p>
      <div className='wrapForm flex flex-col justify-center w-[100%] lg:flex-row h-auto'>
        <div className=' w-[100%]'>
          <M.form
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
            className='flex flex-col border-2 border-black items-center p-5 gap-2 rounded-xl drop-shadow-xl mt-5 bg-gray-200 w-[100%] min-h-[500px]'
          >
            <label className=' font-medium'>Your Contact E-mail:</label>
            <input
              className='rounded-lg border-2 border-purple-600 p-2 drop-shadow-xl w-[80%]'
              type='email'
              name='name'
              placeholder="What's Your Email?"
              required
            />
            <label className='font-medium'>Your Message:</label>
            <textarea
              className='rounded-lg border-2 border-purple-600 p-2 drop-shadow-xl pb-40 resize-y w-[80%]'
              type='text'
              name='name'
              placeholder='What do you want to make?!'
              required
            />
            <div className='flex justify-center'>
              <button
                className='rounded-lg border-2 mt-6 border-purple-600 p-2 drop-shadow-xl w-40 font-bold hover:bg-purple-600 hover:border-black'
                type='submit'
                value='Submit'
              >
                Submit
              </button>
            </div>
          </M.form>
        </div>
        <div className=' flex flex-col min-w-[20%]'>
          <h2 className='text-2xl font-extrabold my-5 '>Or Follow Me on:</h2>
          <div className='linkWrap flex flex-row justify-evenly h-[100%]  my-2 gap-10 lg:flex-col'>
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
    </M.div>
  );
}
