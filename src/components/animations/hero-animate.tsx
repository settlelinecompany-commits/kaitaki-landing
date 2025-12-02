"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface HeroAnimateProps {
  children: ReactNode;
  className?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headlineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const subheadlineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Sub-components for structured hero animation
export function HeroHeadline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={headlineVariants}>
      {children}
    </motion.div>
  );
}

export function HeroSubheadline({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={subheadlineVariants}>
      {children}
    </motion.div>
  );
}

export function HeroCTA({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={ctaVariants}>
      {children}
    </motion.div>
  );
}

// Simplified HeroImage - no parallax to avoid scroll lag
export function HeroImage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HeroAnimate({ children, className = "" }: HeroAnimateProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
