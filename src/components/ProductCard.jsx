// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ product, onRemove, onOrder }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 transition-transform hover:scale-105 transform hover:shadow-lg">
      <div className="flex flex-col md:flex-row items-center space-x-4">
        <div className="w-full md:w-40 mb-4 md:mb-0">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-lg text-gray-500 mb-2">Price: ${product.price}</p>
          <p className="text-sm text-gray-400 mb-4">Code: {product.uniqueCode}</p>

          <div className="flex justify-start space-x-4">
            <button
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              onClick={() => onRemove(product.id)}
            >
              Remove
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              onClick={() => onOrder(product)}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
