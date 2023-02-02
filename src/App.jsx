import React, { useState, Suspense } from "react";
import "./App.css";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <AnimatedRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
