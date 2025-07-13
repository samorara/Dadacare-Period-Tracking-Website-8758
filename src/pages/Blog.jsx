import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiUser, FiArrowRight, FiClock, FiSearch, FiTag } = FiIcons;

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPost = {
    title: 'Understanding Your Menstrual Cycle: A Complete Guide',
    excerpt: 'Learn everything you need to know about your menstrual cycle, from hormonal changes to tracking methods that can help you understand your body better.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
    author: 'Dr. Sarah Chen',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Health Education',
  };

  const blogPosts = [
    {
      title: 'AI in Women\'s Health: The Future is Here',
      excerpt: 'Discover how artificial intelligence is revolutionizing women\'s healthcare and what it means for period tracking.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      author: 'Emily Rodriguez',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Technology',
    },
    {
      title: 'Managing PMS: Natural Remedies That Work',
      excerpt: 'Explore evidence-based natural approaches to managing PMS symptoms and improving your quality of life.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      author: 'Dr. Lisa Park',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Wellness',
    },
    {
      title: 'The Science of Cycle Syncing',
      excerpt: 'Learn how to align your lifestyle, diet, and exercise routine with your menstrual cycle for optimal health.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      author: 'Dr. Michael Thompson',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Health Education',
    },
    {
      title: 'Fertility Tracking: What You Need to Know',
      excerpt: 'A comprehensive guide to understanding fertility signs and using them to achieve or avoid pregnancy.',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      author: 'Dr. Sarah Chen',
      date: 'March 5, 2024',
      readTime: '9 min read',
      category: 'Fertility',
    },
    {
      title: 'Mental Health and Your Cycle',
      excerpt: 'Understanding the connection between hormonal changes and mental health throughout your menstrual cycle.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop',
      author: 'Dr. Amanda Williams',
      date: 'March 3, 2024',
      readTime: '6 min read',
      category: 'Mental Health',
    },
    {
      title: 'Nutrition for Every Phase of Your Cycle',
      excerpt: 'Discover how to eat for your cycle and support your body\'s changing needs throughout the month.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
      author: 'Jessica Taylor',
      date: 'March 1, 2024',
      readTime: '8 min read',
      category: 'Nutrition',
    },
  ];

  const categories = [
    'All',
    'Health Education',
    'Technology',
    'Wellness',
    'Fertility',
    'Mental Health',
    'Nutrition',
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            Health & Wellness
            <span className="text-gradient block">Blog</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights, health tips, and the latest research to help you 
            understand your body and optimize your wellness journey.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-dadacare-purple focus:border-transparent"
              />
              <SafeIcon 
                icon={FiSearch} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
              />
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card hover-lift mb-16 lg:mb-20 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-dadacare-purple/10 text-dadacare-purple px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="ml-2 bg-dadacare-pink/10 text-dadacare-pink px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-dadacare-navy mb-4">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <div className="flex items-center mr-4">
                  <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center mr-4">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>
              
              <button className="btn-primary self-start flex items-center">
                Read Article
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-dadacare-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="card hover-lift overflow-hidden"
            >
              <div className="relative mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <span className="absolute top-3 right-3 bg-dadacare-pink/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dadacare-navy mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <div className="flex items-center mr-3">
                    <SafeIcon icon={FiUser} className="w-3 h-3 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <button className="text-dadacare-purple font-medium text-sm flex items-center hover:text-dadacare-pink transition-colors">
                  Read More
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-dadacare-purple to-dadacare-pink rounded-3xl p-8 lg:p-12 text-white text-center"
        >
          <h2 className="text-3xl font-display font-bold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our newsletter and get the latest articles, health tips, and exclusive content 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-dadacare-purple rounded-lg font-medium hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;