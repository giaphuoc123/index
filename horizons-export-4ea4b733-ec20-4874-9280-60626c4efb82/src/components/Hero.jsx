import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export const Hero = ({ title, subtitle, exploreText }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const { theme } = useTheme();

  return (
    <motion.section 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden 
                  bg-gradient-to-br from-slate-800 via-purple-800 to-indigo-900 
                  dark:from-slate-900 dark:via-purple-900 dark:to-indigo-950 
                  ${theme === 'light' ? 'pattern-bg-light' : 'pattern-bg-dark'}`}
      style={{ y, opacity }}
    >
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-6 float-animation"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-100 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-32 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 mx-auto rounded-full pulse-glow"
          ></motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-sm"
        >
          ↓ {exploreText}
        </motion.div>
      </div>
    </motion.section>
  );
};