
import React from 'react';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const EconomySection = ({ content }) => {
  return (
    <Section 
      title={content.title}
      bgClass="bg-gradient-to-br from-cyan-600 via-sky-700 to-blue-800 dark:from-cyan-800 dark:via-sky-900 dark:to-blue-950 pattern-bg-light dark:pattern-bg-dark"
      titleColor="text-white"
      textColor="text-gray-200 dark:text-gray-300"
    >
      <div className="space-y-16">
          <ScrollAnimationWrapper animationType="scale-in">
              <div className="text-center max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed">
                     {content.intro}
                  </p>
              </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimationWrapper animationType="fade-in-left">
                  <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-white">{content.achievementsTitle}</h3>
                       <p className="text-lg leading-relaxed">
                         {content.achievementsParagraph1}
                      </p>
                      <p className="text-lg leading-relaxed">
                          {content.achievementsParagraph2}
                      </p>
                      <p className="text-lg leading-relaxed">
                          {content.achievementsParagraph3}
                      </p>
                  </div>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animationType="fade-in-right" delay={200}>
                  <div className="relative">
                      <img
                          className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                          alt={content.imageAlt}
                         src="https://images.unsplash.com/photo-1617175952441-d201f532adb6" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  </div>
              </ScrollAnimationWrapper>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {content.sectors.map((sector, index) => (
                  <FeatureCard
                      key={index}
                      title={sector.title}
                      content={sector.content}
                      animationType="fade-in-up"
                      delay={index * 100}
                      cardBgClass="bg-white/20 dark:bg-black/20 backdrop-blur-lg"
                      titleColor="text-white"
                      contentColor="text-gray-100 dark:text-gray-200"
                  />
              ))}
          </div>
      </div>
    </Section>
  );
};
