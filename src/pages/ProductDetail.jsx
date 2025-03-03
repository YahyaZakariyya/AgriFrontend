import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaVolumeUp, FaStar } from "react-icons/fa";
import WheatSeed from '../assets/p11.png'
import Fertilizer from '../assets/p11.png'
const placeholderImage = "/path/to/placeholder.jpg"; // Replace with actual path



const sampleProducts = [
  {
    id: 1,
    name: "Wheat Seeds",
    category: "Seed",
    price: 200,
    description: "Best quality wheat seeds for a healthy and strong yield.",
    image: WheatSeed,
    stock: "In Stock",
    seller: "AgroFarm Pvt Ltd",
    location: "Lahore, Pakistan",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Organic Fertilizer",
    category: "Fertilizer",
    price: 500,
    description: "High-yield organic fertilizer for boosting crop growth.",
    image: Fertilizer,
    stock: "Out of Stock",
    seller: "GreenEarth Supplies",
    location: "Karachi, Pakistan",
    rating: 3.8,
  },
];

function ProductDetail({ setCartItems }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRating, setUserRating] = useState(null);
  const speechRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const id = Number(productId);
        const foundProduct = sampleProducts.find((p) => p.id === id);

        if (!foundProduct) {
          setError("Product not found.");
          setProduct(null);
        } else {
          setProduct(foundProduct);
          setError(null);
        }
      } catch (err) {
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (setCartItems && product) {
      setCartItems((prevItems) => [...prevItems, product]);
      alert(`${product.name} added to cart!`);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSpeak = () => {
    if (product && product.description) {
      const speech = new SpeechSynthesisUtterance(product.description);
      speechRef.current = speech;
      speechSynthesis.speak(speech);
      setIsSpeaking(true);
      speech.onend = () => setIsSpeaking(false);
    }
  };

  const handleRating = (rating) => {
    setUserRating(rating);
  };

  if (loading) return <p className="text-center text-lg font-semibold">Loading product details...</p>;
  if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-8">
      <button onClick={handleBack} className="text-green-500 hover:underline flex items-center mb-4 cursor-pointer">
        ← Back
      </button>

      <img src={product.image || placeholderImage} alt={product.name} className="w-full h-72 object-cover rounded-lg mb-4" />

      <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 text-lg">{product.category}</p>
      <p className="text-2xl font-bold text-green-600 my-2">${product.price}</p>
      <p className="mt-2 text-gray-700">{product.description}</p>

      <div className="mt-4">
        <p className="font-semibold">
          Availability:
          <span className={`ml-2 ${product.stock === "In Stock" ? "text-green-600" : "text-red-500"}`}>{product.stock}</span>
        </p>
        <p className="font-semibold">Seller: <span className="text-gray-700">{product.seller}</span></p>
        <p className="font-semibold">Location: <span className="text-gray-700">{product.location}</span></p>
      </div>

      {/* Rating Display */}
      <div className="flex items-center mt-4">
        <p className="font-semibold">Rating: </p>
        <div className="flex ml-2">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <FaStar
                key={index}
                className={`text-xl cursor-pointer ${ratingValue <= (userRating || product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                onClick={() => handleRating(ratingValue)}
              />
            );
          })}
        </div>
        <span className="ml-2 text-gray-700">({userRating || product.rating})</span>
      </div>

      <div className="flex items-center space-x-4 mt-6">
        <button onClick={handleAddToCart} className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 cursor-pointer transition duration-200">
          Add to Cart
        </button>

        <button
          onClick={handleSpeak}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200 cursor-pointer"
          disabled={isSpeaking}
        >
          <FaVolumeUp className="inline mr-2" />
          {isSpeaking ? "Speaking..." : "Speak"}
        </button>

        <CiHeart className="text-red-500 text-3xl cursor-pointer hover:text-red-600 transition duration-200" />
      </div>
    </div>
  );
}

export default ProductDetail;
