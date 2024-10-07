import React from 'react';
import '../index.css';
import navLogo from '../assets/Image/ciitm-logo.png';
import '../App.css';

function NavBar() {
  return (
    <nav className="w-full flex flex-col bg-white h-[40vh]">
      {/* News Navigation Section */}
      <div className="h-[15%] flex justify-between w-full">
        <div className="h-full w-[25%] bg-[#ca336b]"></div>
        <div className="h-full w-[25%] bg-[#ca336b]"></div>
      </div>

      {/* About School Section */}
      <div className="h-[65%] w-full flex justify-center items-center">
        <div className="w-[20%] flex items-center justify-end h-full">
          <img
            src={navLogo}
            alt="School Logo"
            className="w-[60%] h-[80%] object-contain"
          />
        </div>

        <div className="w-[60%] flex flex-col text-center items-center justify-center h-full">
          <div className="text-2xl">Chhotanagpur IT & Management</div>
          <div className="font-light text-xl">
            <h2>Suriya Road, Jharkhand</h2>
            <h2>Pin Code 57242</h2>
          </div>
        </div>

        <div className="w-[20%] h-full bg-blue-500"></div>
      </div>

      {/* Menu Section */}
      <div className="flex text-white w-full h-[20%] items-center justify-around border-b border-black bg-[#28166f] p-0">
        <ol className="flex gap-[65px] h-full text-lg font-normal mr-[18vw]  items-center">
          <li className="nav-link">
            <a href="/">Hero</a>
          </li>
          <li className="nav-link">
            <a href="/about">About Us</a>
          </li>
          <li className="nav-link">Admissions:</li>
          <li className="nav-link">Academics</li>
          <li className="nav-link">Student Life</li>
          <li className="nav-link">
            <a href="/contact">Contact Us</a>
          </li>
        </ol>

        <div className="login-btn">
          <a href="/auth/google/">
            <button
              id="login_btn"
              className="px-[45px] py-[12px] border-none rounded-[35px] text-white bg-[#db2d1c] text-lg"
            >
              Login
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
