'use client';

import { motion } from 'framer-motion';
import CarViewer from '@/components/CarViewer';
import { customizeActions } from '@/data/stats';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export default function DashboardView() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative flex items-center justify-center flex-1 z-10"
    >
      {/* Car Image */}
      <CarViewer imageSrc="/assets/car-dashboard.jpg" alt="Dashboard Car" size="lg" />

      {/* Floating Action Buttons */}
      {customizeActions.map((action, index) => (
        <motion.button
          key={action.id}
          variants={itemVariants}
          whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
          className={`dashboard-action dashboard-action-${index + 1} absolute px-5 py-2 bg-surface border border-border-subtle rounded-md text-xs font-bold tracking-widest text-text-primary hover:bg-surface-hover hover:border-border-medium transition-colors duration-300 uppercase`}
        >
          {action.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
