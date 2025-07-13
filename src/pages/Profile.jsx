import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCycle } from '../context/CycleContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import CycleChart from '../components/CycleChart';
import HealthInsights from '../components/HealthInsights';

const { FiUser, FiSettings, FiHeart, FiTrendingUp, FiCalendar, FiStar, FiShield } = FiIcons;

const Profile = () => {
  const { pregnancyMode, togglePregnancyMode, cycles } = useCycle();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FiUser },
    { id: 'insights', label: 'Insights', icon: FiTrendingUp },
    { id: 'settings', label: 'Settings', icon: FiSettings }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center mb-2">
            <SafeIcon icon={FiCalendar} className="w-5 h-5 text-dadacare-purple mr-2" />
            <span className="text-sm text-gray-600">Cycles Tracked</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{cycles.length}</p>
        </div>
        
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center mb-2">
            <SafeIcon icon={FiHeart} className="w-5 h-5 text-dadacare-purple mr-2" />
            <span className="text-sm text-gray-600">Avg Cycle</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">28 days</p>
        </div>
      </div>

      {/* Pregnancy Mode Toggle */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Pregnancy Mode</h3>
            <p className="text-sm text-gray-600">Switch to pregnancy tracking</p>
          </div>
          <motion.button
            onClick={() => togglePregnancyMode(12)}
            className={`relative w-12 h-6 rounded-full transition-all ${
              pregnancyMode ? 'bg-dadacare-purple' : 'bg-gray-300'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all ${
                pregnancyMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </motion.button>
        </div>
      </div>

      {/* Premium Features */}
      <div className="bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-2xl p-6 text-white">
        <div className="flex items-center mb-4">
          <SafeIcon icon={FiStar} className="w-6 h-6 mr-2" />
          <h3 className="font-semibold">Premium Features</h3>
        </div>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center">
            <SafeIcon icon={FiShield} className="w-4 h-4 mr-2" />
            <span className="text-sm">AI Health Assistant</span>
          </li>
          <li className="flex items-center">
            <SafeIcon icon={FiTrendingUp} className="w-4 h-4 mr-2" />
            <span className="text-sm">Advanced Analytics</span>
          </li>
          <li className="flex items-center">
            <SafeIcon icon={FiHeart} className="w-4 h-4 mr-2" />
            <span className="text-sm">Personalized Recommendations</span>
          </li>
        </ul>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-white text-dadacare-purple rounded-xl font-semibold"
        >
          Upgrade to Premium
        </motion.button>
      </div>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-6">
      <CycleChart />
      <HealthInsights />
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Cycle Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Average Cycle Length</label>
            <input
              type="number"
              defaultValue="28"
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dadacare-purple"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Period Length</label>
            <input
              type="number"
              defaultValue="5"
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dadacare-purple"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Notifications</h3>
        <div className="space-y-3">
          {['Period reminders', 'Fertile window alerts', 'Symptom logging reminders'].map(setting => (
            <div key={setting} className="flex items-center justify-between">
              <span className="text-gray-700">{setting}</span>
              <motion.button
                className="w-12 h-6 bg-dadacare-purple rounded-full relative"
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full" />
              </motion.button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-4">Privacy & Data</h3>
        <div className="space-y-3">
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors">
            Export Data
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors">
            Delete Account
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors">
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-full flex items-center justify-center mr-4">
            <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Sarah Johnson</h1>
            <p className="text-gray-600">Member since Jan 2024</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 bg-white rounded-2xl p-2 shadow-sm">
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center py-2 px-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-dadacare-purple text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={tab.icon} className="w-4 h-4 mr-2" />
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'insights' && renderInsights()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </motion.div>
  );
};

export default Profile;