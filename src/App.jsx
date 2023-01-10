import React, { useState, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  return (
    <>
      <Navbar />

      <div className='App '>
        <div className='spWrap mx-10'>
          {/* <Spline scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode' /> */}
        </div>
        <Contact />
        <About />
      </div>

      <Footer />
    </>
  );
}

export default App;
