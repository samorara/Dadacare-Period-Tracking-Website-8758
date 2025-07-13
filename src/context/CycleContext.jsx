import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { addDays, differenceInDays, format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const CycleContext = createContext();

const initialState = {
  currentCycle: {
    startDate: new Date('2024-01-01'),
    length: 28,
    periodLength: 5,
    phase: 'follicular'
  },
  cycles: [
    { startDate: new Date('2024-01-01'), endDate: new Date('2024-01-28'), length: 28 },
    { startDate: new Date('2023-12-04'), endDate: new Date('2023-12-31'), length: 28 },
    { startDate: new Date('2023-11-06'), endDate: new Date('2023-12-03'), length: 28 }
  ],
  symptoms: [],
  predictions: {
    nextPeriod: addDays(new Date(), 7),
    ovulation: addDays(new Date(), 14),
    fertileWindow: {
      start: addDays(new Date(), 10),
      end: addDays(new Date(), 16)
    }
  },
  pregnancyMode: false,
  pregnancyWeek: 0,
  selectedDate: new Date(),
  insights: [
    {
      id: 1,
      type: 'pattern',
      title: 'Mood Pattern Detected',
      message: 'Your mood tends to dip 3-4 days before your period. This is completely normal due to hormonal changes.',
      date: new Date(),
      priority: 'medium'
    }
  ]
};

function cycleReducer(state, action) {
  switch (action.type) {
    case 'LOG_PERIOD_START':
      return {
        ...state,
        currentCycle: {
          ...state.currentCycle,
          startDate: action.date
        }
      };
    case 'LOG_PERIOD_END':
      return {
        ...state,
        currentCycle: {
          ...state.currentCycle,
          periodLength: differenceInDays(action.date, state.currentCycle.startDate) + 1
        }
      };
    case 'LOG_SYMPTOM':
      return {
        ...state,
        symptoms: [...state.symptoms, {
          id: Date.now(),
          date: action.date,
          category: action.category,
          symptom: action.symptom,
          intensity: action.intensity
        }]
      };
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.date
      };
    case 'TOGGLE_PREGNANCY_MODE':
      return {
        ...state,
        pregnancyMode: !state.pregnancyMode,
        pregnancyWeek: action.week || 0
      };
    case 'UPDATE_PREDICTIONS':
      return {
        ...state,
        predictions: action.predictions
      };
    default:
      return state;
  }
}

export function CycleProvider({ children }) {
  const [state, dispatch] = useReducer(cycleReducer, initialState);

  const logPeriodStart = (date = new Date()) => {
    dispatch({ type: 'LOG_PERIOD_START', date });
  };

  const logPeriodEnd = (date = new Date()) => {
    dispatch({ type: 'LOG_PERIOD_END', date });
  };

  const logSymptom = (date, category, symptom, intensity) => {
    dispatch({ type: 'LOG_SYMPTOM', date, category, symptom, intensity });
  };

  const setSelectedDate = (date) => {
    dispatch({ type: 'SET_SELECTED_DATE', date });
  };

  const togglePregnancyMode = (week) => {
    dispatch({ type: 'TOGGLE_PREGNANCY_MODE', week });
  };

  const getCycleDay = (date) => {
    return differenceInDays(date, state.currentCycle.startDate) + 1;
  };

  const getDayType = (date) => {
    const cycleDay = getCycleDay(date);
    
    if (cycleDay <= state.currentCycle.periodLength) {
      return 'period';
    }
    
    const ovulationDay = 14;
    const fertileStart = ovulationDay - 5;
    const fertileEnd = ovulationDay + 1;
    
    if (cycleDay === ovulationDay) {
      return 'ovulation';
    }
    
    if (cycleDay >= fertileStart && cycleDay <= fertileEnd) {
      return 'fertile';
    }
    
    return 'normal';
  };

  const getFlowIntensity = (date) => {
    const cycleDay = getCycleDay(date);
    if (cycleDay <= state.currentCycle.periodLength) {
      if (cycleDay <= 2) return 'heavy';
      if (cycleDay <= 4) return 'medium';
      return 'light';
    }
    return null;
  };

  const value = {
    ...state,
    logPeriodStart,
    logPeriodEnd,
    logSymptom,
    setSelectedDate,
    togglePregnancyMode,
    getCycleDay,
    getDayType,
    getFlowIntensity
  };

  return (
    <CycleContext.Provider value={value}>
      {children}
    </CycleContext.Provider>
  );
}

export function useCycle() {
  const context = useContext(CycleContext);
  if (!context) {
    throw new Error('useCycle must be used within a CycleProvider');
  }
  return context;
}