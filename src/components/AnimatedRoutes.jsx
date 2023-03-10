import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const loca = useLocation();
  return (
    <AnimatePresence>
      <Routes location={loca} key={loca.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skillz' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
