import React from "react";
import { FaSeedling, FaCarrot, FaSprayCan, FaUsersCog, FaTools, FaWater } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const categoryIcons = {
  Crop: <FaSeedling className="text-4xl mb-2" />,
  Seed: <FaCarrot className="text-4xl mb-2" />,
  Pesticide: <FaSprayCan className="text-4xl mb-2" />,
  Fertilizer: <FaUsersCog className="text-4xl mb-2" />,
  Tools: <FaTools className="text-4xl mb-2" />,
  Irrigation: <FaWater className="text-4xl mb-2" />,
};

const CategoryScroll = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 shadow-md tracking-wide pb-4">
        Explore Our Agriculture Categories
      </h2>

      {/* <div className="container mx-auto px-4"> */}
        {/* <div className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/productPage/${category}`)}
              className="bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-lg p-6 m-2 w-32 sm:w-36 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {categoryIcons[category] || <FaSeedling className="text-4xl mb-2" />}
              <h3 className="text-lg font-semibold text-white">{category}</h3>
            </div>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default CategoryScroll;