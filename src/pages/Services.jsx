import React from 'react';
import { FaSeedling, FaCarrot, FaSprayCan, FaUsersCog, FaTools, FaWater } from 'react-icons/fa';

const Services = () => {
  const services = [
    { name: 'Crop', icon: <FaSeedling className="text-4xl mb-2 text-green-500" /> },
    { name: 'Seed', icon: <FaCarrot className="text-4xl mb-2 text-orange-500" /> },
    { name: 'Pesticide', icon: <FaSprayCan className="text-4xl mb-2 text-gray-500" /> },
    { name: 'Fertilizer', icon: <FaUsersCog className="text-4xl mb-2 text-yellow-500" /> },
    { name: 'Tools', icon: <FaTools className="text-4xl mb-2 text-blue-500" /> },
    { name: 'Irrigation', icon: <FaWater className="text-4xl mb-2 text-teal-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#01411c] mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore the services we offer to help you succeed in agriculture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-[#01411c] mb-2">{service.name}</h2>
              <p className="text-gray-700">
                Discover our top-quality {service.name} services designed to enhance your agricultural success. We ensure reliable products and expert guidance to meet your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
