import React from "react";
import { TfiTwitter, TfiInstagram, TfiCommentAlt } from "react-icons/tfi";
import { motion } from "framer-motion";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footer-whole bottom-0'>
      <div className='foot container-fluid pt-2 mt-10 '>
        <a href='https://www.twitter.com/xaniven'>
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
        </a>
        <a href='https://www.instagram.com/'>
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
        </a>
        <Link to='/contact'>
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
        </Link>
      </div>
    </div>
  );
}
