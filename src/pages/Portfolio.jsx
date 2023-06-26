import React from "react";
import { motion as M } from "framer-motion";

export default function Portfolio() {
  document.title = " I Got Skillz";
  return (
    <M.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: -1 }}
      className='container flex flex-col justify-center items-center rounded-2xl border-slate-900 border-4 bg-gray-400 mt-10 p-10 drop-shadow-xl px-5 min-h-[75vh]'
    >
      <img src='/imgs/npd.jpg' alt='' />

      {/* refactor when finished, do it programticly  */}
      <section className=''>
        <M.details initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <summary className=' text-2xl font-bold underline p-5 marker:text-purple-600'>
            Coursera Certificates 📜:{" "}
          </summary>
          <div className='card-group mt-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-4'>
            <div className=' hover:scale-110 card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='imgs/finished.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] text-sm lg:text-xl text-white font-extrabold'>
                  Meta Front-end Developer
                </p>
              </div>
            </div>
            <div className=' hover:scale-110 card-wrap relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/Coursera.png' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] text-sm lg:text-xl text-white font-extrabold'>
                  Programming With Javascript
                </p>
              </div>
            </div>
            <div className='card-wrap hover:scale-110 relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/Coursera1.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Version Control
                </p>
              </div>
            </div>
            <div className='card-wrap hover:scale-110 relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/Coursera5.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  HTML and CSS in depth
                </p>
              </div>
            </div>
            <div className='card-wrap hover:scale-110 relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/Coursera2.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  React Basics
                </p>
              </div>
            </div>
            <div className='card-wrap hover:scale-110 relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/Coursera4.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Advanced React
                </p>
              </div>
            </div>
            <div className='card-wrap hover:scale-110 relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/Coursera3.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Introduction to Front-End Development
                </p>
              </div>
            </div>
            <div className='card-wrap hover:scale-110 relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/Coursera3.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Principles of UX/UI Design
                </p>
              </div>
            </div>
            <div className='card-wrap hover:scale-110 relative flex justify-center rounded-2xl overflow-hidden max-h-[400px]'>
              <img loading='lazy' className='card' src='/imgs/cps.jpg' alt='' />
              <div className='card-title flex items-center justify-center justify-items-center text-center absolute bottom-0 h-[20%] w-[100%] opacity-50 bg-black '>
                <p className=' opacity-100 bottom-[50%] h-[auto] lg:text-xl text-white font-extrabold'>
                  Front-End Developer Capstone
                </p>
              </div>
            </div>
          </div>
        </M.details>
        <details open>
          <summary className='mt-2 text-2xl font-bold underline p-5 marker:text-purple-600'>
            Web3 Projects 🤖:
          </summary>
          <div className='card-group mt-6 gap-4'>
            <div className='ghWrap min-h-[40vh] gap-4 flex lg:flex-row flex-col '>
              <div className=' lg:w-[60%] lg:mr-5 bg-slate-200 p-8 rounded-xl drop-shadow-lg break-keep'>
                <p>
                  'Andy Chill' is an ERC-1155 project. This project was built as a side project to
                  help build my portfolio. It is based off an idea I got after minting a
                  "Chilmeleon" nft. Discovering NFTs reignited my interest in coding and I soon
                  started learning solidity to quickly realize unless I wanted to audit contracts
                  and stuff I'd need to learn web development too.'
                  <br />
                  <span className='text-center p-2 block'>
                    <span className=' font-bold text-xl'>This Projects Stack:</span>
                    <br />
                    <ul className='underline p-2'>
                      <li>Vite</li>
                      <li>Firebase</li>
                      <li>HardHat</li>
                      <li>Ethers.js</li>
                      <li>OpenZeppelin/Contracts</li>
                      <li>WalletConnect</li>
                      <li>TailwindCSS</li>
                      <li>Framer Motion</li>
                    </ul>
                  </span>
                  <br />
                  Project code can be found on github:{" "}
                  <a
                    className=' text-sky-600 underline hover:text-sky-400'
                    href='https://github.com/Xaniven/andyChill'
                  >
                    {" "}
                    Here
                  </a>
                  <br />
                  The project can be viewed at{" "}
                  <a
                    className=' text-sky-600 underline hover:text-sky-400'
                    href='https://andychill.art'
                  >
                    {" "}
                    andychill.art
                  </a>
                </p>
              </div>
              <img
                className='lg:w-[40%] h-[20%] rounded-lg'
                src='/imgs/IMG-0179.PNG'
                frameborder='0'
              ></img>
            </div>
          </div>
        </details>
      </section>
    </M.div>
  );
}
