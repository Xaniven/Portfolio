import { useState } from "react";
import "../components/Navbar.scss";
import { Link as Link } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between border-b border-gray-400 py-8 mx-3'>
      <a href='/'>
        <p className='lgWrap text-2xl ml-5 '>
          <span className='lgSpan'>Hi, I'm Kody! 🙋🏽‍♂️</span>
        </p>
      </a>
      <div>
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2 mr-5'
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-800'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-800'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-800'></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className='absolute top-0 right-0 px-8 py-8' onClick={() => setIsNavOpen(false)}>
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='flex flex-col items-center justify-between min-h-[250px]'>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a to='/about'>
                  <span className='hover:bg-purple-800 p-2 rounded-lg'>About Me! 🧙🏽‍♂️</span>
                </a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a to='/skillz'>
                  <span className='hover:bg-purple-800 p-2 rounded-lg'>Portfolio 💼</span>
                </a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a to='/contact'>
                  <span className='hover:bg-purple-800 p-2 rounded-lg'> Contact 📱</span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className='DESKTOP-MENU hidden space-x-8 lg:flex mr-5'>
          <li>
            <Link to='/about'>
              <button className='contact-button bg-white hover:bg-purple-800 rounded-2xl border-black border-2 p-2'>
                About Me! 🧙🏽‍♂️
              </button>{" "}
            </Link>
          </li>
          <li>
            <a to='/skillz'>
              <button className='contact-button bg-white hover:bg-purple-800 rounded-2xl border-black border-2 p-2'>
                Portfolio 💼
              </button>
            </a>
          </li>
          <li>
            <a to='/contact'>
              <button className='contact-button bg-white hover:bg-purple-800 rounded-2xl border-black border-2 p-2'>
                Contact 📱
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
