import React, { useState, useRef, useEffect } from "react";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import Com from "./Com";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const messageRef = useRef();
  const nameRef = useRef("");

  //Get comments on page load
  useEffect(() => {
    getComments();
  }, []);

  // firebase call to get comments
  function getComments() {
    const querySnapshot = getDocs(collection(db, "commentDB")).then((response) => {
      const r = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setComments(r);
    });
  }
  //add comment to db, call set comments to trigger useEffect, reset button load state
  //clear input fields
  async function addComment(nm, msg) {
    const timestamp = serverTimestamp();

    const docRef = await addDoc(collection(db, "commentDB"), {
      name: nm,
      text: msg,
      time: timestamp,
      likes: 0,
    });

    setLoading(false);
    getComments();

    messageRef.current.value = "";
  }

  //render component
  return (
    <div className='flex justify-center '>
      <div className='commentBox rounded-2xl bg-gray-200 shadow-inner w-[75%]  m-8'>
        <div className=' addComment border-b border-purple-800 shadow-xl '>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              if (nameRef.current.value == "" || null) {
                nameRef.current.value = "anon";
                addComment(nameRef.current.value, messageRef.current.value);
              } else addComment(nameRef.current.value, messageRef.current.value);
            }}
            id='commentForm'
            className='flex lg:flex-row flex-col items-center m-2 p-2'
          >
            <div className='titleWrap text-center font-bold bg-slate-400 h-full rounded-lg m-2 p-2'>
              <h2>Leave a Comment!</h2>
              <p>(Hateful comments will be removed)</p>
            </div>
            <label className=' font-medium'>
              Username: <br /> (optional)
            </label>
            <input
              ref={nameRef}
              className=' basis-2/6 border-purple-800 border-2 m-4 rounded-lg w-[80%] p-2'
              type='text'
              id='comment user'
            />
            <label className='font-medium'>Comment:</label>
            <input
              ref={messageRef}
              className=' basis-2/6 border-purple-800 border-2 m-4 rounded-lg w-[80%] p-2'
              type='text'
              id='comment input'
              required={true}
            />
            <button
              className=' border-2 border-purple-800 p-2 m-2 rounded-md hover:bg-purple-800 hover:text-white'
              type='submit'
              disabled={loading}
            >
              {loading == true ? "Loading" : "Submit"}
            </button>
          </form>
        </div>
        <div className='showComments w-full h-[50vh] mb-2 relative bottom-0 overflow-y-scroll'>
          {comments.map((coms) => (
            <Com
              text={coms.data.text}
              name={coms.data.name}
              key={coms.id}
              t={coms.data.time.seconds}
              likes={coms.data.likes}
              id={coms.id}
            />
          ))}
          <div className='test text-center m-6'>
            {comments.length == 0 ? "if you can see this, firebase limit is reached 😅" : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
