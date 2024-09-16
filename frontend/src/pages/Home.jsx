import React, { useState, useEffect } from 'react';

import image1 from '../assets/phone-app.jpeg';
import image2 from '../assets/oldman.jpeg';
import image3 from '../assets/team-image.webp';


import webicon from '../assets/svgs/webicon.svg';
import svg from '../assets/svgs/service-icon-1-2.svg';
import crmicon from '../assets/svgs/crm-icon.svg';
import itsupport from '../assets/svgs/It-support-icon-5-2.svg';
import commerce from '../assets/svgs/commerce.svg';

const images = [
  {
    src: image1, 
    h3: '// Full Cycle Software Development',
    heading: 'From Vision to Reality',
    subheading: 'Empowering Your Ideas with Our Expertise',
    buttonText: 'LEARN MORE',
  },
  {
    src: image2,
    h3: '// We Create Leading Digital Products',
    heading: 'End-to-End Digital Solutions',
    subheading: 'Crafting Innovative Products with Proven Excellence',
    buttonText: 'LEARN MORE',
  },
  {
    src: image3,
    h3: '// Only High Quality Services',
    heading: 'Premier IT Outsourcing',
    subheading: 'Delivering Top-Quality Software Solutions Tailored to You',
    buttonText: 'LEARN MORE',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">

      <section className='relative h-screen overflow-hidden mt-10'>
        <div className="relative w-full h-full">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].heading}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8 space-y-4">
            <h3 className='text-xl text-white'>{images[currentIndex].h3}</h3>
            <h1 className="text-5xl text-white font-bold">{images[currentIndex].heading}</h1>
            <p className="text-lg text-white">{images[currentIndex].subheading}</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              {images[currentIndex].buttonText}
            </button>
          </div>
        </div>

        {/* Image Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl text-blue-600 font-semibold mb-2">What We're Offering</h3>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Dealing in All Professional IT Services
            </h2>
          </div>
          <div>
            <p className="pt-4 text-gray-700">
              One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of hardware, software, networks, and servers.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <img src={svg} alt="Development Icon" className="h-16 w-16" />
            <h2 className="text-xl font-semibold">Development</h2>
            <p className="text-gray-600 text-center">
              Our development is pixel-perfect in all ways.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <img src={webicon} alt="Web Design Icon" className="h-16 w-16" />
            <h2 className="text-xl font-semibold">Web Design</h2>
            <p className="text-gray-600 text-center">
              We create vibrant, intuitive, and minimalist web experiences.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <img src={crmicon} alt="CRM Solutions Icon" className="h-16 w-16" />
            <h2 className="text-xl font-semibold">CRM Solutions</h2>
            <p className="text-gray-600 text-center">
              We enhance customer experiences for success.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <img src={commerce} alt="E-commerce Icon" className="h-16 w-16" />
            <h2 className="text-xl font-semibold">E-commerce</h2>
            <p className="text-gray-600 text-center">
              We have the best team for your shopping websites.
            </p>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <img src={itsupport} alt="IT Support Icon" className="h-16 w-16" />
            <h2 className="text-xl font-semibold">IT Support</h2>
            <p className="text-gray-600 text-center">
              We offer expert assistance for your IT issues.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
