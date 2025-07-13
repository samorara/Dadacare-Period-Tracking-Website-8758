import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiHeart, FiTrendingUp, FiShoppingBag, FiZap, FiShield } = FiIcons;

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FiCalendar,
      title: 'Smart Cycle Tracking',
      description: 'AI-powered predictions that learn from your unique patterns for accurate cycle forecasting.',
      color: 'from-dadacare-purple to-dadacare-pink',
      delay: 0.1,
    },
    {
      icon: FiHeart,
      title: 'Symptom Intelligence',
      description: 'Track symptoms with our comprehensive library and get personalized insights about your health.',
      color: 'from-dadacare-coral to-dadacare-rose',
      delay: 0.2,
    },
    {
      icon: FiTrendingUp,
      title: 'Health Analytics',
      description: 'Beautiful charts and trends that help you understand your body better than ever before.',
      color: 'from-dadacare-mint to-dadacare-sage',
      delay: 0.3,
    },
    {
      icon: FiZap,
      title: 'AI Health Assistant',
      description: 'Get instant answers to your health questions with our intelligent chatbot companion.',
      color: 'from-dadacare-gold to-yellow-500',
      delay: 0.4,
    },
    {
      icon: FiShoppingBag,
      title: 'Curated Wellness',
      description: 'Discover products tailored to your cycle phase and personal health needs.',
      color: 'from-dadacare-peach to-dadacare-coral',
      delay: 0.5,
    },
    {
      icon: FiShield,
      title: 'Privacy First',
      description: 'Your data is encrypted and secure. We never share your personal health information.',
      color: 'from-dadacare-lavender to-dadacare-purple',
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-dadacare-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-dadacare-navy mb-6">
            Everything You Need for
            <span className="text-gradient block">Better Health</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dadacare combines cutting-edge AI technology with thoughtful design to give you 
            the most comprehensive period tracking experience available.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: feature.delay }}
              className="group"
            >
              <div className="card hover-lift h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-semibold text-dadacare-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 lg:mt-20"
        >
          <button className="btn-primary text-lg px-8 py-4">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;