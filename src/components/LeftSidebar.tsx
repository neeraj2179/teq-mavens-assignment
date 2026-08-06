'use client';

import { Gauge, Home, IndianRupee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ViewType } from '@/types';

interface LeftSidebarProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const navItems: { id: ViewType; icon: typeof Gauge; label: string }[] = [
  { id: 'dashboard', icon: Gauge, label: 'Dashboard' },
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'finance', icon: IndianRupee, label: 'Finance' },
];

export default function LeftSidebar({ activeView, onNavigate }: LeftSidebarProps) {
  return (
    <nav className="reference-left-rail fixed left-3 top-1/2 -translate-y-1/2 z-40">
      <div className="relative flex flex-col items-center gap-2.5">
        {/* Decorative dashed arc behind buttons */}
        <svg
          className="absolute -left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          width="72"
          height="170"
          viewBox="0 0 100 220"
          fill="none"
        >
          <path
            d="M 80 10 Q 10 110 80 210"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="6 4"
            fill="none"
            className="timeline-dash-animation"
          />
        </svg>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <div key={item.id} className="relative flex items-center">
              {/* Button */}
              <motion.button
                onClick={() => onNavigate(item.id)}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                className={`
                  relative w-8 h-8 rounded-full flex items-center justify-center
                  transition-all duration-400 z-10
                  ${isActive
                    ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-[0_0_24px_var(--color-glow-red)]'
                    : 'glass-button border border-border-subtle text-text-secondary hover:text-white hover:border-border-medium'
                  }
                `}
              >
                <Icon size={13} strokeWidth={1.8} />
              </motion.button>

              {/* Animated label tooltip */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -8, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -8, scale: 0.9 }}
                    transition={{ duration: 0.25, ease: 'easeOut' as const }}
                    className="absolute left-full ml-2 whitespace-nowrap rounded-md bg-surface/90 backdrop-blur-sm px-2 py-1 text-[8px] font-medium text-text-primary border border-border-subtle shadow-lg"
                  >
                    {item.label}
                    {/* Arrow pointer */}
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-surface/90 border-l border-b border-border-subtle rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
