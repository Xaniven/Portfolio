import React from "react";
import Skillscroll from "../components/Skillscroll";
import baseImg from "../imgs/IMG-0364.jpg";
import secImg from "../imgs/IMG-0196.jpg";
import { delay, motion as M } from "framer-motion";

import img1 from "../imgs/bootstrap-logo.svg";
import img2 from "../imgs/logo-logomark.svg";
import img3 from "../imgs/React-icon.svg";
import img4 from "../imgs/tailwindcss.svg";
import img5 from "../imgs/js.svg";
import img6 from "../imgs/framer.svg";
import img7 from "../imgs/GraphQL_Logo.svg";
import img8 from "../imgs/Solidity_logo.svg";
import img9 from "../imgs/Nextjs-logo.svg";
import img10 from "../imgs/ts-lettermark-blue.svg";
import img11 from "../imgs/Moralis-LightBG-Logo.svg";
import img12 from "../imgs/Threejs-logo.svg";

document.title = "About Me!";

function About() {
  const sVar = [
    { src: img1, title: "BootStrap5" },
    { src: img2, title: "Firebase" },
    { src: img3, title: "React" },
    { src: img4, title: "TailwindCss" },
    { src: img5, title: "Javascript" },
    { src: img6, title: "FramerMotion" },
  ];

  const sVar2 = [
    { src: img7, title: "GraphQL" },
    { src: img8, title: "Solidity" },
    { src: img9, title: "Next.js" },
    { src: img10, title: "Typescript" },
    { src: img11, title: "Moralis" },
    { src: img12, title: "Three.js" },
  ];

  return (
    <M.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      className='container flex flex-col justify-center justify-items-center align-middle rounded-2xl border-slate-900 border-4 mx-[250px] bg-gray-400 mt-10 py-10 drop-shadow-xl'
    >
      <div className='flex flex-col justify-center items-center text-center gap-5'>
        <div className=' border-slate-900 border-[3px] rounded-[100%] w-80 h-80 overflow-hidden drop-shadow-lg '>
          <img className='object-cover block hover:hidden ' src={baseImg} />
          <img className=' object-cover none hover:block h-[500px] w-[500px]' src={secImg} />
        </div>
        <h1 className=' font-bold text-2xl my-5 '>
          Hi, I'm Kody <br /> (Xaniven.eth){" "}
        </h1>
        <p className='w-[75%] h-[auto] bg-slate-200 p-8 rounded-xl drop-shadow-lg'>
          I'm a 26 y/o self taught front-end web developer, learning full stack development. I am a
          hardworking and driven indivdual.I'm Currently being driven by a passion for 'Web3' &
          Crypto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci aut itaque
          molestiae explicabo asperiores nihil. Enim quibusdam et aliquid incidunt nesciunt quidem.
          Molestiae, impedit tenetur.
        </p>
        <h2 className=' font-bold text-xl '>Here are some things I know: </h2>
        <M.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, when: "beforeChildren" }}
          transition={{ type: "spring", stiffness: 100 }}
          className='w-[100%]'
        >
          <Skillscroll imgArray={sVar} />
        </M.div>

        <h3 className=' font-bold text-xl my-5'> Things I'm learning:</h3>
        {/* spline, three, next, SQL, Solidity, typescript */}
        <M.div
          initial={{ opacity: -1 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
          className='w-[100%]'
        >
          <Skillscroll imgArray={sVar2} />
        </M.div>
      </div>
    </M.div>
  );
}

export default About;
