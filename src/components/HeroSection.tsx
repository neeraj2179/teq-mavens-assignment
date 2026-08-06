'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' as const }}
      className="hero-section flex flex-col items-center select-none z-10 pt-[62px] relative w-full max-w-4xl"
    >
      {/* Decorative white arc above text */}
      <svg className="hero-arc absolute top-[42px] left-1/2 -translate-x-1/2 w-[440px] h-[34px] pointer-events-none opacity-40" viewBox="0 0 600 40" fill="none">
        <path d="M0 40 Q 300 -20 600 40" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
        {/* Subtle white glow in center of arc */}
        <ellipse cx="300" cy="10" rx="100" ry="2" fill="white" filter="blur(4px)" opacity="0.5" />
      </svg>

      <h1 className="hero-title text-[34px] font-black italic tracking-[-0.03em] text-text-primary leading-none mt-2">
        ENGINEERED FOR{' '}
        <span className="text-primary">PASSION</span>
      </h1>
      <div className="mt-[18px] flex flex-col items-center gap-[10px]">
        <p className="text-text-secondary/80 text-[9px] font-medium tracking-wide">
          Precision. Power. Performance
        </p>
        <div className="w-[20px] h-[1px] bg-primary/80 rounded-full" />
      </div>
    </motion.div>
  );
}
