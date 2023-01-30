import React from "react";
import { TfiTwitter, TfiInstagram, TfiCommentAlt } from "react-icons/tfi";
import { motion } from "framer-motion";
import "./footer.scss";

export default function Footer() {
  return (
    <div className='footer-whole bottom-0'>
      <div className='foot container-fluid pt-2 mt-10 '>
        <motion.div
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: -1 }}
          whileInView={{ opacity: 1 }}
          className='buttonWrap p-2'
        >
          <div className='imgWrap'>
            <TfiTwitter />
          </div>
          <h5>Twitter</h5>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: -1 }}
          whileInView={{ opacity: 1 }}
          className='buttonWrap p-2'
        >
          <div className='imgWrap'>
            <TfiInstagram />
          </div>
          <h5>Instagram</h5>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          initial={{ opacity: -1 }}
          whileInView={{ opacity: 1 }}
          className='buttonWrap p-2'
        >
          <div className='imgWrap'>
            <TfiCommentAlt />
          </div>
          <h5>Contact Me </h5>
        </motion.div>
      </div>
    </div>
  );
}
