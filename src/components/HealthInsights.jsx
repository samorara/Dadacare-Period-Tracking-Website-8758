import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiAlertCircle, FiCheckCircle, FiInfo } = FiIcons;

const HealthInsights = () => {
  const insights = [
    {
      type: 'positive',
      icon: FiCheckCircle,
      title: 'Consistent Cycle',
      description: 'Your cycle has been very regular for the past 3 months. This is a great sign of hormonal balance.',
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    {
      type: 'info',
      icon: FiInfo,
      title: 'PMS Pattern',
      description: 'You tend to experience mood changes 3-4 days before your period. This is completely normal.',
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      type: 'suggestion',
      icon: FiTrendingUp,
      title: 'Energy Optimization',
      description: 'Your energy peaks around ovulation. Consider scheduling important tasks during this time.',
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      type: 'alert',
      icon: FiAlertCircle,
      title: 'Symptom Tracking',
      description: 'Consider mentioning your recent headaches to your healthcare provider at your next visit.',
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Health Insights</h3>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl ${insight.bg}`}
          >
            <div className="flex items-start space-x-3">
              <SafeIcon icon={insight.icon} className={`w-5 h-5 ${insight.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h4 className={`font-medium ${insight.color} mb-1`}>{insight.title}</h4>
                <p className="text-sm text-gray-700">{insight.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HealthInsights;