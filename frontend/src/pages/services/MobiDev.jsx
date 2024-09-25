import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceButtons from './ServiceButtons';

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function MobiDev() {
  return (
    <div>
      <ServiceButtons/>
      <div className='grid justify-center p-4 space-y-4 lg:mx-80'>
        <div className='space-y-8 p-10'>
          <FadeInWhenVisible>
            <h2 className='flex justify-center font-semibold text-2xl text-gray-800 py-2'>
              Mobile App Development
            </h2>
          </FadeInWhenVisible>

          {[1, 2, 3, 4, 5].map((index) => (
            <FadeInWhenVisible key={index}>
              <div className='grid lg:grid-cols-2 rounded-lg p-4 gap-16 hover:bg-gray-200'>
                {index % 2 !== 0 ? (
                  <>
                    <motion.img 
                      src={`/src/assets/images/mobidev/image${index}.png`} 
                      alt="" 
                      className='rounded-lg'
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className='grid items-center'>
                      {index === 1 && (
                        <div className="space-y-4">
                          <p>
                            Welcome to <span className="font-bold">MarpsAfrica's Mobile App Development</span> services: Your Gateway to Innovative Mobile Solutions.
                          </p>
                          <p>
                            At MarpsAfrica, we understand that mobile apps are essential for businesses to thrive in today's digital landscape.
                          </p>
                          <p>
                            Our <span className="font-bold">Mission</span> is to create cutting-edge, user-friendly mobile applications that engage users and drive business growth.
                          </p>
                          <p>
                            Our <span className="font-bold">Vision</span> is to be the go-to mobile app development partner for businesses across Africa and beyond.
                          </p>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="space-y-4">
                          <p><span className="font-bold">Expertise in Mobile Technologies</span></p>
                          <p>Our team of skilled mobile app developers is proficient in both iOS and Android platforms.</p>
                          <p>We specialize in native app development, cross-platform solutions, and progressive web apps (PWAs).</p>
                          <p>By leveraging the latest mobile technologies and frameworks, we ensure your app is fast, responsive, and feature-rich.</p>
                          <p>We stay ahead of mobile trends, incorporating emerging technologies like AR, VR, and AI to create innovative mobile experiences.</p>
                        </div>
                      )}
                      {index === 5 && (
                        <div className="space-y-4">
                          <p><span className="font-bold">User-Centric Design</span></p>
                          <p>We believe that great mobile apps start with exceptional user experience (UX) design.</p>
                          <p>Our design team creates intuitive, visually appealing interfaces that engage users and encourage app adoption.</p>
                          <p>We conduct thorough user research and testing to ensure your app meets the needs and preferences of your target audience.</p>
                          <p>Our iterative design process allows for continuous improvement based on user feedback and analytics.</p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className='grid items-center'>
                      {index === 2 && (
                        <div className="space-y-4">
                          <p><span className="font-bold">Our Mobile App Development Process</span></p>
                          <p>We follow a comprehensive, agile development process to bring your mobile app ideas to life.</p>
                          <p>From initial concept and wireframing to development, testing, and deployment, we ensure quality at every stage.</p>
                          <p>Our collaborative approach keeps you involved throughout the development process, ensuring the final product aligns with your vision.</p>
                          <p>We provide ongoing support and maintenance to keep your app running smoothly and up-to-date with the latest OS versions.</p>
                        </div>
                      )}
                      {index === 4 && (
                        <div className="space-y-4">
                          <p><span className="font-bold">Mobile App Security and Performance</span></p>
                          <p>Security is paramount in mobile app development, and we implement robust measures to protect user data.</p>
                          <p>Our apps are optimized for performance, ensuring fast load times and smooth operation across various devices.</p>
                          <p>We conduct rigorous testing, including security audits and performance benchmarks, to deliver a reliable product.</p>
                          <p>Our team stays updated on the latest mobile security best practices to keep your app protected against evolving threats.</p>
                        </div>
                      )}
                    </div>
                    <motion.img 
                      src={`/src/assets/images/mobidev/image${index}.png`} 
                      alt="" 
                      className='rounded-lg'
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </>
                )}
              </div>
            </FadeInWhenVisible>
          ))}

          <FadeInWhenVisible>
            <div className="space-y-4 pt-4">
              <p>
                <span className="font-bold">Transform Your Business with Mobile Innovation</span>
              </p>
              <p>
                In today's mobile-first world, a powerful app can be a game-changer for your business. At MarpsAfrica, we're passionate about creating mobile solutions that not only meet your current needs but also position you for future success.
              </p>
              <p>
                Whether you're a startup looking to launch your first app or an established company seeking to enhance your mobile presence, we have the expertise to bring your vision to life.
              </p>
              <p>
                Let's collaborate to create a mobile app that sets you apart in the competitive digital landscape. With MarpsAfrica as your mobile app development partner, you're choosing innovation, quality, and a commitment to your success.
              </p>
              <p>
                Ready to start your mobile app journey? Let's turn your ideas into reality.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
        <FadeInWhenVisible>
          <div className='flex justify-end'>
            <NavLink
              to="/appoitment"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Book Appointment
            </NavLink>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}