import { useEffect } from 'react';
import ciitmImage from '../assets/Image/ciitm-image.png';
import Typed from 'typed.js';

const HeroSection = () => {
  useEffect(() => {
    const options = {
      strings: [
        '<b>BCA Program 💻</b> ',
        '<b>MCA Program 🖥️</b> ',
        '<b>MBA Program 🎓</b> ',
        '<b>BBA Program 📈</b> ',
      ],
      smartBackspace: true,
      loop: true,
    };

    const typed = new Typed('#typed', options);

    return () => {
      typed.destroy(); // Clean up on component unmount
    };
  }, []);

  return (
    <section className="flex h-screen w-full Hero-page1">
      {/* Left Content */}
      <div className="Hero-page1-left flex items-center justify-center p-20 w-1/2">
        <div className="page1-left-text-content">
          <h1 className="text-4xl font-extrabold">
            Welcome to <span className="  text-blue-900">CIITM</span>
          </h1>
          <h2 className=" font-bold mt-2 text-4xl">
            We offer <span id="typed" className=" text-blue-900"></span>
          </h2>
          <p className="mt-4 text-gray-600 text-md">
            At Chhotanagpur Institute of Information Technology & Management
            (CIITM) Dhanbad, we're dedicated to setting you up for career
            success! 🚀 Our IT and management courses provide hands-on
            experience with cutting-edge technology in our state-of-the-art
            computer labs. 💻 You’ll dive into real-world IT projects and
            develop essential skills in coding and data analysis. 📊 Our
            programs combine technology-focused education with career-ready
            training to help you excel professionally. Join us at CIITM to gain
            the practical experience you need and tackle exciting challenges in
            your career! 🌟
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-4 py-2 rounded">
              Sign Up
            </button>
            <button className="bg-white text-black px-4 py-2 rounded shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="Hero-page1-right flex items-center justify-center w-2/3 h-full ml-4">
        <img
          src={ciitmImage}
          alt="CIITM Campus"
          className="w-full h-1/2 object-contain"
        />
        {/* Uncomment to include additional images in the carousel */}
        {/* 
        <div className="swiper-slide">
          <img src="http://www.ciitm.in/assets/upload/Hero_slider/037423500_1691862442.jpg" alt="Slide Image 1" />
        </div>
        <div className="swiper-slide">
          <img src="https://ciitm.in/assets/upload/Hero_slider/036660800_1716977016.jpeg" alt="Slide Image 2" />
        </div>
        */}
      </div>
    </section>
  );
};

export default HeroSection;
