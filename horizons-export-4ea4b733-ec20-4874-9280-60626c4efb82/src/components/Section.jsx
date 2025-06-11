
import React from 'react';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export const Section = ({ title, children, bgClass = "bg-background", titleColor = "gradient", textColor = "text-foreground" }) => {
  const { theme } = useTheme();
  
  const titleClasses = cn(
    "section-title",
    {
      "section-title-gradient": titleColor === "gradient",
      "text-white": titleColor === "text-white",
      "text-foreground": titleColor === "text-foreground" 
    }
  );

  return (
    <section className={`py-20 ${bgClass} ${textColor} transition-colors duration-500`}>
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper animationType="fade-in-up">
          <h2 className={titleClasses}>
            {title}
          </h2>
        </ScrollAnimationWrapper>
        {children}
      </div>
    </section>
  );
};
