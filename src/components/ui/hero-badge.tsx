'use client';

import { motion, useAnimation, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const ease = [0.16, 1, 0.3, 1];

interface HeroBadgeProps {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const badgeVariants: Record<string, string> = {
  default: 'bg-white hover:bg-zinc-50 border-zinc-200',
  outline: 'border-2 border-zinc-300 hover:bg-zinc-50',
  ghost: 'hover:bg-zinc-100/50',
};

const sizeVariants: Record<string, string> = {
  sm: 'px-3 py-1 text-xs gap-1.5',
  md: 'px-4 py-1.5 text-sm gap-2',
  lg: 'px-5 py-2 text-base gap-2.5',
};

const iconAnimationVariants: Variants = {
  initial: { rotate: 0 },
  hover: { rotate: -10 },
};

export default function HeroBadge({
  href,
  text,
  icon,
  endIcon,
  variant = 'default',
  size = 'md',
  className,
  onClick,
}: HeroBadgeProps) {
  const controls = useAnimation();

  const baseClassName = cn(
    'inline-flex items-center rounded-full border transition-colors text-center',
    badgeVariants[variant],
    sizeVariants[size],
    'max-w-[90vw] whitespace-normal',
    className
  );

  const handleClick = () => {
    if (href) {
      window.location.href = href;
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={cn('group', href && 'cursor-pointer')}
    >
      <motion.div
        className={baseClassName}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        onHoverStart={() => controls.start('hover')}
        onHoverEnd={() => controls.start('initial')}
      >
        {icon && (
          <motion.div
            className="text-zinc-500 transition-colors group-hover:text-blue-600"
            variants={iconAnimationVariants}
            initial="initial"
            animate={controls}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            {icon}
          </motion.div>
        )}
        <span className="text-zinc-700">{text}</span>
        {endIcon && (
          <motion.div className="text-zinc-500">{endIcon}</motion.div>
        )}
      </motion.div>
    </motion.button>
  );
}

