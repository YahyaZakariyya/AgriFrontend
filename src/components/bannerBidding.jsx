import React from "react";
import { FaMoneyBillWave, FaLandmark, FaGavel } from "react-icons/fa";

export default function BannerBidding() {
  return (
    <div className="relative w-full py-20 bg-green-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1661963981438-a139811fe1b2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Farmer Sowing Seeds"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Fair Pricing */}
          <div className="bg-white bg-opacity-80 text-black p-8 rounded-2xl shadow-xl backdrop-blur-md border-b-4 border-green-600 hover:scale-105 transition transform">
            <div className="flex items-center justify-center mb-4">
              <FaMoneyBillWave className="text-green-600 text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-center">💰 Fair Pricing</h3>
            <p className="text-gray-700 text-center mt-2">
              Our bidding system ensures <strong>competitive</strong> and <strong>fair prices</strong>, maximizing value for both buyers and sellers.
            </p>
          </div>

          {/* Card 2 - Transparency */}
          <div className="bg-white bg-opacity-80 text-black p-8 rounded-2xl shadow-xl backdrop-blur-md border-b-4 border-blue-500 hover:scale-105 transition transform">
            <div className="flex items-center justify-center mb-4">
              <FaLandmark className="text-blue-500 text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-center">🔍 100% Transparency</h3>
            <p className="text-gray-700 text-center mt-2">
              Every bid is <strong>visible</strong> and <strong>tracked in real-time</strong>, ensuring a transparent and reliable buying experience.
            </p>
          </div>

          {/* Card 3 - Secure Transactions */}
          <div className="bg-white bg-opacity-80 text-black p-8 rounded-2xl shadow-xl backdrop-blur-md border-b-4 border-yellow-500 hover:scale-105 transition transform">
            <div className="flex items-center justify-center mb-4">
              <FaGavel className="text-yellow-500 text-5xl" />
            </div>
            <h3 className="text-2xl font-semibold text-center">🔒 Secure Transactions</h3>
            <p className="text-gray-700 text-center mt-2">
              We prioritize <strong>security</strong> to protect buyers and sellers, ensuring a <strong>safe</strong> and <strong>trustworthy</strong> bidding process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
