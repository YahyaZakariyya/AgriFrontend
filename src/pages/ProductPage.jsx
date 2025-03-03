import React, { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaSeedling, FaCarrot, FaSprayCan, FaUsersCog, FaTools, FaWater } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import WheatSeed from '../assets/p11.png'
import Fertilizer from '../assets/p11.png'



const placeholderImage = '/path/to/placeholder.jpg';

const categories = [
    { name: 'Crop', icon: <FaSeedling className="text-4xl mb-2" /> },
    { name: 'Seed', icon: <FaCarrot className="text-4xl mb-2" /> },
    { name: 'Pesticide', icon: <FaSprayCan className="text-4xl mb-2" /> },
    { name: 'Fertilizer', icon: <FaUsersCog className="text-4xl mb-2" /> },
    { name: 'Tools', icon: <FaTools className="text-4xl mb-2" /> },
    { name: 'Irrigation', icon: <FaWater className="text-4xl mb-2" /> },
];

// Temporary product list (Replace with API fetch or prop)
const sampleProducts = [
    { id: 1, name: "Wheat Seeds", category: "Seed", price: 200, description: "Best quality wheat seeds.", image: WheatSeed },
    { id: 2, name: "Organic Fertilizer", category: "Fertilizer", price: 500, description: "High-yield fertilizer.", image: Fertilizer },
];

function ProductPage({ setCartItems }) {
    const { category } = useParams();
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState(category || 'All');
    const [products, setProducts] = useState(sampleProducts); // Replace with API call
    const [imgSrc, setImgSrc] = useState({});

    // Sync category from URL
    useEffect(() => {
        setSelectedCategory(category || 'All');
    }, [category]);

    // Initialize image sources
    useEffect(() => {
        if (products.length > 0) {
            const initialImgSrc = products.reduce((acc, product) => {
                acc[product.id] = product.image || placeholderImage;
                return acc;
            }, {});
            setImgSrc(initialImgSrc);
        }
    }, [products]);

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const handleAddToCart = (product) => {
        setCartItems(prevCart => {
            if (prevCart.some(item => item.id === product.id)) {
                alert(`${product.name} is already in the cart`);
                return prevCart;
            }
            alert(`${product.name} added to cart`);
            return [...prevCart, { ...product, uniqueCode: `P${product.id}` }];
        });
    };

    // Handle category change
    const handleCategoryChange = (cat) => {
        navigate(cat === 'All' ? '/productPage/All' : `/productPage/${cat}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Featured Products</h2>

            <div className="flex justify-center space-x-4 mb-6">
                <button
                    onClick={() => handleCategoryChange('All')}
                    className={`py-2 px-4 rounded-lg font-medium transition duration-200 ${
                        selectedCategory === 'All' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    All
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => handleCategoryChange(cat.name)}
                        className={`flex flex-col items-center py-2 px-4 rounded-lg font-medium transition duration-200 ${
                            selectedCategory === cat.name ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        <div className="mb-1">{cat.icon}</div>
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="m-2 max-w-sm mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl transform hover:scale-105"
                    >
                        <div className="flex items-center justify-center h-48 bg-gray-100">
                            <img
                                src={imgSrc[product.id]}
                                alt={product.name}
                                height={200}
                                width={200}
                                className="object-contain"
                                onError={() =>
                                    setImgSrc((prev) => ({ ...prev, [product.id]: placeholderImage }))
                                }
                            />
                        </div>
                        <div className="p-4 bg-white flex flex-col justify-between" style={{ minHeight: '230px' }}>
                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap" style={{ maxHeight: '2.5rem' }}>
                                    {product.name}
                                </h3>
                                <p className="text-gray-700 mb-1">Price: Rs. {product.price}</p>
                                <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis" style={{ maxHeight: '4.5rem', overflow: 'hidden' }}>
                                    {product.description}
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-auto">
                                <Link to={`/product/${product.id}`}
                                    className="bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-600 transition duration-200"
                                >
                                    Shop Now
                                </Link>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-300 transition duration-200"
                                >
                                    Add to Cart
                                </button>
                                <div className="relative group">
                                    <span className="text-green-500 cursor-pointer">
                                        <CiHeart className="w-8 h-8" />
                                    </span>
                                    <span className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        Add to Wishlist
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
