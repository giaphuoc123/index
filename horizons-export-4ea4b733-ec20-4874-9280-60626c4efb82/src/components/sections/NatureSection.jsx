
import React from 'react';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const NatureSection = ({ content }) => {
  return (
    <Section 
      title={content.title}
      bgClass="bg-gradient-to-br from-lime-600 via-green-700 to-emerald-800 dark:from-lime-800 dark:via-green-900 dark:to-emerald-950 pattern-bg-light dark:pattern-bg-dark"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.sites.map((site, index) => (
                  <FeatureCard
                      key={index}
                      title={site.title}
                      content={site.content}
                      animationType="fade-in-up"
                      delay={index * 100}
                      cardBgClass="bg-white/20 dark:bg-black/20 backdrop-blur-lg"
                      titleColor="text-white"
                      contentColor="text-gray-100 dark:text-gray-200"
                  />
              ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
              {content.images.map((image, index) => (
                  <ScrollAnimationWrapper 
                      key={index} 
                      animationType={index === 0 ? "fade-in-left" : (index === 1 ? "fade-in-up" : "fade-in-right")} 
                      delay={index * 100}
                  >
                      <div className="relative">
                          <img
                              className="rounded-2xl shadow-2xl w-full h-64 object-cover"
                              alt={image.alt}
                             src={image.src} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                          <div className="absolute bottom-4 left-4 text-white font-semibold">{image.caption}</div>
                      </div>
                  </ScrollAnimationWrapper>
              ))}
          </div>
      </div>
    </Section>
  );
};
