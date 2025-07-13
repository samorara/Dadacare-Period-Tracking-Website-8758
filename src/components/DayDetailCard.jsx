import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useCycle } from '../context/CycleContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiPlus, FiDroplet } = FiIcons;

const DayDetailCard = ({ date, onClose }) => {
  const { getDayType, getFlowIntensity, logSymptom, symptoms } = useCycle();
  const [selectedFlow, setSelectedFlow] = useState(getFlowIntensity(date) || 'none');
  
  const dayType = getDayType(date);
  const daySymptoms = symptoms.filter(s => 
    format(s.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
  );

  const flowOptions = [
    { value: 'none', label: 'No Flow', color: 'bg-gray-200' },
    { value: 'spotting', label: 'Spotting', color: 'bg-pink-200' },
    { value: 'light', label: 'Light', color: 'bg-pink-400' },
    { value: 'medium', label: 'Medium', color: 'bg-pink-600' },
    { value: 'heavy', label: 'Heavy', color: 'bg-pink-800' }
  ];

  const quickSymptoms = [
    { name: 'Cramps', icon: '🤕' },
    { name: 'Bloating', icon: '🎈' },
    { name: 'Headache', icon: '🤯' },
    { name: 'Mood Swings', icon: '😤' }
  ];

  const handleQuickSymptom = (symptom) => {
    logSymptom(date, 'Physical', symptom.name, 3);
  };

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
        className="w-full max-w-md bg-white rounded-t-3xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {format(date, 'EEEE, MMMM d')}
            </h3>
            <p className="text-sm text-gray-600 capitalize">{dayType} day</p>
          </div>
          <motion.button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>

        <div className="p-6 space-y-6">
          {/* Flow Tracking */}
          <div>
            <h4 className="font-medium text-gray-800 mb-3 flex items-center">
              <SafeIcon icon={FiDroplet} className="w-4 h-4 mr-2" />
              Flow Intensity
            </h4>
            <div className="flex space-x-2">
              {flowOptions.map(option => (
                <motion.button
                  key={option.value}
                  onClick={() => setSelectedFlow(option.value)}
                  className={`flex-1 p-3 rounded-xl border-2 transition-all ${
                    selectedFlow === option.value
                      ? 'border-dadacare-purple bg-purple-50'
                      : 'border-gray-200 bg-white'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-4 h-4 ${option.color} rounded-full mx-auto mb-1`} />
                  <p className="text-xs text-gray-600">{option.label}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quick Symptoms */}
          <div>
            <h4 className="font-medium text-gray-800 mb-3">Quick Log</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickSymptoms.map(symptom => (
                <motion.button
                  key={symptom.name}
                  onClick={() => handleQuickSymptom(symptom)}
                  className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl mb-1">{symptom.icon}</div>
                  <p className="text-sm text-gray-700">{symptom.name}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Logged Symptoms */}
          {daySymptoms.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Logged Today</h4>
              <div className="space-y-2">
                {daySymptoms.map(symptom => (
                  <div key={symptom.id} className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                    <span className="text-sm text-gray-700">{symptom.symptom}</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mr-1 ${
                            i < symptom.intensity ? 'bg-dadacare-purple' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add More Button */}
          <motion.button
            onClick={() => {
              onClose();
              // Navigate to log page
            }}
            className="w-full p-4 bg-dadacare-purple text-white rounded-xl font-medium flex items-center justify-center"
            whileTap={{ scale: 0.98 }}
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
            Add More Symptoms
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DayDetailCard;