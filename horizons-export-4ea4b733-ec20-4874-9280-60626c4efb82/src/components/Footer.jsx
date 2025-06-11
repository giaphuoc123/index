import React from 'react';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export const Footer = ({ quote, author, copyright }) => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-neutral-800 to-gray-900 dark:from-slate-900 dark:via-neutral-900 dark:to-gray-950 py-12">
      <div className="container mx-auto px-6 text-center">
        <ScrollAnimationWrapper animationType="fade-in-up">
          <div className="space-y-6">
            <p className="text-2xl font-bold text-white">
              "{quote}"
            </p>
            <p className="text-lg text-gray-300 dark:text-gray-400">
              - {author} -
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 dark:text-gray-500">
              {copyright}
            </p>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </footer>
  );
};