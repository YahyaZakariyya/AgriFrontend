// src/pages/Cart.js
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
// import ProductCard from "../components/ProductCard";
import OrderConfirmation from "../components/OrderConfirmation";
import DeliveryModal from "../components/DeliveryModal";

const Cart = ({ cartItems, setCartItems }) => {
    const [activeSection, setActiveSection] = useState("all");
    const [orderedItems, setOrderedItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderHistory, setOrderHistory] = useState([]);
    const [currentOrder, setCurrentOrder] = useState(null);


    const handleQuantityChange = (productId, change) => {
        setCartItems(prevCartItems =>
            prevCartItems.map(item => {
                if (item.id === productId) {
                    const newQuantity = Math.max(1, (item.quantity || 1) + change);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };
    
    const handleRemove = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleOrder = (product) => {
        setOrderedItems([...orderedItems, product]);
        setCartItems(cartItems.filter(item => item.id !== product.id));
    };


    const handleProceedOrder = () => {
        setCurrentOrder({
            orderedItems: [...cartItems], //move all items from cart to order
            calculateSubtotal: calculateSubtotal,
        });
        setCartItems([]); // Empty cart
        setActiveSection("order")
    };

    const handleProceedToPayment = () => {
        setIsModalOpen(true);
    };

    const handleCancelOrder = () => {
        setOrderedItems([]);
        setCartItems([]);
        setCurrentOrder(null); // Clear the current order
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const calculateSubtotal = (item) => {
        return (item.price * (item.quantity || 1));
    }

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);
    }


    const handleOrderConfirmation = (orderDetail) => {
        setOrderHistory([...orderHistory, { ...orderDetail, orderedItems: orderDetail.orderedItems }])
        setOrderedItems([]) //Clear the order list after placing order
        setCurrentOrder(null); //Clear the current order
    };
    const getBillDetails = () => { //get the bill total as a callback function
        return {
            orderedItems: currentOrder?.orderedItems || [],
            calculateSubtotal: currentOrder?.calculateSubtotal || calculateSubtotal,
        };
    };



    return (
        <div className="min-h-screen flex flex-col p-6 bg-gray-50">
            <div className="flex gap-6 mb-8 justify-center">
                <button
                    className={`px-6 py-3 text-lg text-white font-semibold rounded-lg transition-colors duration-300 ease-in-out ${activeSection === "all" ? "bg-green-600" : "bg-gray-400 hover:bg-gray-500"}`}
                    onClick={() => setActiveSection("all")}
                >
                    All Products
                </button>
                <button
                    className={`px-6 py-3 text-lg text-white font-semibold rounded-lg transition-colors duration-300 ease-in-out ${activeSection === "order" ? "bg-green-600" : "bg-gray-400 hover:bg-gray-500"}`}
                    onClick={() => setActiveSection("order")}
                >
                    Order Confirmation
                </button>
                <button
                    className={`px-6 py-3 text-lg text-white font-semibold rounded-lg transition-colors duration-300 ease-in-out ${activeSection === "delivery" ? "bg-green-600" : "bg-gray-400 hover:bg-gray-500"}`}
                    onClick={() => setActiveSection("delivery")}
                >
                    Delivery & Payment
                </button>
            </div>

            {activeSection === "all" && (
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">All Products</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {cartItems.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
                                    <span className="text-gray-600">Code: {product.uniqueCode}</span>
                                </div>
                                <p className="text-gray-700 mb-2">Price: {calculateSubtotal(product)} PKR</p>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => handleQuantityChange(product.id, -1)}
                                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="text-gray-800">Qty: {product.quantity || 1}</span>
                                    <button
                                        onClick={() => handleQuantityChange(product.id, 1)}
                                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        onClick={() => handleRemove(product.id)}
                                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">Subtotal: {calculateTotal()} PKR</h2>
                        <button
                            onClick={handleProceedOrder}
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Proceed Order
                        </button>
                    </div>
                </div>
            )}

            {activeSection === "order" && (
                <OrderConfirmation
                    orderedItems={currentOrder?.orderedItems || []} //Use current order to display order
                    onRemoveOrder={(id) => setOrderedItems(orderedItems.filter(item => item.id !== id))}
                    onProceedToPayment={handleProceedToPayment}
                    calculateSubtotal={currentOrder?.calculateSubtotal || calculateSubtotal} //pass subtotal calculation function
                    onCancelOrder={handleCancelOrder}
                />
            )}

            {activeSection === "delivery" && (
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Order Details</h1>
                    <p className="text-lg text-gray-600 mb-4">
                        Order Status: <span className="font-semibold text-green-500">In Progress</span>
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order History</h2>
                    {orderHistory.length > 0 ? (
                        <ul className="space-y-4">
                            {orderHistory.map((order, index) => (
                                <li key={index} className="bg-white rounded-lg shadow-md p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Order #{index + 1}</h3>
                                    {/* Displaying product names in the order */}
                                    <ul className="list-disc list-inside ml-4">
                                        {order?.orderedItems?.map((item, itemIndex) => (
                                            <li key={itemIndex} className="text-gray-700">{item.title} (Qty: {item.quantity || 1})</li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-700 mt-2">Grand Total: {order.grandTotal} PKR</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 text-center">No order history yet.</p>
                    )}
                </div>
            )}

            {isModalOpen && (
                <DeliveryModal
                    onClose={closeModal}
                    getBillDetails={getBillDetails}
                    onOrderConfirmation={handleOrderConfirmation}
                />
            )}
        </div>
    );
};

export default Cart;