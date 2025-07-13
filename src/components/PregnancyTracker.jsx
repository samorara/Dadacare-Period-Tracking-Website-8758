import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar, FiTrendingUp } = FiIcons;

const PregnancyTracker = () => {
  const pregnancyWeek = 12;
  const dueDate = new Date('2024-08-15');
  const daysRemaining = Math.ceil((dueDate - new Date()) / (1000 * 60 * 60 * 24));

  const milestones = [
    "Your baby is about the size of a passion fruit!",
    "Fingernails and toenails are starting to form",
    "Baby can now make a fist and open their mouth",
    "The vocal cords are developing"
  ];

  return (
    <div className="space-y-6">
      {/* Week Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Week {pregnancyWeek}</h3>
          <div className="text-right">
            <p className="text-sm text-gray-600">{daysRemaining} days to go</p>
          </div>
        </div>
        
        <div className="bg-gray-200 rounded-full h-2 mb-4">
          <motion.div
            className="bg-gradient-to-r from-dadacare-purple to-dadacare-pink h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(pregnancyWeek / 40) * 100}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        
        <p className="text-sm text-gray-600">
          Due date: {dueDate.toLocaleDateString()}
        </p>
      </div>

      {/* Baby Size */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl">🥭</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Baby's Size</h3>
            <p className="text-sm text-gray-600">About the size of a passion fruit</p>
          </div>
        </div>
        <p className="text-sm text-gray-700">
          Your baby is approximately 2.1 inches long and weighs about 0.5 ounces.
        </p>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <SafeIcon icon={FiTrendingUp} className="w-5 h-5 mr-2 text-dadacare-purple" />
          This Week's Milestones
        </h3>
        <div className="space-y-3">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="w-2 h-2 bg-dadacare-purple rounded-full mr-3 flex-shrink-0" />
              <p className="text-sm text-gray-700">{milestone}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Health Tips */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <SafeIcon icon={FiHeart} className="w-5 h-5 mr-2 text-dadacare-purple" />
          Health Tips
        </h3>
        <div className="space-y-3">
          <div className="p-3 bg-green-50 rounded-xl">
            <p className="text-sm text-green-800 font-medium">Nutrition</p>
            <p className="text-sm text-green-700">Continue taking prenatal vitamins with folic acid</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-800 font-medium">Exercise</p>
            <p className="text-sm text-blue-700">Gentle prenatal yoga can help with flexibility</p>
          </div>
          <div className="p-3 bg-purple-50 rounded-xl">
            <p className="text-sm text-purple-800 font-medium">Sleep</p>
            <p className="text-sm text-purple-700">Start sleeping on your side for better blood flow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyTracker;