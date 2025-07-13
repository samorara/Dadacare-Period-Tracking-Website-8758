import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import CTA from '../components/CTA';
import AppPreview from '../components/AppPreview';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dadacare-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-96 right-10 w-96 h-96 bg-dadacare-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-dadacare-mint/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Features />
      </motion.section>

      {/* App Preview */}
      <AppPreview />

      {/* How It Works */}
      <HowItWorks />

      {/* Statistics */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;