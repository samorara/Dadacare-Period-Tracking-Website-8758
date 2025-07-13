import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiStar, FiZap, FiShield, FiHeart } = FiIcons;

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for getting started with period tracking',
      price: { monthly: 0, annual: 0 },
      features: [
        'Basic period tracking',
        'Cycle predictions',
        'Symptom logging',
        'Calendar view',
        'Export data',
        'Community access'
      ],
      color: 'from-dadacare-mint to-dadacare-sage',
      icon: FiHeart,
      popular: false,
    },
    {
      name: 'Premium',
      description: 'Advanced features for comprehensive health tracking',
      price: { monthly: 9.99, annual: 79.99 },
      features: [
        'Everything in Basic',
        'AI health insights',
        'Advanced analytics',
        'Fertility tracking',
        'Mood analysis',
        'Personalized recommendations',
        'Priority support',
        'Ad-free experience'
      ],
      color: 'from-dadacare-purple to-dadacare-pink',
      icon: FiStar,
      popular: true,
    },
    {
      name: 'Pro',
      description: 'Complete health companion with premium features',
      price: { monthly: 19.99, annual: 159.99 },
      features: [
        'Everything in Premium',
        'AI health assistant',
        'Personalized product recommendations',
        'Advanced health reports',
        'Telehealth integration',
        'Custom meal plans',
        'Workout recommendations',
        'Dedicated health coach'
      ],
      color: 'from-dadacare-gold to-yellow-500',
      icon: FiZap,
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption and follow HIPAA compliance standards to protect your health data.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked.',
    },
    {
      question: 'Can I use the app offline?',
      answer: 'Yes, you can track your data offline and it will sync when you reconnect to the internet.',
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
            Choose Your
            <span className="text-gradient block">Health Journey</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start free and upgrade as you discover the power of AI-driven health insights. 
            All plans include our core tracking features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-dadacare-navy font-semibold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isAnnual ? 'bg-dadacare-purple' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-dadacare-navy font-semibold' : 'text-gray-600'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-dadacare-purple text-white px-2 py-1 rounded-full text-xs font-medium">
                Save 33%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative card hover-lift ${
                plan.popular ? 'border-2 border-dadacare-purple' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-dadacare-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                <SafeIcon icon={plan.icon} className="w-8 h-8 text-white" />
              </div>

              {/* Plan Details */}
              <h3 className="text-2xl font-semibold text-dadacare-navy mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-dadacare-navy">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-600 ml-2">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                {isAnnual && plan.price.monthly > 0 && (
                  <p className="text-sm text-gray-500 mt-1">
                    ${(plan.price.annual / 12).toFixed(2)} per month
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-dadacare-purple mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-dadacare-purple text-white hover:bg-dadacare-purple/90'
                    : 'bg-gray-100 text-dadacare-navy hover:bg-gray-200'
                }`}
              >
                {plan.price.monthly === 0 ? 'Get Started Free' : 'Start Free Trial'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-dadacare-navy text-center mb-12">
            Why Choose Dadacare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiShield,
                title: 'Privacy First',
                description: 'Your health data is encrypted and never shared with third parties.',
              },
              {
                icon: FiZap,
                title: 'AI-Powered',
                description: 'Advanced machine learning provides personalized insights.',
              },
              {
                icon: FiHeart,
                title: 'Expert Approved',
                description: 'Developed with medical professionals and health experts.',
              },
            ].map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dadacare-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-dadacare-navy text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-dadacare-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-3xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Health?
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Join over 500,000 women who trust Dadacare with their health journey.
            </p>
            <button className="bg-white text-dadacare-purple px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;