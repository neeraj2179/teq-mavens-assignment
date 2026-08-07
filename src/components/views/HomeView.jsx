"use client";

import { motion } from "framer-motion";
import CarViewer from "@/components/CarViewer";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { homeStats } from "@/data/stats";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
      <div className="flex-1 flex flex-col gap-8 md:gap-12 items-center justify-center">
        {leftStats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={statVariants}
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="text-[28px] md:text-[36px] font-black text-text-primary tracking-tight">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="text-[10px] md:text-[14px] text-text-secondary mt-1 tracking-widest font-bold uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Center Car with animated white background glow */}
      <div className="relative flex items-center justify-center mx-8">
        {/* Animated White Circle Background specifically for HomeView */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white rounded-full blur-[60px] md:blur-[100px] z-0 pointer-events-none"
        />
        <div className="z-10 relative">
          <CarViewer imageSrc="/assets/car-home.jpg" alt="Home Car" size="md" />
        </div>
      </div>

      {/* Right Stats Column */}
      <div className="flex-1 flex flex-col gap-8 md:gap-12 items-center justify-center z-10">
        {rightStats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={statVariants}
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="text-[28px] md:text-[36px] font-black text-text-primary tracking-tight">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="text-[10px] md:text-[14px] text-text-secondary mt-1 tracking-widest font-bold uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
