
import React from 'react';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const FutureSection = ({ content }) => {
  return (
    <Section 
      title={content.title}
      bgClass="bg-gradient-to-br from-gray-700 via-slate-800 to-neutral-900 dark:from-gray-800 dark:via-slate-900 dark:to-neutral-950 pattern-bg-light dark:pattern-bg-dark"
      titleColor="text-white"
      textColor="text-gray-200 dark:text-gray-300"
    >
      <div className="space-y-16">
          <ScrollAnimationWrapper animationType="scale-in">
              <div className="text-center max-w-4xl mx-auto">
                  <p className="text-xl leading-relaxed mb-8">
                      {content.intro}
                  </p>
              </div>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.goals.map((goal, index) => (
                  <FeatureCard
                      key={index}
                      title={goal.title}
                      content={goal.content}
                      animationType="fade-in-up"
                      delay={index * 100}
                      cardBgClass="bg-white/20 dark:bg-black/20 backdrop-blur-lg"
                      titleColor="text-white"
                      contentColor="text-gray-100 dark:text-gray-200"
                  />
              ))}
          </div>

          <ScrollAnimationWrapper animationType="fade-in-up" delay={400}>
              <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl pulse-glow-strong">
                      🇻🇳 {content.slogan} 🇻🇳
                  </div>
              </div>
          </ScrollAnimationWrapper>
      </div>
    </Section>
  );
};
