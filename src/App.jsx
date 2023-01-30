import React, { useState, Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/skillz",
      element: <Portfolio />,
    },
  ]);
  return (
    <>
      <AnimatePresence initial={true} onExitComplete={() => null}>
        <Navbar />
        <div className='App'>
          <RouterProvider router={router} />
        </div>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
