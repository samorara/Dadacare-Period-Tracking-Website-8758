import React from 'react';
import { motion } from 'framer-motion';
import { useCycle } from '../context/CycleContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiHeart, FiZap } = FiIcons;

const CycleInsights = () => {
  const { currentCycle, getCycleDay } = useCycle();
  const cycleDay = getCycleDay(new Date());

  const insights = [
    {
      title: 'Cycle Health',
      value: 'Excellent',
      color: 'text-green-600',
      bg: 'bg-green-100',
      icon: FiHeart
    },
    {
      title: 'Regularity',
      value: '98%',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      icon: FiTrendingUp
    },
    {
      title: 'Energy Level',
      value: 'High',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
      icon: FiZap
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Your Cycle Insights</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`w-12 h-12 ${insight.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
              <SafeIcon icon={insight.icon} className={`w-6 h-6 ${insight.color}`} />
            </div>
            <p className="text-sm text-gray-600">{insight.title}</p>
            <p className={`font-semibold ${insight.color}`}>{insight.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
        <h4 className="font-medium text-gray-800 mb-2">Today's Forecast</h4>
        <p className="text-sm text-gray-600">
          Based on your cycle patterns, you might experience mild fatigue today. 
          Consider taking it easy and staying hydrated.
        </p>
      </div>
    </div>
  );
};

export default CycleInsights;