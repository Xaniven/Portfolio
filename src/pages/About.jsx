import React from "react";
import { motion as M } from "framer-motion";
import Skillscroll from "../components/Skillscroll";

function About() {
  document.title = "About Me!";
  const sVar = [
    { src: "/imgs/bootstrap-logo.svg", title: "BootStrap5" },
    { src: "/imgs/logo-logomark.svg", title: "Firebase" },
    { src: "/imgs/React-icon.svg", title: "React" },
    { src: "/imgs/tailwindcss.svg", title: "TailwindCss" },
    { src: "/imgs/js.svg", title: "Javascript" },
    { src: "/imgs/framer.svg", title: "FramerMotion" },
  ];

  const sVar2 = [
    { src: "/imgs/GraphQL_Logo.svg", title: "GraphQL" },
    { src: "/imgs/Solidity_logo.svg", title: "Solidity" },
    { src: "/imgs/Nextjs-logo.svg", title: "Next.js" },
    { src: "/imgs/ts-lettermark-blue.svg", title: "Typescript" },
    { src: "/imgs/Moralis-LightBG-Logo.svg", title: "Moralis" },
    { src: "/imgs/Threejs-logo.svg", title: "Three.js" },
  ];

  return (
    <M.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: -1 }}
      className='container flex flex-col justify-center justify-items-center align-middle rounded-2xl border-slate-900 border-4 mx-[250px] bg-gray-400 mt-10 py-10 drop-shadow-xl'
    >
      <div className='flex flex-col justify-center items-center text-center gap-5'>
        <div className=' border-slate-900 border-[3px] rounded-[100%] w-80 h-80 overflow-hidden drop-shadow-lg '>
          <img className='object-cover block hover:hidden ' src='/imgs/IMG-0364.jpg' />
          <img
            className=' object-cover none hover:block h-[500px] w-[500px]'
            src='/imgs/IMG-0196.JPG'
          />
        </div>
        <h1 className=' font-bold text-2xl my-5 '>
          Hi, I'm Kody <br /> (Xaniven.eth){" "}
        </h1>
        <p className='w-[75%] h-[auto] bg-slate-200 p-8 rounded-xl drop-shadow-lg break-keep lg:text-lg font-semibold'>
          I am a self-taught front-end web developer. I'm currently expanding my skillset to become
          a proficient full stack developer. I am a hardworking and driven individual who is
          dedicated to constantly improving my skills and knowledge in the field. I have a passion
          for web3 and crypto and am always looking to stay up to date on the latest advancements in
          the industry. Currently, I am seeking entry-level work or internship opportunities to gain
          more experience to start a career in software development. I believe that the key to
          success as a developer is to never stop learning or growing, and I take this approach to
          heart in everything that I do. I have spent countless hours learning new technologies,
          experimenting with different tools and frameworks, and honing my skills as a developer. I
          am eager to take on new challenges and work with a team of experienced professionals who
          can help me to further advance my skills. My long-term goal is to become a full stack
          developer and I am confident that with my skills and drive, I will be able to make a
          significant impact in the world of web development and help to shape the future of the
          internet.
          <br />
          (Totally didn't have ChatGPT help write this 😉)
        </p>
        <h2 className=' font-bold text-xl '>Here are some things I know already: </h2>
        <M.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, when: "beforeChildren" }}
          transition={{ type: "spring", stiffness: 100 }}
          className='w-[100%]'
        >
          <Skillscroll imgArray={sVar} />
        </M.div>

        <h3 className=' font-bold text-xl my-5'>SOME of the things I'm learning:</h3>
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
