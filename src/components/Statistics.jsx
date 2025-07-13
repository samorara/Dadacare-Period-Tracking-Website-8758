import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      number: '500K+',
      label: 'Active Users',
      description: 'Women trust Dadacare worldwide',
      color: 'from-dadacare-purple to-dadacare-pink',
    },
    {
      number: '98%',
      label: 'Accuracy Rate',
      description: 'AI prediction accuracy',
      color: 'from-dadacare-coral to-dadacare-rose',
    },
    {
      number: '4.9/5',
      label: 'User Rating',
      description: 'Average app store rating',
      color: 'from-dadacare-mint to-dadacare-sage',
    },
    {
      number: '24/7',
      label: 'AI Support',
      description: 'Always available assistance',
      color: 'from-dadacare-gold to-yellow-500',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-dadacare-purple to-dadacare-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
            Trusted by Women Everywhere
          </h2>
          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of thousands of women who have already transformed their 
            health journey with Dadacare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg lg:text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-white/80">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;