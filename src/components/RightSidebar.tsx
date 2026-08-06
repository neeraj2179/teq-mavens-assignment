'use client';

import { MessageSquare, FileText, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface RightSidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

const rightItems = [
  { id: 'timeline', icon: MessageSquare },
  { id: 'documents', icon: FileText },
  { id: 'profile', icon: Lock },
];

export default function RightSidebar({ activeItem = 'documents', onItemClick }: RightSidebarProps) {
  return (
    <nav className="reference-right-rail fixed right-3 top-1/2 -translate-y-1/2 z-40">
      <div className="relative flex flex-col items-center gap-2.5">
        {/* Decorative dashed arc behind buttons */}
        <svg
          className="absolute -right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          width="72"
          height="170"
          viewBox="0 0 100 220"
          fill="none"
        >
          <path
            d="M 20 10 Q 90 110 20 210"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="6 4"
            fill="none"
            className="timeline-dash-animation"
          />
        </svg>

        {rightItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
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
          );
        })}
      </div>
    </nav>
  );
}
