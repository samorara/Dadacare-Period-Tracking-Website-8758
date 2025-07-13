import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiCalendar, FiTrendingUp, FiHeart } = FiIcons;

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: FiDownload,
      title: 'Download & Setup',
      description: 'Get the app and complete your personalized health profile in under 2 minutes.',
      color: 'from-dadacare-purple to-dadacare-pink',
      number: '01',
    },
    {
      icon: FiCalendar,
      title: 'Track Your Cycle',
      description: 'Log your period, symptoms, and mood with our intuitive interface.',
      color: 'from-dadacare-coral to-dadacare-rose',
      number: '02',
    },
    {
      icon: FiTrendingUp,
      title: 'Get AI Insights',
      description: 'Receive personalized predictions and health recommendations powered by AI.',
      color: 'from-dadacare-mint to-dadacare-sage',
      number: '03',
    },
    {
      icon: FiHeart,
      title: 'Improve Your Health',
      description: 'Use insights to make informed decisions about your wellness journey.',
      color: 'from-dadacare-gold to-yellow-500',
      number: '04',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-dadacare-navy mb-6">
            How It Works
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with Dadacare in just a few simple steps and begin your journey 
            to better health understanding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative text-center group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-dadacare-purple/30 to-dadacare-pink/30 z-0" />
              )}

              {/* Step Number */}
              <div className="relative z-10 mb-6">
                <div className="text-6xl lg:text-7xl font-display font-bold text-dadacare-purple/10 mb-4">
                  {step.number}
                </div>
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold text-dadacare-navy mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;