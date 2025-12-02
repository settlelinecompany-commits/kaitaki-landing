'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import HeroBadge from '@/components/ui/hero-badge';

const ease = [0.16, 1, 0.3, 1];

// Movie-effect cycling statements
const impactStatements = [
  { highlight: 'Real-time voice capture', result: '100% completeness' },
  { highlight: 'Explainable AI', result: 'no more blackbox decisions' },
  { highlight: 'Enterprise-grade workflows', result: 'built for regulation' },
  { highlight: 'Full control & visibility', result: 'assess with confidence' },
];

interface HeroContentProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  primaryAction?: {
    href?: string;
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  };
  secondaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
  };
  trustText?: string;
}

function MovieEffectAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % impactStatements.length);
    }, 1850); // 1.5s display + 350ms transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[4rem] flex items-center justify-center overflow-hidden px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ 
            duration: 0.35, 
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0"
        >
          <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-600">
            {impactStatements[currentIndex].highlight}
          </span>
          <span className="text-base sm:text-lg md:text-xl text-zinc-400 mx-2 sm:mx-3">→</span>
          <span className="text-base sm:text-lg md:text-xl font-medium text-zinc-700">
            {impactStatements[currentIndex].result}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function HeroContent({
  title,
  titleHighlight,
  subtitle,
  primaryAction,
  secondaryAction,
  trustText,
}: HeroContentProps) {
  return (
    <div className="flex flex-col space-y-6 text-center">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl xl:text-7xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-zinc-400">{titleHighlight}</span>
        )}
      </motion.h1>
      
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-zinc-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Movie-effect animated sequence */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <MovieEffectAnimation />
      </motion.div>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease }}
      >
        {primaryAction && (
          <button
            onClick={primaryAction.onClick}
            className={cn(
              'inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-colors',
              'bg-zinc-900 text-white hover:bg-zinc-800',
              'w-full sm:w-auto'
            )}
          >
            {primaryAction.icon}
            {primaryAction.text}
          </button>
        )}
        {secondaryAction && (
          <a
            href={secondaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-colors',
              'bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-50',
              'w-full sm:w-auto'
            )}
          >
            {secondaryAction.icon}
            {secondaryAction.text}
          </a>
        )}
      </motion.div>
      
      {trustText && (
        <motion.p
          className="text-xs text-zinc-500 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          dangerouslySetInnerHTML={{ __html: trustText }}
        />
      )}
    </div>
  );
}

interface HeroProps {
  pill?: {
    href?: string;
    text: string;
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
  };
  content: HeroContentProps;
  preview?: React.ReactNode;
}

function Hero({ pill, content, preview }: HeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center py-8 px-6 md:px-8 pt-20 md:pt-28">
        {/* Badge */}
        {pill && (
          <div className="mb-6">
            <HeroBadge {...pill} />
          </div>
        )}
        
        {/* Content */}
        <HeroContent {...content} />
      </div>
      
      {/* Preview (Video) - Full width below content */}
      {preview && (
        <motion.div 
          className="w-full mt-12 md:mt-16 px-4 md:px-8 lg:px-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
        >
          {preview}
        </motion.div>
      )}
    </div>
  );
}

export { Hero };
