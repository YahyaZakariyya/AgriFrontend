// src/components/OrderConfirmation.js
import React from 'react';

const OrderConfirmation = ({ orderedItems, onRemoveOrder, onProceedToPayment, calculateSubtotal, onCancelOrder }) => {

   const calculateBill = () => {
    return orderedItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);
    }

    const calculateGST = () => {
        return calculateBill() * 0.14; // 14% GST
    };


    const calculateOtherCharges = () => {
        return orderedItems.length >= 5 ? 50 : 0;
    };


    const deliveryCharges = 300;
    const platformFee = 100;

    const calculateGrandTotal = () => {
        return calculateBill() + calculateGST() + platformFee + calculateOtherCharges() + deliveryCharges;
    };


    return (
        <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Order Confirmation</h2>
          {orderedItems.length > 0 ? (
           <div>
                 <ul className="space-y-4">
                      {orderedItems.map((product) => (
                        <li key={product.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                                 <p className="text-gray-700">
                                    Price: {calculateSubtotal(product)} PKR
                                 </p>
                                <p className="text-gray-600">Code: {product.uniqueCode}</p>
                                 <p className="text-gray-600">Qty: {product.quantity || 1}</p>
                           </div>
                                <div className="flex items-center space-x-2">
                                 <button
                                       onClick={() => onRemoveOrder(product.id)}
                                         className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                       >
                                            Remove
                                       </button>
                                </div>
                            </li>
                       ))}
                   </ul>
                <div className="mt-6 border-t pt-4">
                    <p className="text-right text-gray-800">Bill: {calculateBill()} PKR</p>
                    <p className="text-right text-gray-800">GST: {calculateGST().toFixed(2)} PKR</p>
                      <p className="text-right text-gray-800">Platform Fee: {platformFee} PKR</p>
                       <p className="text-right text-gray-800">Other Charges: {calculateOtherCharges()} PKR</p>
                    <p className="text-right text-gray-800">Delivery Charges: {deliveryCharges} PKR</p>
                         <h2 className="text-2xl font-semibold text-gray-900 text-right mt-2">
                              Grand Total: {calculateGrandTotal().toFixed(2)} PKR
                        </h2>
                 </div>

                  <div className="mt-6 flex justify-end space-x-4">
                     <button
                         onClick={onProceedToPayment}
                         className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                      >
                          Proceed Payment
                        </button>
                      <button
                          onClick={onCancelOrder}
                           className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                     >
                         Cancel Order
                      </button>
                  </div>
            </div>
              ) : (
                 <p className="text-gray-600 text-center">No products here.</p>
             )}
        </div>
    );
};

export default OrderConfirmation;