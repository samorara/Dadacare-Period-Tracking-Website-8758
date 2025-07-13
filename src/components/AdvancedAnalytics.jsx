import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiCalendar, FiActivity, FiPieChart } = FiIcons;

const AdvancedAnalytics = () => {
  const cycleData = [
    { month: 'Jan', length: 28, symptoms: 5 },
    { month: 'Feb', length: 29, symptoms: 4 },
    { month: 'Mar', length: 27, symptoms: 6 },
    { month: 'Apr', length: 28, symptoms: 3 },
    { month: 'May', length: 28, symptoms: 4 },
    { month: 'Jun', length: 29, symptoms: 5 }
  ];

  const symptomDistribution = [
    { name: 'Cramps', value: 30 },
    { name: 'Headache', value: 20 },
    { name: 'Fatigue', value: 25 },
    { name: 'Bloating', value: 25 }
  ];

  const moodData = [
    { day: 1, mood: 3, energy: 2 },
    { day: 7, mood: 4, energy: 3 },
    { day: 14, mood: 5, energy: 4 },
    { day: 21, mood: 3, energy: 2 },
    { day: 28, mood: 4, energy: 3 }
  ];

  const COLORS = ['#8B5CF6', '#F8BBD9', '#4ECDC4', '#FF6B6B'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* Cycle Length Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <div className="flex items-center mb-4">
          <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-dadacare-purple mr-2" />
          <h3 className="font-semibold text-gray-800">Cycle Length Trends</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={cycleData}>
              <XAxis dataKey="month" />
              <YAxis domain={[20, 35]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="length"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Symptom Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <div className="flex items-center mb-4">
          <SafeIcon icon={FiPieChart} className="w-5 h-5 text-dadacare-purple mr-2" />
          <h3 className="font-semibold text-gray-800">Symptom Distribution</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={symptomDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {symptomDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {symptomDistribution.map((item, index) => (
            <div key={item.name} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mood and Energy Levels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <div className="flex items-center mb-4">
          <SafeIcon icon={FiActivity} className="w-5 h-5 text-dadacare-purple mr-2" />
          <h3 className="font-semibold text-gray-800">Mood & Energy Levels</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodData}>
              <XAxis dataKey="day" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="mood"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="energy"
                stroke="#4ECDC4"
                strokeWidth={2}
                dot={{ fill: '#4ECDC4', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-dadacare-purple rounded-full mr-2" />
            <span className="text-sm text-gray-600">Mood</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-dadacare-mint rounded-full mr-2" />
            <span className="text-sm text-gray-600">Energy</span>
          </div>
        </div>
      </motion.div>

      {/* Monthly Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <div className="flex items-center mb-4">
          <SafeIcon icon={FiCalendar} className="w-5 h-5 text-dadacare-purple mr-2" />
          <h3 className="font-semibold text-gray-800">Monthly Summary</h3>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cycleData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="symptoms" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvancedAnalytics;