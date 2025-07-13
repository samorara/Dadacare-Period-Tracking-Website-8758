import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AppPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const screens = [
    {
      title: 'Dashboard',
      description: 'Your personalized health overview',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop',
      delay: 0.1,
    },
    {
      title: 'Calendar',
      description: 'Visual cycle tracking',
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=600&fit=crop',
      delay: 0.2,
    },
    {
      title: 'AI Assistant',
      description: 'Get instant health insights',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=600&fit=crop',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-dadacare-purple/5 to-dadacare-pink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-dadacare-navy mb-6">
            Beautiful Design
            <span className="text-gradient block">Meets Powerful Features</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of elegance and functionality with our 
            carefully crafted user interface.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: screen.delay }}
              className="text-center"
            >
              {/* Phone Mockup */}
              <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-br from-dadacare-purple to-dadacare-pink rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-xl lg:text-2xl font-semibold text-dadacare-navy mb-2">
                  {screen.title}
                </h3>
                <p className="text-gray-600">
                  {screen.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;