import React from 'react';
import ciitmImage from '../assets/Image/ciitm-image.png'; 

const HeroSection = () => {
  return (
    <section className="flex h-screen  w-full Hero-page1">
      {/* Left Content */}
      <div className="Hero-page1-left flex items-center justify-center  p-20 w-1/2">
        <div className="page1-left-text-content">
          <h1 className="text-4xl font-extrabold">
            Welcome to <span className="text-color-secondary">CIITM</span>
          </h1>
          <h2 className="text-2xl font-bold mt-2">
            We offer <span id="typed" className="text-color-secondary">sf </span>
          </h2>
          <p className="mt-4 text-gray-600">
            At Chhotanagpur Institute of Information Technology & Management (CIITM)
            Dhanbad, we're all about setting you up for career success! 🚀 Our IT
            and management courses are designed to give you hands-on experience with
            the latest technology in our top-notch computer labs. 💻 Here, you’ll
            dive into real-world IT projects and build essential skills in coding
            and data analysis. 📊 Our programs offer a blend of technology-focused
            education and career-ready training to help you excel in the
            professional world. Join us at CIITM to gain the practical experience
            you need and be ready to take on exciting challenges in your career! 🌟
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
            <button className="bg-white text-black px-4 py-2 rounded shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="Hero-page1-right flex items-center justify-center w-2/3 h-full ml-4">
        <img src={ciitmImage} alt="CIITM Campus" className="w-full h-1/2 object-contain" />
        
        {/* Uncomment the following slides to include additional images in the carousel */}
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
