'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  label?: string;
  showLabel?: boolean;
  labelSide?: 'left' | 'right';
  size?: 'sm' | 'md';
  className?: string;
}

export default function GlassButton({
  children,
  onClick,
  active = false,
  label,
  showLabel = false,
  labelSide = 'right',
  size = 'md',
  className = '',
}: GlassButtonProps) {
  const sizeClasses = size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';

  return (
    <div className="relative flex items-center gap-3">
      {/* Label Bubble - Left Side */}
      {showLabel && label && labelSide === 'left' && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-surface px-3 py-1.5 text-sm font-medium text-text-primary shadow-lg border border-border-subtle"
        >
          {label}
        </motion.div>
      )}

      {/* Button */}
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`
          ${sizeClasses} rounded-full flex items-center justify-center
          transition-colors duration-300
          ${active
            ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-[0_0_20px_var(--color-glow-red)]'
            : 'bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-medium hover:bg-surface-hover'
          }
          ${className}
        `}
      >
        {children}
      </motion.button>

      {/* Label Bubble - Right Side */}
      {showLabel && label && labelSide === 'right' && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          className="absolute left-full ml-3 whitespace-nowrap rounded-md bg-surface px-3 py-1.5 text-sm font-medium text-text-primary shadow-lg border border-border-subtle"
        >
          {label}
        </motion.div>
      )}
    </div>
  );
}
