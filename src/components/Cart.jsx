import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiPlus, FiMinus, FiShoppingBag, FiCreditCard } = FiIcons;

const Cart = ({ onClose }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, placeOrder } = useShop();

  const handleCheckout = () => {
    const total = getCartTotal();
    placeOrder(total);
    onClose();
  };

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      >
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          className="w-full max-w-md bg-white rounded-t-3xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Your Cart</h3>
            <motion.button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
          
          <div className="text-center py-8">
            <SafeIcon icon={FiShoppingBag} className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Your cart is empty</p>
            <p className="text-sm text-gray-500 mt-2">Add some products to get started</p>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="w-full max-w-md bg-white rounded-t-3xl max-h-3/4 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Your Cart ({cart.length})</h3>
          <motion.button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="p-1 bg-white rounded-full shadow-sm"
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiMinus} className="w-4 h-4 text-gray-600" />
                </motion.button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <motion.button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 bg-white rounded-full shadow-sm"
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiPlus} className="w-4 h-4 text-gray-600" />
                </motion.button>
              </div>
              <motion.button
                onClick={() => removeFromCart(item.id)}
                className="p-1 text-red-500 hover:bg-red-50 rounded-full"
                whileTap={{ scale: 0.9 }}
              >
                <SafeIcon icon={FiX} className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Checkout */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-xl font-bold text-dadacare-purple">
              ${getCartTotal().toFixed(2)}
            </span>
          </div>
          <motion.button
            onClick={handleCheckout}
            className="w-full p-4 bg-gradient-to-r from-dadacare-purple to-dadacare-pink text-white rounded-xl font-semibold flex items-center justify-center"
            whileTap={{ scale: 0.98 }}
          >
            <SafeIcon icon={FiCreditCard} className="w-5 h-5 mr-2" />
            Checkout
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cart;