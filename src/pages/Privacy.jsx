import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20 lg:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-dadacare-navy mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: April 2024</p>

          <div className="prose prose-lg max-w-none">
            <p>
              At Dadacare, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you use our app and services.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              Information We Collect
            </h2>
            
            <p>We collect the following types of information:</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Account Information:</strong> When you create an account, we collect your email 
                address, name, and password.
              </li>
              <li>
                <strong>Health Data:</strong> Information you voluntarily provide about your menstrual 
                cycle, symptoms, mood, and other health metrics.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our app, including 
                features you use and time spent in the app.
              </li>
              <li>
                <strong>Device Information:</strong> Device type, operating system, and other technical 
                information necessary for the app to function.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              How We Use Your Information
            </h2>
            
            <p>We use the information we collect to:</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Provide and improve our services</li>
              <li>Generate personalized insights and recommendations</li>
              <li>Analyze patterns to enhance our AI algorithms</li>
              <li>Communicate with you about your account and features</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              Data Security
            </h2>
            
            <p>
              We implement industry-standard security measures to protect your personal information. 
              This includes encryption, secure data storage, and regular security audits. Your health 
              data is stored with additional protections and is never sold to third parties.
            </p>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              Your Rights
            </h2>
            
            <p>You have the right to:</p>
            
            <ul className="list-disc pl-6 mb-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a common format</li>
              <li>Opt out of certain processing activities</li>
            </ul>

            <h2 className="text-2xl font-semibold text-dadacare-navy mt-8 mb-4">
              Contact Us
            </h2>
            
            <p>
              If you have any questions about this Privacy Policy or our data practices, please 
              contact us at <a href="mailto:privacy@dadacare.com" className="text-dadacare-purple">
              privacy@dadacare.com</a>.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p>
                By using Dadacare, you agree to the terms outlined in this Privacy Policy. We recommend 
                reviewing this policy periodically as it may be updated from time to time.
              </p>
              <p className="mt-4">
                For more information, please see our <Link to="/terms" className="text-dadacare-purple">
                Terms of Service</Link>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;