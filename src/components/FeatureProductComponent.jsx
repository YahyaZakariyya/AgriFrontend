import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories } from '../redux/CategoriesSlice'; // Ensure the path is correct

// Import static product images
import product_1 from '../assets/P1.png';
import product_2 from '../assets/P2.png';
import product_3 from '../assets/P3.jpg';
import product_4 from '../assets/P4.png';
import product_5 from '../assets/P5.jpeg';
import product_6 from '../assets/P6.png';
import product_7 from '../assets/P7.png';
import product_8 from '../assets/P8.jpg';

// Static products data
const products = [
  {
    id: 1,
    image: product_1,
    title: 'SarSabaz Urea',
    description: 'Fatima Fertilizer Urea is a white, odorless, crystalline substance...',
    category: 'Fertilizer'
  },
  {
    id: 2,
    image: product_2,
    title: 'D A P',
    description: 'Fatima Fertilizer Urea is a white, odorless, crystalline substance...',
    category: 'Fertilizer'
  },
  {
    id: 3,
    image: product_3,
    title: 'Tomato Seed Gold',
    description: 'An early, prolific, golden cherry tomato. 15-20 gm., round to slightly oval cherry tomatoes have a deep yellow color. The flavor is well-balanced and delicious, and a majority of the early fruits are seedless.',
    category: 'Seed'
  },
  {
    id: 4,
    image: product_4,
    title: 'Baby Corn Seed',
    description: 'A sweet and tender baby corn variety, perfect for snacking and salads. Its sweet flavor and crunchy texture make it a great choice for grilling or boiling. 50-60 days to harvest.',
    category: 'Seed'
  },
  {
    id: 5,
    image: product_5,
    title: 'Red Tomato Seed',
    description: 'A delicious red tomato variety, perfect for slicing and salads. Its sweet-tart flavor and firm texture make it a great choice for snacking and cooking. Indeterminate variety, needs staking. 70-80 days to harvest.',
    category: 'Seed'
  },
  {
    id: 6,
    image: product_6,
    title: 'Tomato Seed',
    description: 'A white tomato variety with a mild flavor. The fruit is meaty with few seeds, a mild non-acid flavor, and creamy texture.',
    category: 'Seed'
  },
  {
    id: 7,
    image: product_7,
    title: 'Apple Gourd (Tinda)',
    description: 'Apple Gourd (Tinda) Selected Seeds approximately 40 seeds',
    category: 'Seed'
  },
  {
    id: 8,
    image: product_8,
    title: 'Okra Seed Red Burgundy',
    description: 'A strong vigorous hybrid with moderate side shoot development and narrow leaf type. It has a very easy setting ability.',
    category: 'Seed'
  }
];

const placeholderImage = '/path/to/placeholder.jpg'; // Replace with your actual placeholder image path

function FeatureProductComponent() {
  // const dispatch = useDispatch();
  // Get categories data from Redux
  // const { categories, status: catStatus, error: catError } = useSelector((state) => state.categories);

  // Local state for selected category (default "All")
  const [selectedCategory, setSelectedCategory] = useState('All');
  // State to manage image sources for error handling
  const [imgSrc, setImgSrc] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.image;
      return acc;
    }, {})
  );

  // Fetch categories from API if not already loaded
  // useEffect(() => {
  //   if (catStatus === 'idle') {
  //     dispatch(fetchCategories());
  //   }
  // }, [catStatus, dispatch]);

  // Handle image load errors
  const handleImageError = (id) => {
    setImgSrc((prevState) => ({
      ...prevState,
      [id]: placeholderImage,
    }));
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Featured Products
      </h2>

      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`py-2 px-4 rounded-lg font-medium transition duration-200 ${
            selectedCategory === 'All'
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        {/* {catStatus === 'succeeded' &&
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`py-2 px-4 rounded-lg font-medium transition duration-200 ${
                selectedCategory === cat.name
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        {catStatus === 'loading' && <p>Loading categories...</p>}
        {catStatus === 'failed' && <p>Error: {catError}</p>} */}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts && filteredProducts.map((product) => (
          <div
            key={product.id}
            className="m-2 max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl transform hover:scale-105"
          >
            <div className="flex items-center justify-center h-48 bg-gray-100">
              <img
                src={imgSrc[product.id]}
                alt={product.title}
                height={200}
                width={200}
                className="object-contain"
                onError={() => handleImageError(product.id)}
              />
            </div>
            <div className="p-4 bg-white flex flex-col justify-between" style={{ minHeight: '230px' }}>
              <div>
                <h3
                  className="text-xl font-semibold mb-2 text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ maxHeight: '2.5rem' }}
                >
                  {product.title}
                </h3>
                <p
                  className="text-gray-700 mb-4 overflow-hidden text-ellipsis"
                  style={{ maxHeight: '4.5rem', overflow: 'hidden' }}
                >
                  {product.description}
                </p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureProductComponent;
