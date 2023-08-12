import { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Hippiechat() {
  const radioButtons = document.querySelectorAll('input[name="osSelect"]');
  const [userEmail, setUserEmail] = useState("");
  const [done, setDone] = useState(false);

  async function addToBeta(em) {
    let hold = userEmail;
    let os;
    const timestamp = serverTimestamp();
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        os = radioButton.value;
        break;
      }
    }
    try {
      await addDoc(collection(db, "BetaSignup"), {
        email: hold,
        platform: os,
        time: timestamp,
      });
      setDone(true);
    } catch (error) {
      alert(error);
    }
  }

  document.title = "Hippie Chat Beta";
  if (done === false)
    return (
      <div className='container flex flex-col justify-center items-center text-center align-middle rounded-2xl border-slate-900 border-4 lg:mx-[250px] bg-gray-400 mt-10 py-10 drop-shadow-xl h-[69vh] w-full'>
        <div className=' bg-slate-300 lg:h-[40vh] h-full w-[80%] rounded-xl'>
          <h1 className=' font-bold lg:text-3xl p-6'> Hippie Chat Beta Sign-up</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToBeta();
            }}
            className='lg:h-[60%] h-[80%] flex flex-col justify-evenly '
          >
            <label htmlFor='email'>Email:</label>

            <input
              className='lg:w-[30vw] w-[80%] border-2 border-black self-center p-2  rounded-xl'
              type='email'
              name='emailsign'
              id='emailEnter'
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <p className=' text-slate-500'>
              (Must be the email linked to your app store account for your respective platform)
            </p>

            <div className=' lg:mt-4 w-full gap-2'>
              <p>What OS would you like to test?</p>
              <input type='radio' name='osSelect' id='android' value='android' />
              <label htmlFor='android'>Android </label>
              <input type='radio' name='osSelect' id='iOS' value='iOS' />
              <label htmlFor='iOS'> iOS</label>
            </div>

            <button
              type='submit'
              value='submit'
              className=' bg-purple-700 w-fit p-4 self-center rounded-xl text-white '
            >
              Submit
            </button>
          </form>
        </div>
        <p></p>
      </div>
    );
  else
    return (
      <>
        <div className='container flex flex-col justify-center items-center text-center align-middle rounded-2xl border-slate-900 border-4 lg:mx-[250px] bg-gray-400 mt-10 py-10 drop-shadow-xl h-[69vh] w-full'>
          <div className=' bg-slate-300 lg:h-[40vh] h-full w-[80%] rounded-xl text-3xl p-4 '>
            <p className='mt-[10.5%]'>
              Thank you For signing up, you will receive an email when the app is ready to download
              from the App Store!
            </p>
          </div>
        </div>
      </>
    );
}
