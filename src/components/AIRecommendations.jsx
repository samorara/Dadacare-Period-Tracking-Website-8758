import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiStar, FiShoppingCart } = FiIcons;

const AIRecommendations = () => {
  const { getRecommendedProducts, addToCart } = useShop();
  const recommendations = getRecommendedProducts().slice(0, 3);

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
      <div className="flex items-center mb-4">
        <SafeIcon icon={FiZap} className="w-5 h-5 text-dadacare-purple mr-2" />
        <h3 className="font-semibold text-gray-800">AI Recommendations</h3>
      </div>
      
      <div className="space-y-3">
        {recommendations.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 flex items-center space-x-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 text-sm">{product.name}</h4>
              <p className="text-xs text-gray-600 mb-1">{product.aiReason}</p>
              <div className="flex items-center">
                <SafeIcon icon={FiStar} className="w-3 h-3 text-yellow-400 mr-1" />
                <span className="text-xs text-gray-600">{product.rating}</span>
                <span className="text-sm font-semibold text-dadacare-purple ml-auto">
                  ${product.price}
                </span>
              </div>
            </div>
            <motion.button
              onClick={() => addToCart(product)}
              className="p-2 bg-dadacare-purple text-white rounded-lg"
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiShoppingCart} className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;