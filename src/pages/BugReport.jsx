import React from "react";
import { addDoc, collection, query } from "firebase/firestore";
import { db } from "../components/firebase";

export default function BugReport({ uid }) {
  const collectionRef = query(collection(db, "bugReport"));

  async function submitBugReport() {}

  const userReportID = window.location.search;
  var result = userReportID.replace(/\?/, "");

  return (
    <div className='container flex flex-col justify-center items-center text-center align-middle rounded-2xl border-slate-900 border-4 lg:mx-[250px] bg-gray-400 mt-10 py-10 drop-shadow-xl h-[69vh] w-full'>
      <div className=' bg-slate-300 lg:h-[40vh] h-full w-[80%] rounded-xl'>
        <form className='flex flex-col justify-evenly h-[100%]'>
          <h1 className=' font-bold text-lg underline underline-offset-2'>
            Is this a bug report or feature suggestion?
          </h1>
          <div className='flex gap-4 self-center text-lg'>
            <label htmlFor='report'>Bug Report</label>
            <input type='radio' name='bugReport' id='report' />
            <label htmlFor='feature'>Feature Request</label>
            <input type='radio' name='bugReport' id='feature' />
          </div>
          <input
            className='min-h-[86px] p-4 w-[75%] self-center rounded-lg  '
            type='text'
            name='bugReport'
            placeholder='Enter text here'
            id='userReport'
          />
          <label htmlFor='userReport'></label>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(result);
            }}
            className='w-[64px] bg-violet-500 p-2 rounded-lg self-center'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
