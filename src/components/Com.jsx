import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "./firebase";

export default function Com(props) {
  return (
    <div className=' lg:flex m-6 border-b-2 shadow-lg min-h-[10vh]  '>
      <div className='wrap'>
        <h2 className=' bg-gray-400 text-center p-2 border-2 border-purple-800  min-w-[30%] h-[100%]'>
          From: {props.name}
          <br />
          Created at: {new Date(props.t * 1000).toLocaleString()}
        </h2>
      </div>
      <div className=' flex justify-between rounded-lg p-5 basis-10/12 bg-gray-300'>
        <p className=''> {props.text}</p>
        <div className='likeSection flex-col justify-self-end text-center lg:m-4 '>
          <FaArrowUp
            className=' hover:text-purple-600 '
            size='24px'
            onClick={() => {
              updateLike("up");
            }}
          />
          {props.likes}
          <FaArrowDown
            className='hover:text-purple-600 '
            size='24px'
            onClick={() => {
              updateLike("down");
            }}
          />
        </div>
      </div>
    </div>
  );

  async function updateLike(dir) {
    const likeRef = doc(db, "commentDB", props.id);
    try {
      await updateDoc(likeRef, { likes: increment(dir == "up" ? 1 : -1) });
    } catch (error) {
      console.error("Error updating like:", error);
    }
  }
}
