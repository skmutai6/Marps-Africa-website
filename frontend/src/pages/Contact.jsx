import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaCheckCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    const serviceID = 'service_13ygtrs';
    const templateID = 'template_n21fa3e'; // Template for sending message to yourself
    const confirmationTemplateID = 'template_6n8ui2t'; // Template for sending confirmation email to the user
    const publicKey = 'L2_7PSPdo8vlmJqDm';

    // Template parameters for the original email (sent to you or the recipient)
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Recipient Name', // Change as per your needs
    };

    // Template parameters for the confirmation email (sent to the user)
    const confirmationParams = {
      from_name: formData.name, // User's name
      to_email: formData.email, // User's email
      reply_to: formData.email, // Reply-to address
    };

    // Send the original email first
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        // Send the confirmation email to the user
        return emailjs.send(serviceID, confirmationTemplateID, confirmationParams, publicKey);
      })
      .then(() => {
        toast.success('Message sent successfully! A confirmation email has been sent to you.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Failed to send message. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white my-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Information Section */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-blue-700">Let’s level up your project, together</h2>
          <p className="mt-4 text-gray-600">
            You can reach us anytime via email at, <a href="mailto:marpsafrica@gmail.com" className="text-blue-600">marpsafrica@gmail.com</a>
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center hover:bg-gray-100 p-2 rounded-lg transition-all">
              <FaCheckCircle className="text-green-500 mr-3 text-xl" />
              Winderson experts contact you within 24h
            </li>
            <li className="flex items-center hover:bg-gray-100 p-2 rounded-lg transition-all">
              <FaCheckCircle className="text-green-500 mr-3 text-xl" />
              Information promptly cataloged for efficient handling
            </li>
            <li className="flex items-center hover:bg-gray-100 p-2 rounded-lg transition-all">
              <FaCheckCircle className="text-green-500 mr-3 text-xl" />
              Discuss your project details
            </li>
          </ul>

          {/* Embedded Map with Hover Effect */}
          <div className="mt-6 hover:scale-105 transition-transform duration-300 ease-in-out">
            <iframe
              title="Nairobi CBD Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.46999383871!2d36.81704731387715!3d-1.283370999052714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10df672ab7c5%3A0x3ac11bfc0c9ac2f2!2sBazaar%20Plaza!5e0!3m2!1sen!2ske!4v1694793921856!5m2!1sen!2ske"
              className="w-full h-64 border-0 rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="p-6 bg-gray-50 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
                placeholder="MarpsAfrica"
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = 'MarpsAfrica'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
                placeholder="MarpsAfrica@example.com"
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = 'MarpsAfrica@example.com'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-blue-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 transition duration-300 ease-in-out hover:shadow-lg"
                rows="5"
                placeholder="Hello, this is Peter, I'd like to discuss project details..."
                onFocus={(e) => e.target.placeholder = ''}
                onBlur={(e) => e.target.placeholder = "Hello, this is Peter, I'd like to discuss project details..."}
              />
            </div>
            
            {/* Right-Aligned Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto block px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
