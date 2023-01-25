import React, { useState, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { AnimatePresence } from "framer-motion";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <AnimatePresence initial={true} exitBeforeEnter={true} onExitComplete={() => null}>
        <Navbar />

        <div className='App'>
          <Portfolio />
          <Home />
          <About />
          <Contact />
        </div>

        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
