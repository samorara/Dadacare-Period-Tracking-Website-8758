import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiSend, FiMessageCircle, FiZap } = FiIcons;

const AIAssistant = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI health assistant. I can help you understand your cycle, symptoms, and provide personalized wellness tips. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "Why am I feeling bloated?",
    "When is my fertile window?",
    "What can help with cramps?",
    "Is my cycle normal?"
  ];

  const handleSendMessage = (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: getAIResponse(message),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (question) => {
    const responses = {
      "Why am I feeling bloated?": "Bloating on day 24 of your cycle is very common! This happens due to hormonal changes before your period. Try drinking peppermint tea, gentle walking, or reducing salt intake to help ease the discomfort.",
      "When is my fertile window?": "Based on your cycle data, your fertile window is typically days 10-16 of your cycle. Your next fertile window should start in about 3 days. This is when you're most likely to conceive.",
      "What can help with cramps?": "For cramp relief, try heat therapy, gentle exercise, magnesium supplements, or anti-inflammatory medications. I noticed you logged severe cramps last cycle - consider discussing this with your doctor.",
      "Is my cycle normal?": "Your cycle appears healthy! You have a regular 28-day cycle with consistent patterns. Your period length of 5 days is perfectly normal. Keep tracking for continued insights."
    };

    return responses[question] || "I'd be happy to help! Based on your cycle data, I can provide personalized insights about your symptoms and patterns. Could you be more specific about what you'd like to know?";
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
        className="w-full max-w-md bg-white rounded-t-3xl h-3/4 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-full flex items-center justify-center mr-3">
              <SafeIcon icon={FiZap} className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">AI Assistant</h3>
              <p className="text-xs text-gray-500">Powered by Dadacare</p>
            </div>
          </div>
          <motion.button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiX} className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-dadacare-purple text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Questions */}
        <div className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {quickQuestions.map((question, index) => (
              <motion.button
                key={index}
                onClick={() => handleSendMessage(question)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                {question}
              </motion.button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-dadacare-purple"
            />
            <motion.button
              onClick={() => handleSendMessage()}
              className="p-3 bg-dadacare-purple text-white rounded-xl"
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiSend} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AIAssistant;