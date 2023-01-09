import React from "react";

export default function Contact() {
  return (
    <>
      <div className='container flex flex-col justify-center items-center rounded-2xl border-slate-900 border-3 bg-white mt-10 p-10 drop-shadow-xl'>
        <form className='flex flex-col border-2 border-black justify-center items-center text-center p-5 gap-5 rounded-xl drop-shadow-xl'>
          <label>Your Contact E-mail:</label>
          <input
            className='rounded-2xl border-2 border-black p-2 drop-shadow-xl w-60 bg-red-600 '
            type='email'
            name='name'
            placeholder='Hello'
            required
          />
          <label>Your Message:</label>
          <input
            className='rounded-2xl border-2 border-black p-2 drop-shadow-xl w-60 bg-red-600 h-[20vh]'
            type='text'
            name='name'
            placeholder='Hello'
            required
          />

          <button
            className='rounded-2xl border-2 border-black p-2 drop-shadow-xl bg-red-600 w-40'
            type='submit'
            value='Submit'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
