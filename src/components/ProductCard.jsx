import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiShoppingCart, FiZap } = FiIcons;

const ProductCard = ({ product }) => {
  const { addToCart } = useShop();

  return (
    <motion.div
      className="product-card bg-white rounded-2xl p-4 shadow-sm"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-32 object-cover rounded-xl"
        />
        {product.recommended && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-dadacare-purple to-dadacare-pink text-white px-2 py-1 rounded-full text-xs flex items-center">
            <SafeIcon icon={FiZap} className="w-3 h-3 mr-1" />
            AI Pick
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-800 text-sm">{product.name}</h3>
        <p className="text-xs text-gray-600">{product.description}</p>
        
        <div className="flex items-center">
          <div className="flex items-center">
            <SafeIcon icon={FiStar} className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
          <span className="text-sm font-semibold text-dadacare-purple ml-auto">
            ${product.price}
          </span>
        </div>

        {product.aiReason && (
          <div className="bg-purple-50 p-2 rounded-lg">
            <p className="text-xs text-purple-700">{product.aiReason}</p>
          </div>
        )}

        <motion.button
          onClick={() => addToCart(product)}
          className="w-full mt-3 p-2 bg-dadacare-purple text-white rounded-xl text-sm font-medium flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiShoppingCart} className="w-4 h-4 mr-2" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;