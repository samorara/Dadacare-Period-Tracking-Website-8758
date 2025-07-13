import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUsers, FiAward, FiTarget } = FiIcons;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: FiHeart,
      title: 'Women-Centered',
      description: 'Everything we do is designed with women\'s unique health needs in mind.',
      color: 'from-dadacare-coral to-dadacare-rose',
    },
    {
      icon: FiUsers,
      title: 'Community Driven',
      description: 'We believe in the power of women supporting women on their health journeys.',
      color: 'from-dadacare-mint to-dadacare-sage',
    },
    {
      icon: FiAward,
      title: 'Evidence-Based',
      description: 'Our features are backed by scientific research and medical expertise.',
      color: 'from-dadacare-gold to-yellow-500',
    },
    {
      icon: FiTarget,
      title: 'Privacy First',
      description: 'Your health data belongs to you. We prioritize privacy and security above all.',
      color: 'from-dadacare-purple to-dadacare-pink',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Board-certified gynecologist with 15 years of experience in women\'s health.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Former tech executive passionate about leveraging AI for women\'s health.',
    },
    {
      name: 'Dr. Michael Thompson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'AI researcher specializing in healthcare applications and predictive analytics.',
    },
    {
      name: 'Lisa Park',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      description: 'Product designer with expertise in creating intuitive health applications.',
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
            Empowering Women Through
            <span className="text-gradient block">Technology & Care</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Dadacare, we believe every woman deserves to understand her body and 
            take control of her health journey with confidence and knowledge.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-dadacare-navy mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dadacare was born from a simple yet powerful realization: women's health 
                has been overlooked by technology for too long. Our founder, Emily Rodriguez, 
                experienced firsthand the frustration of trying to understand her own body 
                without adequate tools or support.
              </p>
              <p>
                After years in the tech industry, Emily assembled a team of medical experts, 
                AI researchers, and passionate advocates to create something different. We 
                wanted to build more than just another period tracker – we wanted to create 
                a comprehensive health companion that truly understands women.
              </p>
              <p>
                Today, Dadacare serves over 500,000 women worldwide, combining cutting-edge 
                AI with compassionate care to provide personalized health insights that 
                empower women to make informed decisions about their bodies and their lives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                alt="Team working together"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-dadacare-navy text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="card hover-lift text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dadacare-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-dadacare-navy text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                className="card hover-lift text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-dadacare-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-dadacare-purple font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Be part of a community that's revolutionizing women's health through 
              technology, compassion, and understanding.
            </p>
            <button className="bg-white text-dadacare-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;