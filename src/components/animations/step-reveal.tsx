"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface StepRevealProps {
  children: ReactNode;
  className?: string;
  stepNumber?: string;
  delay?: number;
  imageDelay?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const numberVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Sub-components for step structure
export function StepNumber({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={numberVariants}>
      {children}
    </motion.div>
  );
}

export function StepContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={contentVariants}>
      {children}
    </motion.div>
  );
}

export function StepImage({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={imageVariants}>
      {children}
    </motion.div>
  );
}

export function StepReveal({ children, className = "", delay = 0 }: StepRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

