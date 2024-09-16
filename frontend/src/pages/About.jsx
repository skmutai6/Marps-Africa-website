import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-11/12 max-w-4xl transform transition-transform duration-500 ">
        <h1 className="text-4xl  font-bold text-center mb-6">About Us</h1>
        
        <p className="text-lg  leading-relaxed mb-6">
          At <strong>MarpsAfrica</strong>, we are passionate about technology and innovation. We believe in building solutions that not only meet today’s needs but anticipate the challenges of tomorrow. 
        </p>

        <section className="mb-8">
          <h2 className="text-3xl  font-semibold mb-4">Our Mission</h2>
          <p className="text-lg  leading-relaxed">
            To create transformative technology that empowers businesses and individuals to achieve more. We strive to provide innovative and scalable solutions that push the boundaries of what’s possible in the tech world.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl  font-semibold mb-4">Our Vision</h2>
          <p className="text-lg  leading-relaxed">
            We envision a future where technology seamlessly integrates into every aspect of life, improving the quality of experiences, and simplifying complex problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl  font-semibold mb-4">Our Values</h2>
          <ul className="text-lg  leading-relaxed list-disc list-inside space-y-2">
            <li><strong>Innovation:</strong> Groundbreaking solutions that challenge the status quo.</li>
            <li><strong>Integrity:</strong> Trust and transparency in all relationships.</li>
            <li><strong>Customer-Centric:</strong> We listen and innovate for the customer.</li>
            <li><strong>Collaboration:</strong> Ideas thrive through teamwork and cooperation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl  font-semibold mb-4">What We Do</h2>
          <p className="text-lg  leading-relaxed">
            From cloud computing and AI-driven solutions to custom software development, <strong>MarpsAfrica</strong> helps businesses thrive with innovative tech services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
