import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useCycle } from '../context/CycleContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiCheck, FiX } = FiIcons;

const LogSymptom = () => {
  const { logSymptom } = useCycle();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('Physical');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = {
    Physical: [
      { name: 'Cramps', icon: '🤕', color: 'bg-red-100 text-red-600' },
      { name: 'Bloating', icon: '🎈', color: 'bg-orange-100 text-orange-600' },
      { name: 'Headache', icon: '🤯', color: 'bg-purple-100 text-purple-600' },
      { name: 'Fatigue', icon: '😴', color: 'bg-blue-100 text-blue-600' },
      { name: 'Nausea', icon: '🤢', color: 'bg-green-100 text-green-600' },
      { name: 'Breast Tenderness', icon: '💔', color: 'bg-pink-100 text-pink-600' }
    ],
    Mood: [
      { name: 'Irritable', icon: '😠', color: 'bg-red-100 text-red-600' },
      { name: 'Anxious', icon: '😰', color: 'bg-yellow-100 text-yellow-600' },
      { name: 'Sad', icon: '😢', color: 'bg-blue-100 text-blue-600' },
      { name: 'Happy', icon: '😊', color: 'bg-green-100 text-green-600' },
      { name: 'Energetic', icon: '⚡', color: 'bg-orange-100 text-orange-600' },
      { name: 'Calm', icon: '😌', color: 'bg-purple-100 text-purple-600' }
    ],
    Discharge: [
      { name: 'Dry', icon: '🏜️', color: 'bg-yellow-100 text-yellow-600' },
      { name: 'Sticky', icon: '🍯', color: 'bg-orange-100 text-orange-600' },
      { name: 'Creamy', icon: '🥛', color: 'bg-blue-100 text-blue-600' },
      { name: 'Egg White', icon: '🥚', color: 'bg-green-100 text-green-600' }
    ],
    Other: [
      { name: 'Acne', icon: '🔴', color: 'bg-red-100 text-red-600' },
      { name: 'Cravings', icon: '🍫', color: 'bg-brown-100 text-brown-600' },
      { name: 'Insomnia', icon: '🌙', color: 'bg-indigo-100 text-indigo-600' },
      { name: 'Hot Flashes', icon: '🔥', color: 'bg-orange-100 text-orange-600' }
    ]
  };

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prev => {
      const existing = prev.find(s => s.name === symptom.name);
      if (existing) {
        return prev.filter(s => s.name !== symptom.name);
      }
      return [...prev, { ...symptom, intensity: 3 }];
    });
  };

  const handleIntensityChange = (symptomName, intensity) => {
    setSelectedSymptoms(prev =>
      prev.map(s => s.name === symptomName ? { ...s, intensity } : s)
    );
  };

  const handleSubmit = () => {
    selectedSymptoms.forEach(symptom => {
      logSymptom(selectedDate, selectedCategory, symptom.name, symptom.intensity);
    });
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedSymptoms([]);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
          <SafeIcon icon={FiPlus} className="w-6 h-6 mr-2 text-dadacare-purple" />
          Log Symptoms
        </h1>
        
        {/* Date Selector */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Date</p>
          <input
            type="date"
            value={format(selectedDate, 'yyyy-MM-dd')}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dadacare-purple"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-6 mb-6">
        <div className="flex space-x-2 bg-white rounded-2xl p-2 shadow-sm">
          {Object.keys(categories).map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex-1 py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-dadacare-purple text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Symptoms Grid */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-3">
          {categories[selectedCategory].map(symptom => {
            const isSelected = selectedSymptoms.some(s => s.name === symptom.name);
            const selectedSymptom = selectedSymptoms.find(s => s.name === symptom.name);
            
            return (
              <motion.div
                key={symptom.name}
                className={`p-4 rounded-2xl border-2 transition-all ${
                  isSelected 
                    ? 'border-dadacare-purple bg-purple-50' 
                    : 'border-gray-200 bg-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.button
                  onClick={() => handleSymptomToggle(symptom)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{symptom.icon}</span>
                    {isSelected && (
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-dadacare-purple" />
                    )}
                  </div>
                  <p className="font-medium text-gray-800">{symptom.name}</p>
                </motion.button>
                
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-3 border-t border-gray-200"
                  >
                    <p className="text-xs text-gray-600 mb-2">Intensity</p>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map(level => (
                        <motion.button
                          key={level}
                          onClick={() => handleIntensityChange(symptom.name, level)}
                          className={`w-6 h-6 rounded-full border-2 transition-all ${
                            selectedSymptom?.intensity >= level
                              ? 'bg-dadacare-purple border-dadacare-purple'
                              : 'border-gray-300'
                          }`}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      {selectedSymptoms.length > 0 && (
        <div className="px-6">
          <motion.button
            onClick={handleSubmit}
            className="w-full p-4 bg-gradient-to-r from-dadacare-purple to-dadacare-pink text-white rounded-2xl font-semibold shadow-lg"
            whileTap={{ scale: 0.98 }}
            disabled={showSuccess}
          >
            {showSuccess ? (
              <div className="flex items-center justify-center">
                <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2" />
                Symptoms Logged!
              </div>
            ) : (
              `Log ${selectedSymptoms.length} Symptom${selectedSymptoms.length > 1 ? 's' : ''}`
            )}
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default LogSymptom;