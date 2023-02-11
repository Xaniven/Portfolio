import React from "react";

export default function Com(props) {
  return (
    <div className=' flex m-6 border-b-2 shadow-lg min-h-[10vh]  '>
      <h2 className=' bg-gray-400 text-center p-2 border-2 border-purple-800 basis-1/12 min-w-[25%]'>
        From: {props.name} <div className=''> Created at:{props.timestamp} </div>
      </h2>
      <div className=' rounded-lg p-5 basis-11/12 bg-gray-300'>
        Comment: <p className=''>{props.text}</p>
      </div>
    </div>
  );
}
