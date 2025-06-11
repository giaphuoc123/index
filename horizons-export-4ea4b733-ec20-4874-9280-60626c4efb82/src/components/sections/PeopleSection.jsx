
import React from 'react';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const PeopleSection = ({ content }) => {
  return (
    <Section 
      title={content.title}
      bgClass="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 dark:from-emerald-700 dark:via-teal-800 dark:to-cyan-900 pattern-bg-light dark:pattern-bg-dark"
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
          {content.characteristics.map((char, index) => (
             <FeatureCard
              key={index}
              title={char.title}
              content={char.content}
              animationType="fade-in-up"
              delay={index * 100}
              cardBgClass="bg-white/20 dark:bg-black/20 backdrop-blur-lg"
              titleColor="text-white"
              contentColor="text-gray-100 dark:text-gray-200"
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <ScrollAnimationWrapper animationType="fade-in-left">
            <div className="relative">
              <img  
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                alt={content.imageAlt}
               src="https://media.istockphoto.com/id/862449744/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-vi%E1%BB%87t-nam-b%C3%A1n-d%E1%BB%ABa-tr%C3%AAn-ch%E1%BB%A3-n%E1%BB%95i-%C4%91%E1%BB%93ng-b%E1%BA%B1ng-s%C3%B4ng-c%E1%BB%ADu-long-vi%E1%BB%87t-nam.webp?s=1024x1024&w=is&k=20&c=kSJxfkvsLbQpfcpfYMnqKN7cekL5jMnj0UePbDwwoGM=" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper animationType="fade-in-right" delay={200}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">{content.personalityTitle}</h3>
              <p className="text-lg leading-relaxed">
                {content.personalityParagraph1}
              </p>
              <p className="text-lg leading-relaxed">
                {content.personalityParagraph2}
              </p>
               <p className="text-lg leading-relaxed">
                {content.personalityParagraph3}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </Section>
  );
};
