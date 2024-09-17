import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FadeUp, FadeRight } from '../utility/Animation';

const projects = [
  {
    title: 'Africare',
    category: 'Mechanical/Electrical',
    image: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    title: 'The Pathology Network',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  },
  {
    title: 'Tracy Wanjiru',
    category: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  },
  {
    title: 'Restaurant',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  },
];

const Portfolio = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const bannerRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = bannerRef.current?.offsetHeight || 0;
      const scrollPosition = window.scrollY;
      setIsBannerVisible(scrollPosition < bannerHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className={`fixed top-0 left-0 w-full  h-[70vh] text-white flex opacity:70 flex-col justify-between transition-opacity duration-700 ease-in-out ${isBannerVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'url("https://media.istockphoto.com/id/1702810427/photo/wave-of-musical-sounds-abstract-background-with-interweaving-of-dots-and-lines-3d-rendering.jpg?s=612x612&w=0&k=20&c=GL6r9Cb-UL_5YYUHVev8KMEZR3pEVMCrwYtaPNznTNo=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <nav className="w-full flex items-center justify-between mx-12 mt-12 p-6">
          <motion.div
            variants={FadeUp(0.5)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
           // Marps-Africa
          </motion.div>
        </nav>

        {/* Banner */}
        <div className="flex flex-col items-center justify-center text-center mx-auto my-auto px-4">
          <motion.h1 
            variants={FadeUp(0.5)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="font-bold"
            style={{ fontSize: 'clamp(2rem, 5vw, 6rem)' }}
          >
            Marps-Africa Portfolio
          </motion.h1>
          <motion.p 
            variants={FadeUp(0.6)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="mt-4"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }} 
          >
            Here's what we have done.
          </motion.p>
        </div>
      </div>

      {/* Projects */}
      <section ref={projectsRef} className="text-white py-16 relative mt-[100vh]">
        <div className="container mx-auto">
          <motion.h2
            variants={FadeUp(1.2)}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="font-bold opacity-20 shadow relative z-10"
            style={{
              WebkitTextStroke: '3px black', 
              color: 'white',
              textShadow: '0 0 4px black',
              fontSize: 'clamp(2rem, 10vw, 8rem)' 
            }}
          >
            Portfolio
          </motion.h2>

          <hr className='mb-10 opacity-20' />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeRight delay={0.2 * index} key={index}>
                <div className="relative group overflow-hidden border-2 border-gray-700 rounded-lg transition-all duration-300 hover:border-4 hover:border-blue-500">
                  <img
                    src={project.image}
                    alt={`Image of ${project.title} project in ${project.category} category`}
                    className="object-cover select-none w-full h-auto rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div>
                      <h3 className="font-bold text-white" style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}>{project.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-300">{project.category}</p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white border-2 border-blue-500 rounded-full bg-transparent group hover:bg-blue-600 hover:text-white transition-all duration-300"
                      >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="relative text-sm">Explore</span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeRight>
            ))}
          </div>
          </div>
      </section>
    </>
  );
};

export default Portfolio;
