import React, { useState, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Skillscroll from "./components/Skillscroll";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <h1>
            Loading... Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vitae
            provident asperiores perferendis sint sunt possimus magni libero delectus in nulla, iste
            molestias reprehenderit placeat cum labore tempore? Quis, odio!{" "}
          </h1>
        }
      >
        <div className='App '>
          <div className='spWrap mx-10'>
            <Skillscroll />
            {/* <Spline scene='https://prod.spline.design/HGoqdPfSiSFgN1L2/scene.splinecode' /> */}
          </div>
        </div>
      </Suspense>
      ;
    </>
  );
}

export default App;
