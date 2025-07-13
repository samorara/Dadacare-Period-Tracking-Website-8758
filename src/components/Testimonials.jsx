import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiQuote } = FiIcons;

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'Dadacare has completely transformed how I understand my body. The AI insights are incredibly accurate and have helped me make better health decisions.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Software Engineer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'The predictions are spot-on! I love how the app learns from my patterns and gives me personalized recommendations. It\'s like having a health coach in my pocket.',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Teacher',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'Finally, a period tracker that actually understands women\'s needs. The symptom tracking is comprehensive and the interface is beautiful and intuitive.',
      rating: 5,
    },
    {
      name: 'Amanda Williams',
      role: 'Nurse',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      content: 'As a healthcare professional, I appreciate the medical accuracy of Dadacare. I recommend it to all my patients who want to better understand their cycles.',
      rating: 5,
    },
    {
      name: 'Jessica Taylor',
      role: 'Yoga Instructor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      content: 'The holistic approach to health tracking is amazing. I can see how my mood, energy, and symptoms all connect. It\'s helped me optimize my wellness routine.',
      rating: 5,
    },
    {
      name: 'Rachel Kim',
      role: 'Graduate Student',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
      content: 'The AI assistant is like having a knowledgeable friend who understands exactly what I\'m going through. It\'s been invaluable during stressful times.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-dadacare-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-dadacare-navy mb-6">
            What Women Are Saying
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real women who have transformed their health journey with Dadacare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card hover-lift"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiQuote} className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-center">
                  <div className="font-semibold text-dadacare-navy">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;