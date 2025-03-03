import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
 const navigate = useNavigate(); // Hook to navigate programmatically
     
       const handleAboutus = () => {
         navigate('/aboutus'); 
       };
       const handleNavigateToProductPage = () => {
        navigate('/productPage/All'); 
      };

      const handleContact = () => {
        navigate('/contactus'); 
      };
      
 
  return (
    <footer className="bg-green-900 bg-opacity-90 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold tracking-wide">Agri Shop</h1>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Your trusted partner in quality agricultural solutions.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="mb-6 md:mb-0">
              <h2 className="font-semibold text-lg border-b border-gray-500 pb-2 mb-2">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-gray-300 transition duration-300 transform hover:translate-x-1">Home</a>
                </li>
                <li>
                  <a onClick={handleAboutus} className="hover:text-gray-300 transition duration-300 transform hover:translate-x-1 cursor-pointer">About Us</a>
                </li>
                <li>
                  <a onClick={handleNavigateToProductPage} className="hover:text-gray-300 transition duration-300 transform hover:translate-x-1 cursor-pointer">Products</a>
                </li>
                <li>
                  <a onClick={handleContact} className="hover:text-gray-300 transition duration-300 transform hover:translate-x-1 cursor-pointer">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg border-b border-gray-500 pb-2 mb-2">Follow Us</h2>
              <div className="flex space-x-6 mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300 transform hover:scale-110 cursor-pointer">
                  <FaFacebookF className="w-7 h-7" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300 transform hover:scale-110 cursor-pointer">
                  <FaTwitter className="w-7 h-7" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300 transform hover:scale-110 cursor-pointer">
                  <FaInstagram className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition duration-300 transform hover:scale-110 cursor-pointer">
                  <FaLinkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-600 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Agri Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
