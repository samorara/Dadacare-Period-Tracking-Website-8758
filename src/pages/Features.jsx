import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiHeart, FiTrendingUp, FiShoppingBag, FiZap, FiShield, FiUsers, FiSmartphone } = FiIcons;

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: FiCalendar,
      title: 'Smart Cycle Tracking',
      description: 'Advanced AI algorithms learn your unique patterns to provide accurate predictions and personalized insights about your menstrual cycle.',
      features: ['Predictive analytics', 'Pattern recognition', 'Symptom correlation', 'Fertility windows'],
      color: 'from-dadacare-purple to-dadacare-pink',
    },
    {
      icon: FiHeart,
      title: 'Comprehensive Health Monitoring',
      description: 'Track symptoms, mood, energy levels, and more with our comprehensive health monitoring system designed for women.',
      features: ['Symptom tracking', 'Mood analysis', 'Energy patterns', 'Sleep quality'],
      color: 'from-dadacare-coral to-dadacare-rose',
    },
    {
      icon: FiTrendingUp,
      title: 'Advanced Analytics',
      description: 'Beautiful charts and detailed analytics help you understand your body better and make informed health decisions.',
      features: ['Visual charts', 'Trend analysis', 'Health reports', 'Progress tracking'],
      color: 'from-dadacare-mint to-dadacare-sage',
    },
    {
      icon: FiZap,
      title: 'AI Health Assistant',
      description: 'Get instant answers to your health questions with our intelligent chatbot that understands your unique health profile.',
      features: ['24/7 availability', 'Personalized advice', 'Health education', 'Symptom guidance'],
      color: 'from-dadacare-gold to-yellow-500',
    },
    {
      icon: FiShoppingBag,
      title: 'Curated Wellness Products',
      description: 'Discover products tailored to your cycle phase and personal health needs through our integrated wellness marketplace.',
      features: ['Personalized recommendations', 'Cycle-based suggestions', 'Quality products', 'Expert curation'],
      color: 'from-dadacare-peach to-dadacare-coral',
    },
    {
      icon: FiShield,
      title: 'Privacy & Security',
      description: 'Your health data is protected with enterprise-grade encryption and privacy controls. We never share your personal information.',
      features: ['End-to-end encryption', 'HIPAA compliant', 'Local data storage', 'Privacy controls'],
      color: 'from-dadacare-lavender to-dadacare-purple',
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-dadacare-navy mb-6">
            Powerful Features for
            <span className="text-gradient block">Modern Women</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover all the ways Dadacare can help you understand your body, 
            track your health, and make informed decisions about your wellness journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card hover-lift"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl lg:text-3xl font-semibold text-dadacare-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-dadacare-purple rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
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
          <div className="bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Ready to Experience All Features?
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Download Dadacare today and discover how AI can transform your health journey.
            </p>
            <button className="bg-white text-dadacare-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors">
              Download Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;