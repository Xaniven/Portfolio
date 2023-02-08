import React, { useState, useRef, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Com from "./Com";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const messageRef = useRef("");
  const nameRef = useRef("anon");

  useEffect(() => {
    getComments();
  }, []);

  function getComments() {
    const querySnapshot = getDocs(collection(db, "commentDB")).then((response) => {
      const r = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setComments(r);
    });
  }

  function addComment(nm, msg, e) {
    e.preventDefault();
    addDoc(collection(db, "commentDB"), {
      name: nm,
      text: msg,
    });
  }

  return (
    <div className='flex justify-center '>
      <div className='commentBox rounded-2xl bg-white shadow-inner w-[90%] overflow-y-scroll'>
        <div className=' addComment border-b border-purple-800 shadow-xl '>
          <form className='flex lg:flex-row flex-col items-center m-2 p-2' action=''>
            <div className='titleWrap text-center font-bold bg-slate-400 h-full rounded-lg m-2 p-2'>
              <h2>Leave a Comment!</h2>
              <p>(Hateful comments will be removed )</p>
            </div>
            <label className=' font-medium'>Username:</label>
            <input
              ref={nameRef}
              className=' basis-2/6 border-purple-800 border-2 m-4 rounded-lg w-[80%]'
              type='text'
              name=''
              id=''
            />
            <label className='font-medium'>Message:</label>
            <input
              ref={messageRef}
              className=' basis-2/6 border-purple-800 border-2 m-4 rounded-lg w-[80%]'
              type='text'
              name=''
              id=''
            />
            <button
              className=' border-2 border-purple-800 p-2 m-2 rounded-md hover:bg-purple-800 hover:text-white'
              onClick={() => addComment(nameRef.current.value, messageRef.current.value)}
            >
              Submit
            </button>
          </form>
        </div>
        <div className='showComments w-full h-[30vh] mb-2 relative bottom-0'>
          {comments.map((coms) => (
            <Com text={coms.data.text} name={coms.data.name} key={coms.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
