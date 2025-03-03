import React from 'react';
import Pic1 from '../assets/Plant1.png';
import Pic2 from '../assets/Plant2.png';
import Pic3 from '../assets/Plant3.png';
import Pic4 from '../assets/Plant4.png';  // New image

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#01411c] mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Learn more about our app and the passionate team behind it.
        </p>

        {/* Section for Agriculture Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="relative group">
            <img
              src={Pic1}
              alt="Agriculture"
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition-all duration-300"></div> */}
          </div>
          <div className="relative group">
            <img
              src={Pic2}
              alt="Agriculture"
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition-all duration-300"></div> */}
          </div>
          <div className="relative group">
            <img
              src={Pic3}
              alt="Agriculture"
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition-all duration-300"></div> */}
          </div>
          <div className="relative group">
            <img
              src={Pic4}  // New image
              alt="Agriculture"
              className="w-full h-48 object-cover rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-50 transition-all duration-300"></div> */}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-12 text-left max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#01411c] mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to bridge the gap between farmers and consumers by creating a platform that facilitates easy access to agricultural products, services, and knowledge. We aim to support farmers and enhance the agricultural industry by leveraging technology.
          </p>
          <p className="text-gray-700 mb-8">
            By integrating advanced technologies like AI, IoT, and blockchain, we plan to create a seamless connection between the farm and the consumer’s table. Our goal is to ensure that sustainable and fresh agricultural products are available to everyone while helping farmers maximize their yield and income.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-12 text-left max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#01411c] mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-6">
            We envision a future where farmers, agricultural businesses, and consumers collaborate seamlessly through innovative technology. Our goal is to empower every individual in the agricultural community to thrive and make sustainable choices.
          </p>
          <p className="text-gray-700 mb-8">
            We want to bring sustainable farming practices into the forefront, enabling businesses to flourish while also improving the lives of farmers and consumers alike. Our vision includes promoting environmental sustainability, reducing food waste, and creating a circular economy that supports the growth of the agricultural ecosystem.
          </p>
        </div>

        {/* Meet the Team Section */}
        <div className="mt-12 text-left max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#01411c] mb-4">Meet the Team</h2>
          <p className="text-gray-700 mb-6">
            Our team is composed of passionate individuals with expertise in agriculture, technology, and business development. Together, we are committed to making a positive impact on the agricultural ecosystem.
          </p>
          <p className="text-gray-700 mb-8">
            From agronomists to software engineers, from business developers to market analysts, we bring a broad range of skills to the table. We are driven by our shared passion for agriculture and innovation. We believe that by leveraging technology, we can solve the challenges that farmers face, while also improving the lives of consumers and supporting the sustainability of the agricultural sector.
          </p>
          <p className="text-gray-700 mb-8">
            Each of us is committed to a common goal: to make agriculture smarter, more sustainable, and accessible for all. Our expertise and dedication empower us to drive change, and we continue to work towards achieving our collective vision of a connected, sustainable agricultural future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
