"use client";

import { motion } from "framer-motion";

export default function ThankYouView({ onGoHome }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center flex-1 z-10 gap-8"
    >
      <h2 className="text-5xl md:text-6xl font-black italic tracking-wider text-text-primary">
        THANK YOU
      </h2>
      <motion.button
        onClick={onGoHome}
        whileHover={{
          scale: 1.05,
          backgroundColor: "var(--color-surface-hover)",
        }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-surface border border-border-subtle rounded-lg text-sm font-medium text-text-primary tracking-wider hover:border-border-medium transition-colors duration-300"
      >
        Home
      </motion.button>
    </motion.div>
  );
}
