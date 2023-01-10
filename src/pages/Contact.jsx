import React from "react";
import { motion as M } from "framer-motion";

export default function Contact() {
  return (
    <>
      <M.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className='container flex flex-col justify-center items-center rounded-2xl border-slate-900 border-4 bg-gray-400 mt-10 p-10 drop-shadow-xl'
      >
        <h1 className='  text-2xl font-extrabold mb-5 '>Get In Contact!</h1>
        <p className='text-xl font-semibold'>
          Have an idea for a sweet new app? Need a landing page for your brand? What ever it is,
          let's create something cool!
        </p>
        <M.form
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
          className='flex flex-col border-2 border-black justify-center items-center text-center p-5 gap-5 rounded-xl drop-shadow-xl mt-5'
        >
          <label className=' font-medium'>Your Contact E-mail:</label>
          <input
            className='rounded-2xl border-2 border-black p-2 drop-shadow-xl w-60 bg-purple-600'
            type='email'
            name='name'
            placeholder="What's Your Email?"
            required
          />
          <label className='font-medium'>Your Message:</label>
          <input
            className='rounded-2xl border-2 border-black p-2 drop-shadow-xl w-60 bg-purple-600 h-[20vh]'
            type='text'
            name='name'
            placeholder='What do you want to make?!'
            required
          />

          <button
            className='rounded-2xl border-2 border-black p-2 drop-shadow-xl bg-purple-600 w-40 font-bold'
            type='submit'
            value='Submit'
          >
            Submit
          </button>
        </M.form>
      </M.div>
    </>
  );
}
