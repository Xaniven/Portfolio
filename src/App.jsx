import React, { useState, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Spline from "@splinetool/react-spline";
import { AnimatePresence } from "framer-motion";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <AnimatePresence>
        <Navbar />

        <div className='App'>
          <div className='flex justify-center items-center spWrap w-[75vw] mt-2'>
            <Spline
              className='w-[250px]'
              scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode'
            />
          </div>
          <About />
          <Contact />
          <Portfolio />
        </div>

        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
