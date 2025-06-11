import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { content } from '@/lib/locales';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                  ${isScrolled ? 'py-3 bg-background/80 dark:bg-neutral-900/80 backdrop-blur-lg shadow-lg' 
                               : 'py-6 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          className="text-3xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 dark:from-sky-400 dark:via-purple-400 dark:to-pink-400">
            {t.header.logo}
          </span>
        </motion.div>
        
        <nav className="hidden md:flex space-x-6 items-center">
          {t.header.navLinks.map((link) => (
            <motion.a
              key={link.text}
              href={link.href}
              className="text-foreground hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              {link.text}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? t.header.switchToDark : t.header.switchToLight}
            className="text-foreground hover:bg-accent/50 dark:text-gray-200 dark:hover:bg-neutral-700/50"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                aria-label={t.header.changeLanguage}
                className="text-foreground hover:bg-accent/50 dark:text-gray-200 dark:hover:bg-neutral-700/50"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card border-border shadow-lg">
              <DropdownMenuItem 
                onClick={() => language !== 'vi' && toggleLanguage()}
                className={`cursor-pointer hover:bg-accent focus:bg-accent ${language === 'vi' ? 'font-semibold text-primary' : ''}`}
              >
                Tiếng Việt 🇻🇳
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => language !== 'en' && toggleLanguage()}
                className={`cursor-pointer hover:bg-accent focus:bg-accent ${language === 'en' ? 'font-semibold text-primary' : ''}`}
              >
                English 🇬🇧
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};