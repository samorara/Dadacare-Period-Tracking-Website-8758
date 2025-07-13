import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiCalendar, FiPlus, FiShoppingBag, FiUser } = FiIcons;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/calendar', icon: FiCalendar, label: 'Calendar' },
    { path: '/log', icon: FiPlus, label: 'Log', isCenter: true },
    { path: '/shop', icon: FiShoppingBag, label: 'Shop' },
    { path: '/profile', icon: FiUser, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
      <div className="bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <motion.button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  item.isCenter 
                    ? 'bg-gradient-to-r from-dadacare-pink to-dadacare-purple text-white shadow-lg -mt-4' 
                    : isActive 
                      ? 'text-dadacare-purple' 
                      : 'text-gray-400'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon 
                  icon={item.icon} 
                  className={`w-6 h-6 ${item.isCenter ? 'w-7 h-7' : ''}`} 
                />
                <span className={`text-xs mt-1 ${item.isCenter ? 'font-medium' : ''}`}>
                  {item.label}
                </span>
                {isActive && !item.isCenter && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-dadacare-purple rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;