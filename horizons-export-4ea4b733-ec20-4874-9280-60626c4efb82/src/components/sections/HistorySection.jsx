
import React from 'react';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const HistorySection = ({ content }) => {
  return (
    <Section 
      title={content.title}
      bgClass="bg-gradient-to-br from-sky-600 via-indigo-600 to-purple-700 dark:from-sky-800 dark:via-indigo-800 dark:to-purple-900 pattern-bg-light dark:pattern-bg-dark"
      titleColor="text-white"
      textColor="text-gray-200 dark:text-gray-300"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollAnimationWrapper animationType="fade-in-left">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              {content.paragraph1}
            </p>
            <p className="text-lg leading-relaxed">
              {content.paragraph2}
            </p>
          </div>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper animationType="fade-in-right" delay={200}>
          <div className="relative">
            <img  
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              alt={content.imageAlt}
             src="https://images.unsplash.com/photo-1545511062-39910986b73e" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {content.features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            content={feature.content}
            delay={index * 100}
            cardBgClass="bg-white/20 dark:bg-black/20 backdrop-blur-lg"
            titleColor="text-white"
            contentColor="text-gray-100 dark:text-gray-200"
          />
        ))}
      </div>
    </Section>
  );
};
