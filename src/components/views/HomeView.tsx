'use client';

import { motion } from 'framer-motion';
import CarViewer from '@/components/CarViewer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { homeStats } from '@/data/stats';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function HomeView() {
  const leftStats = homeStats.slice(0, 3);
  const rightStats = homeStats.slice(3, 6);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home-view relative flex items-center justify-center flex-1 z-10 gap-8"
    >
      {/* Left Stats Column */}
      <div className="flex flex-col gap-5 items-end">
        {leftStats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={statVariants}
            className="text-right"
          >
            <p className="text-[22px] font-black text-text-primary tracking-tight">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="text-[7px] text-text-secondary mt-0.5 tracking-widest font-bold uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Center Car */}
      <CarViewer imageSrc="/assets/car-home.jpg" alt="Home Car" size="md" />

      {/* Right Stats Column */}
      <div className="flex flex-col gap-5 items-start">
        {rightStats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={statVariants}
            className="text-left"
          >
            <p className="text-[22px] font-black text-text-primary tracking-tight">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="text-[7px] text-text-secondary mt-0.5 tracking-widest font-bold uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
