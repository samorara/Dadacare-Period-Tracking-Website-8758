import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

const CycleChart = () => {
  const data = [
    { day: 1, mood: 3, energy: 2, symptoms: 4 },
    { day: 5, mood: 4, energy: 3, symptoms: 2 },
    { day: 10, mood: 5, energy: 4, symptoms: 1 },
    { day: 14, mood: 4, energy: 5, symptoms: 1 },
    { day: 18, mood: 3, energy: 4, symptoms: 2 },
    { day: 22, mood: 2, energy: 3, symptoms: 3 },
    { day: 26, mood: 2, energy: 2, symptoms: 4 },
    { day: 28, mood: 3, energy: 3, symptoms: 3 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-4">Cycle Patterns</h3>
      
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              domain={[1, 5]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <ReferenceLine x={14} stroke="#F59E0B" strokeDasharray="3 3" />
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
              stroke="#10B981" 
              strokeWidth={2}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="symptoms" 
              stroke="#EF4444" 
              strokeWidth={2}
              dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-around text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Mood</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Energy</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <span className="text-gray-600">Symptoms</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CycleChart;