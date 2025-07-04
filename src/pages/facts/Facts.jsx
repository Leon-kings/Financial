/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { People, CheckCircle, Engineering, EmojiEvents } from '@mui/icons-material';

const CounterItem = ({ icon, endValue, label, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in ms
      const startTime = Date.now();
      
      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentCount = Math.floor(progress * endValue);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-blue-500 mb-3 flex justify-center">
        {React.cloneElement(icon, { className: "text-4xl" })}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-2">
        {count.toLocaleString()}+
      </h2>
      <span className="text-lg text-gray-400">{label}</span>
      <div className="bg-white h-0.5 w-1/4 mx-auto mt-4"></div>
    </motion.div>
  );
};

export const FactsSection = () => {
  const facts = [
    {
      icon: <People />,
      value: 1234,
      label: "Happy Clients",
      delay: 0.1
    },
    {
      icon: <CheckCircle />,
      value: 1234,
      label: "Projects Completed",
      delay: 0.3
    },
    {
      icon: <Engineering />,
      value: 1234,
      label: "Dedicated Staff",
      delay: 0.5
    },
    {
      icon: <EmojiEvents />,
      value: 1234,
      label: "Awards Achieved",
      delay: 0.7
    }
  ];

  return (
    <div className="bg-blue-200 rounded-xl py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <CounterItem
              key={index}
              icon={fact.icon}
              endValue={fact.value}
              label={fact.label}
              delay={fact.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

