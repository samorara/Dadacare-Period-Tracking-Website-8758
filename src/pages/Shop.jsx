import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import AIRecommendations from '../components/AIRecommendations';

const { FiShoppingBag, FiShoppingCart, FiStar, FiZap } = FiIcons;

const Shop = () => {
  const { products, cart, getRecommendedProducts } = useShop();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCart, setShowCart] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(true);

  const categories = ['All', 'Period Care', 'Supplements', 'Wellness', 'Pain Relief', 'Treats'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <SafeIcon icon={FiShoppingBag} className="w-6 h-6 mr-2 text-dadacare-purple" />
            Dadacare Shop
          </h1>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCart(true)}
            className="relative p-3 bg-white rounded-full shadow-sm"
          >
            <SafeIcon icon={FiShoppingCart} className="w-6 h-6 text-gray-600" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-dadacare-purple text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </motion.button>
        </div>

        {/* AI Recommendations Toggle */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">For You</h2>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowRecommendations(!showRecommendations)}
            className="flex items-center px-3 py-1 bg-gradient-to-r from-dadacare-purple to-dadacare-pink text-white rounded-full text-sm"
          >
            <SafeIcon icon={FiZap} className="w-4 h-4 mr-1" />
            AI Powered
          </motion.button>
        </div>
      </div>

      {/* AI Recommendations */}
      <AnimatePresence>
        {showRecommendations && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-6 mb-6"
          >
            <AIRecommendations />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Tabs */}
      <div className="px-6 mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-dadacare-purple text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6">
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      <AnimatePresence>
        {showCart && (
          <Cart onClose={() => setShowCart(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Shop;