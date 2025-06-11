
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { AirplaneCursor } from '@/components/AirplaneCursor';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/locales';
import { HistorySection } from '@/components/sections/HistorySection';
import { PeopleSection } from '@/components/sections/PeopleSection';
import { CultureSection } from '@/components/sections/CultureSection';
import { CuisineSection } from '@/components/sections/CuisineSection';
import { NatureSection } from '@/components/sections/NatureSection';
import { EconomySection } from '@/components/sections/EconomySection';
import { EducationSection } from '@/components/sections/EducationSection';
import { FutureSection } from '@/components/sections/FutureSection';


const AppContent = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <AirplaneCursor />
      <Header />
      <Hero 
        title={t.hero.title} 
        subtitle={t.hero.subtitle}
        exploreText={t.hero.exploreText}
      />

      <HistorySection content={t.history} />
      <PeopleSection content={t.people} />
      <CultureSection content={t.culture} />
      <CuisineSection content={t.cuisine} />
      <NatureSection content={t.nature} />
      <EconomySection content={t.economy} />
      <EducationSection content={t.education} />
      <FutureSection content={t.future} />
      
      <Footer 
        quote={t.footer.quote}
        author={t.footer.author}
        copyright={t.footer.copyright}
      />
      <Toaster />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;