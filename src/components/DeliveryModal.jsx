// src/components/DeliveryModal.js
import React, { useState } from 'react';

const DeliveryModal = ({ onClose, getBillDetails, onOrderConfirmation }) => {
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [addressError, setAddressError] = useState('');
    const [contactError, setContactError] = useState('');

    const { orderedItems, calculateSubtotal } = getBillDetails();


    const subtotal = orderedItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

    const calculateGST = () => {
        return subtotal * 0.14;
    };

    const calculateOtherCharges = () => {
        return orderedItems.length >= 5 ? 50 : 0;
    };

    const deliveryCharges = 300;
    const platformFee = 100;

    const calculateGrandTotal = () => {
        return subtotal + calculateGST() + platformFee + calculateOtherCharges() + deliveryCharges;
    };

    const handleOrderConfirmation = () => {
        let isValid = true;
        setAddressError('');
        setContactError('');

        if (!address.trim()) {
            setAddressError('Address is required');
            isValid = false;
        }
        if (!contact.trim()) {
            setContactError('Contact Number is required');
            isValid = false;
        }

        if (isValid) {
            const orderDetails = {
                grandTotal: calculateGrandTotal().toFixed(2),
                address: address,
                contact: contact,
                deliveryMethod: deliveryMethod,
            };
            onOrderConfirmation(orderDetails);
            alert("Your Order is placed we'll send you confirmation message shortly.");
            onClose();
        }
    };

    const handleDeliveryChange = (e) => {
        setDeliveryMethod(e.target.value)
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
                {/* AgriShop Brand Header */}
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-extrabold text-green-600">AgriShop</h2>
                    <p className="text-gray-700">Your Trusted Partner</p>
                </div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
                <div className="border-b pb-4 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address:
                        </label>
                        <input
                            type="text"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addressError ? 'border-red-500' : ''}`}
                            id="address"
                            placeholder="Enter your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {addressError && (
                            <p className="text-red-500 text-xs italic">{addressError}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                            Contact No:
                        </label>
                        <input
                            type="text"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${contactError ? 'border-red-500' : ''}`}
                            id="contact"
                            placeholder="Enter your Contact No"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        {contactError && (
                            <p className="text-red-500 text-xs italic">{contactError}</p>
                        )}
                    </div>
                    <p className="text-lg text-gray-600 mb-2">
                        Bill: {subtotal} PKR
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        GST: {calculateGST().toFixed(2)} PKR
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        Platform Fee: {platformFee} PKR
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        Other Charges: {calculateOtherCharges()} PKR
                    </p>
                    <p className="text-lg text-gray-600 mb-2">
                        Delivery Charges: {deliveryCharges} PKR
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Grand Total: {calculateGrandTotal().toFixed(2)} PKR</h2>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Payment Method</h3>
                    <div className="flex flex-col space-y-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-green-500 h-5 w-5"
                                value="cashOnDelivery"
                                checked={deliveryMethod === 'cashOnDelivery'}
                                onChange={handleDeliveryChange}
                            />
                            <span className="ml-2 text-gray-700">Cash on Delivery</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                className="form-radio text-gray-400 h-5 w-5"
                                value="onlinePayment"
                                checked={deliveryMethod === 'onlinePayment'}
                                onChange={handleDeliveryChange}
                                disabled
                            />
                            <span className="ml-2 text-gray-500">Online Payment (Disabled)</span>
                        </label>
                    </div>
                </div>

                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleOrderConfirmation}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 disabled:opacity-50"
                        disabled={!deliveryMethod}
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryModal;