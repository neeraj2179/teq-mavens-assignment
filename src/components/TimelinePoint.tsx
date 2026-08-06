'use client';

import { motion } from 'framer-motion';
import type { LapData } from '@/types';

interface TimelinePointProps {
  lap: LapData;
  isActive: boolean;
  index: number;
}

export default function TimelinePoint({ lap, isActive, index }: TimelinePointProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`timeline-point timeline-point-${lap.id} absolute flex flex-col items-center gap-4 cursor-pointer group z-20`}
    >
      {/* Circle Node */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        className={`
          w-3 h-3 rounded-full border-2 transition-all duration-500 relative
          ${isActive
            ? 'bg-primary border-primary shadow-[0_0_15px_var(--color-glow-red-strong)] scale-125'
            : 'bg-surface-light border-text-muted/50 group-hover:bg-text-secondary'
          }
        `}
      >
        {/* Glow behind active dot */}
        {isActive && (
          <div className="absolute inset-0 bg-primary rounded-full blur-[6px] opacity-80" />
        )}
      </motion.div>

      {/* Vertical dotted connector line */}
      <div className="w-[1px] h-4 border-l border-dashed border-text-muted/30" />

      {/* Labels */}
      <div className="text-center absolute top-9 whitespace-nowrap">
        <p className={`text-[8px] font-black tracking-[0.15em] transition-colors duration-300 uppercase ${
          isActive ? 'text-text-primary' : 'text-text-muted group-hover:text-text-secondary'
        }`}>
          {lap.title}
        </p>
        <p className={`text-[7px] mt-0.5 transition-colors duration-300 tracking-wide ${
          isActive ? 'text-text-secondary font-medium' : 'text-text-muted/70'
        }`}>
          {lap.subtitle}
        </p>
      </div>
    </motion.div>
  );
}
