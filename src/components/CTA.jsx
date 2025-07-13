import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiArrowRight, FiSmartphone } = FiIcons;

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-dadacare-navy to-dadacare-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-dadacare-pink">Health Journey?</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Join over 500,000 women who have already discovered the power of 
              AI-driven health insights. Download Dadacare today and start your 
              journey to better health understanding.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Free to download',
                'AI-powered insights',
                'Privacy protected',
                'Expert approved'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-white/90"
                >
                  <div className="w-2 h-2 bg-dadacare-pink rounded-full mr-3" />
                  {feature}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="bg-white text-dadacare-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors flex items-center justify-center">
                <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
                Download Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-dadacare-purple transition-colors flex items-center justify-center">
                Learn More
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - App Store Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-white/10 backdrop-blur-lg rounded-[3rem] p-3 border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-dadacare-pink to-dadacare-purple rounded-[2.5rem] flex items-center justify-center">
                  <SafeIcon icon={FiSmartphone} className="w-20 h-20 text-white/80" />
                </div>
              </div>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <div className="bg-black rounded-xl px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="text-white">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
                <div className="bg-black rounded-xl px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="text-white">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -left-8 w-16 h-16 bg-dadacare-pink/20 rounded-full flex items-center justify-center"
            >
              <SafeIcon icon={FiDownload} className="w-8 h-8 text-dadacare-pink" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;