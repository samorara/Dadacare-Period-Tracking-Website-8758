import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiDownload, FiStar, FiUsers, FiHeart } = FiIcons;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-dadacare-purple/10 text-dadacare-purple text-sm font-medium mb-6"
            >
              <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
              #1 AI-Powered Period Tracker
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dadacare-navy leading-tight mb-6"
            >
              Your{' '}
              <span className="text-gradient">AI-Powered</span>
              <br />
              Period Companion
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Track your cycle, understand your body, and get personalized health insights 
              with our intelligent period tracking app designed for modern women.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
                <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
                Download Free
              </button>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span>
                  <strong className="text-dadacare-navy">500K+</strong> users worldwide
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-dadacare-coral/20 rounded-full flex items-center justify-center"
              >
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-dadacare-coral" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-12 w-20 h-20 bg-dadacare-mint/20 rounded-full flex items-center justify-center"
              >
                <SafeIcon icon={FiUsers} className="w-10 h-10 text-dadacare-mint" />
              </motion.div>

              {/* Main Phone */}
              <div className="relative w-72 h-[600px] bg-gradient-to-br from-dadacare-purple to-dadacare-pink rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop"
                    alt="Dadacare App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiStar} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dadacare-navy">AI Insights</p>
                    <p className="text-xs text-gray-600">Personalized for you</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;