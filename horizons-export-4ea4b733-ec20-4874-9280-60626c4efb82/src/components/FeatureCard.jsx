import React from 'react';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const FeatureCard = ({ title, content, delay = 0, animationType = "fade-in-up", cardBgClass, titleColor, contentColor }) => {
  return (
    <ScrollAnimationWrapper animationType={animationType} delay={delay}>
      <div className={`${cardBgClass} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10 dark:border-white/5`}>
        <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>
        <p className={`${contentColor} leading-relaxed`}>{content}</p>
      </div>
    </ScrollAnimationWrapper>
  );
};