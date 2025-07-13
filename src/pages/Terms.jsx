import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen pt-20 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-dadacare-navy mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: April 2024</p>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Dadacare. These Terms of Service ("Terms") govern your use of the Dadacare 
              application and services. By accessing or using our app, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            
            <p>
              By creating an account or using any part of our services, you acknowledge that you have 
              read, understood, and agree to be bound by these Terms. If you do not agree with any part 
              of these Terms, you may not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              2. Description of Services
            </h2>
            
            <p>
              Dadacare provides a period tracking and women's health platform that includes AI-powered 
              insights, cycle predictions, symptom tracking, and health recommendations. We may update, 
              modify, or enhance our services at any time.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              3. Account Registration
            </h2>
            
            <p>
              To use certain features of our service, you must create an account. You are responsible for:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              4. Health Information
            </h2>
            
            <p>
              While Dadacare provides health-related information and insights, our services are not 
              intended to replace professional medical advice, diagnosis, or treatment. Always consult 
              with a qualified healthcare provider for medical questions or concerns.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              5. Privacy
            </h2>
            
            <p>
              Our <Link to="/privacy" className="text-dadacare-purple">Privacy Policy</Link> explains 
              how we collect, use, and protect your personal information. By using Dadacare, you consent 
              to our data practices as described in the Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              6. Subscription and Billing
            </h2>
            
            <p>
              Dadacare offers both free and premium subscription options. By purchasing a premium 
              subscription, you agree to the following:
            </p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>You will be charged according to your selected plan</li>
              <li>Subscriptions automatically renew unless canceled</li>
              <li>You can cancel your subscription at any time</li>
              <li>Refunds are provided in accordance with platform policies</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              7. Intellectual Property
            </h2>
            
            <p>
              All content, features, and functionality within Dadacare, including but not limited to text, 
              graphics, logos, and software, are owned by Dadacare or our licensors and are protected by 
              intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              8. Termination
            </h2>
            
            <p>
              We reserve the right to suspend or terminate your account for violations of these Terms 
              or for any other reason at our discretion. You may terminate your account at any time by 
              contacting us.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              9. Changes to Terms
            </h2>
            
            <p>
              We may modify these Terms from time to time. We will notify you of significant changes. 
              Your continued use of Dadacare after changes indicates your acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              10. Contact
            </h2>
            
            <p>
              If you have questions about these Terms, please contact us at{' '}
              <a href="mailto:terms@dadacare.com" className="text-dadacare-purple">
                terms@dadacare.com
              </a>.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p>
                By using Dadacare, you acknowledge that you have read and understand these Terms and agree 
                to be bound by them.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;