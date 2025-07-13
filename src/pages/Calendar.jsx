import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { useCycle } from '../context/CycleContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import DayDetailCard from '../components/DayDetailCard';

const { FiChevronLeft, FiChevronRight, FiCalendar } = FiIcons;

const Calendar = () => {
  const { getDayType, getFlowIntensity, setSelectedDate, selectedDate } = useCycle();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDayDetail, setShowDayDetail] = useState(false);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const navigateMonth = (direction) => {
    setCurrentDate(prev => direction === 'next' ? addMonths(prev, 1) : subMonths(prev, 1));
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setShowDayDetail(true);
  };

  const getDayStyles = (day) => {
    const dayType = getDayType(day);
    const flowIntensity = getFlowIntensity(day);
    const isToday = isSameDay(day, new Date());
    const isSelected = isSameDay(day, selectedDate);

    let bgColor = 'bg-white';
    let textColor = 'text-gray-700';
    let borderColor = 'border-gray-200';

    switch (dayType) {
      case 'period':
        bgColor = 'bg-period-rose';
        textColor = 'text-white';
        break;
      case 'fertile':
        bgColor = 'bg-fertile-lavender';
        textColor = 'text-white';
        break;
      case 'ovulation':
        bgColor = 'bg-ovulation-gold';
        textColor = 'text-white';
        break;
    }

    if (isToday) {
      borderColor = 'border-dadacare-purple border-2';
    }

    if (isSelected) {
      borderColor = 'border-dadacare-pink border-2';
    }

    return `${bgColor} ${textColor} ${borderColor}`;
  };

  const getFlowIndicator = (day) => {
    const intensity = getFlowIntensity(day);
    if (!intensity) return null;

    const dots = {
      light: 1,
      medium: 2,
      heavy: 3
    };

    return (
      <div className="flex justify-center mt-1 space-x-0.5">
        {Array.from({ length: dots[intensity] }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-white rounded-full opacity-80" />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20"
    >
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <SafeIcon icon={FiCalendar} className="w-6 h-6 mr-2 text-dadacare-purple" />
            Calendar
          </h1>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentDate(new Date())}
            className="px-4 py-2 bg-dadacare-purple text-white rounded-full text-sm font-medium"
          >
            Today
          </motion.button>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateMonth('prev')}
            className="p-2 rounded-full bg-white shadow-sm"
          >
            <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-gray-600" />
          </motion.button>
          
          <motion.h2
            key={currentDate.toString()}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold text-gray-800"
          >
            {format(currentDate, 'MMMM yyyy')}
          </motion.h2>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateMonth('next')}
            className="p-2 rounded-full bg-white shadow-sm"
          >
            <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="px-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          {/* Week Headers */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map(day => (
              <motion.button
                key={day.toString()}
                onClick={() => handleDayClick(day)}
                className={`
                  cycle-day relative aspect-square rounded-xl border transition-all duration-200
                  ${getDayStyles(day)}
                  ${!isSameMonth(day, currentDate) ? 'opacity-30' : ''}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-sm font-medium">
                    {format(day, 'd')}
                  </span>
                  {getFlowIndicator(day)}
                  {getDayType(day) === 'ovulation' && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">Legend</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-period-rose rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Period</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-fertile-lavender rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Fertile</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-ovulation-gold rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Ovulation</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-dadacare-purple rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Day Detail Modal */}
      <AnimatePresence>
        {showDayDetail && (
          <DayDetailCard
            date={selectedDate}
            onClose={() => setShowDayDetail(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Calendar;