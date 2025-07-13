import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageCircle, FiHelpCircle, FiBriefcase } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! We\'ll get back to you soon.');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'hello@dadacare.com',
      description: 'Send us an email anytime',
      color: 'from-dadacare-purple to-dadacare-pink',
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
      color: 'from-dadacare-coral to-dadacare-rose',
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: '123 Health Street, San Francisco, CA 94103',
      description: 'Our headquarters',
      color: 'from-dadacare-mint to-dadacare-sage',
    },
    {
      icon: FiClock,
      title: 'Support Hours',
      details: '24/7 AI Assistant',
      description: 'Get instant help anytime',
      color: 'from-dadacare-gold to-yellow-500',
    },
  ];

  const supportOptions = [
    {
      icon: FiMessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: 'Start Chat',
      color: 'from-dadacare-purple to-dadacare-pink',
    },
    {
      icon: FiHelpCircle,
      title: 'Help Center',
      description: 'Find answers to common questions',
      action: 'Browse Articles',
      color: 'from-dadacare-mint to-dadacare-sage',
    },
    {
      icon: FiBriefcase,
      title: 'Business Inquiries',
      description: 'Partnership and collaboration',
      action: 'Contact Sales',
      color: 'from-dadacare-gold to-yellow-500',
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
            Get in Touch
            <span className="text-gradient block">We're Here to Help</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about Dadacare? Need support? Want to share feedback? 
            We'd love to hear from you and help you on your health journey.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card hover-lift text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <SafeIcon icon={info.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-dadacare-navy mb-2">
                {info.title}
              </h3>
              <p className="text-dadacare-purple font-medium mb-2">
                {info.details}
              </p>
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card"
          >
            <h2 className="text-3xl font-display font-bold text-dadacare-navy mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dadacare-purple focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dadacare-purple focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dadacare-purple focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dadacare-purple focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary flex items-center justify-center ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Support Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-dadacare-navy mb-6">
                Other Ways to Get Help
              </h2>
              <p className="text-gray-600 mb-8">
                Choose the option that works best for you. We're committed to 
                providing excellent support through multiple channels.
              </p>
            </div>

            <div className="space-y-6">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="card hover-lift"
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <SafeIcon icon={option.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-dadacare-navy mb-2">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {option.description}
                      </p>
                      <button className="btn-secondary text-sm">
                        {option.action}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Need Immediate Help?
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Our AI assistant is available 24/7 to answer your questions and 
              provide instant support right within the app.
            </p>
            <button className="bg-white text-dadacare-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors">
              Chat with AI Assistant
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;