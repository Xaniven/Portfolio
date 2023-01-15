import React from "react";
import { motion as M } from "framer-motion";

export default function Portfolio() {
  return (
    <M.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      className='container flex flex-col justify-center items-center rounded-2xl border-slate-900 border-4 bg-gray-400 mt-10 p-10 drop-shadow-xl px-5'
    ></M.div>
  );
}
