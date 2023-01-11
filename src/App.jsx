import React, { useState, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Spline from "@splinetool/react-spline";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <Navbar />

        <div className='App'>
          <div className='flex justify-center items-center spWrap w-[75vw] mt-2'>
            {/* <Spline scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode' /> */}
          </div>
          <Contact />
          <About />
        </div>

        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
