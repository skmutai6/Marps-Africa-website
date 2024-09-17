import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaSearch, FaCloud } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 right-0 w-full h-[10vh] bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="logo.png" alt="Company Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 ml-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${isActive ? 'text-black' : ''}`
                }
              >
                Home
              </NavLink>

              {/* Services Dropdown */}
              <div className="relative group">
                <NavLink
                  to="/services"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  Services
                </NavLink>

                {/* Dropdown - Full Width */}
                <div className="absolute left-0 hidden group-hover:block w-full bg-white border shadow-lg mt-2 py-8">
                  <div className="max-w-7xl mx-auto px-6">
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {/* Services list */}
                      <li className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                        <FaLaptopCode className="h-8 w-8 text-blue-500 mb-2" />
                        <h3 className="font-bold text-gray-800">Brainstorming Ideas</h3>
                        <p className="text-gray-500 text-sm">Innovative ideas for your business.</p>
                      </li>
                      <li className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                        <FaPalette className="h-8 w-8 text-blue-500 mb-2" />
                        <h3 className="font-bold text-gray-800">Product Design</h3>
                        <p className="text-gray-500 text-sm">Crafting user-centric designs.</p>
                      </li>
                      <li className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                        <FaSearch className="h-8 w-8 text-blue-500 mb-2" />
                        <h3 className="font-bold text-gray-800">SEO Optimization</h3>
                        <p className="text-gray-500 text-sm">Boosting your search visibility.</p>
                      </li>
                      <li className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                        <FaCloud className="h-8 w-8 text-blue-500 mb-2" />
                        <h3 className="font-bold text-gray-800">Cloud Solutions</h3>
                        <p className="text-gray-500 text-sm">Secure and scalable cloud services.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Other links */}
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${isActive ? 'text-black' : ''}`
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${isActive ? 'text-black' : ''}`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black font-medium ${isActive ? 'text-black' : ''}`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Call to Action & Mobile Button */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/appointment"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Book Appointment
            </NavLink>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} aria-label="Open Mobile Menu">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              <NavLink to="/" className="text-gray-700 hover:text-black font-medium">
                Home
              </NavLink>
              <NavLink to="/services" className="text-gray-700 hover:text-black font-medium">
                Services
              </NavLink>
              <NavLink to="/resources" className="text-gray-700 hover:text-black font-medium">
                Resources
              </NavLink>
              <NavLink to="/portfolio" className="text-gray-700 hover:text-black font-medium">
                Portfolio
              </NavLink>
              <NavLink to="/blog" className="text-gray-700 hover:text-black font-medium">
                Blog
              </NavLink>
              <NavLink to="/contact" className="text-gray-700 hover:text-black font-medium">
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
