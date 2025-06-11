
import React from 'react';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const EducationSection = ({ content }) => {
  return (
    <Section 
      title={content.title}
      bgClass="bg-gradient-to-br from-fuchsia-600 via-purple-700 to-violet-800 dark:from-fuchsia-800 dark:via-purple-900 dark:to-violet-950 pattern-bg-light dark:pattern-bg-dark"
      titleColor="text-white"
      textColor="text-gray-200 dark:text-gray-300"
    >
      <div className="space-y-16">
          <ScrollAnimationWrapper animationType="fade-in-up">
              <div className="text-center max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed">
                      {content.intro}
                  </p>
              </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimationWrapper animationType="fade-in-left">
                  <div className="relative">
                      <img
                          className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                          alt={content.imageAlt}
                         src="https://images.unsplash.com/photo-1692872031431-930661241a9a" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  </div>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animationType="fade-in-right" delay={200}>
                  <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-white">{content.systemTitle}</h3>
                      <p className="text-lg leading-relaxed">
                          {content.systemParagraph1}
                      </p>
                      <p className="text-lg leading-relaxed">
                         {content.systemParagraph2}
                      </p>
                      <p className="text-lg leading-relaxed">
                         {content.systemParagraph3}
                      </p>
                  </div>
              </ScrollAnimationWrapper>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {content.areas.map((area, index) => (
                  <FeatureCard
                      key={index}
                      title={area.title}
                      content={area.content}
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
