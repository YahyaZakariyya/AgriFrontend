import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner1 from '../assets/Banner1.png'

function Hero() {
  const navigate = useNavigate(); // Hook to navigate programmatically
  
  const handleNavigateToProductPage = () => {
    navigate('/product-page'); // Navigate to ProductPage
  };
  
  const handleNavigateToDetailPage = () => {
    navigate('/services'); // Navigate to Services
  };

  return (
    <div 
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Banner1})` }} // Set background image
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative text-center max-w-4xl p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Empowering Farmers with the <span className="text-green-600"> Latest Tools, Seeds </span>, and <span className="text-green-600">Solutions</span> for a Prosperous Harvest.
        </h1>
        <p className="text-lg mt-4 text-white">
          Providing innovative, high-quality agricultural products to help your farm flourish.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button 
            onClick={handleNavigateToProductPage} 
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition cursor-pointer">
            Explore More
          </button>
          <button 
            onClick={handleNavigateToDetailPage} 
            className="border border-green-600 text-green-600 px-6 py-2 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition cursor-pointer">
            Learn More
          </button>
        </div>
        <p className="mt-8 text-white text-sm">
          Join us in revolutionizing agriculture today!
        </p>
      </div>
    </div>
  );
}

export default Hero;
