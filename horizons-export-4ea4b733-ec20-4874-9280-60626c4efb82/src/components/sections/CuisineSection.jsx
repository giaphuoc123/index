
import React from 'react';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const CuisineSection = ({ content }) => {
  return (
    <Section 
      title={content.title}
      bgClass="bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 dark:from-amber-700 dark:via-orange-800 dark:to-red-900 pattern-bg-light dark:pattern-bg-dark"
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

          <div className="grid md:grid-cols-3 gap-8">
              {content.dishes.map((dish, index) => (
                   <FeatureCard
                      key={index}
                      title={dish.title}
                      content={dish.content}
                      animationType="fade-in-up"
                      delay={index * 100}
                      cardBgClass="bg-white/20 dark:bg-black/20 backdrop-blur-lg"
                      titleColor="text-white"
                      contentColor="text-gray-100 dark:text-gray-200"
                  />
              ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimationWrapper animationType="fade-in-left">
                  <div className="relative">
                      <img
                          className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                          alt={content.imageAlt}
                         src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  </div>
              </ScrollAnimationWrapper>
              
              <ScrollAnimationWrapper animationType="fade-in-right" delay={200}>
                  <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-white">{content.regionalTitle}</h3>
                      <div className="space-y-4">
                          {content.regions.map((region, index) => (
                              <div key={index}>
                                  <h4 className="text-xl font-semibold text-amber-300 dark:text-amber-400 mb-2">{region.name}</h4>
                                  <p className="leading-relaxed">
                                      {region.description}
                                  </p>
                              </div>
                          ))}
                      </div>
                  </div>
              </ScrollAnimationWrapper>
          </div>
      </div>
    </Section>
  );
};
