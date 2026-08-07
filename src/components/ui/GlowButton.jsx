"use client";

import { motion } from "framer-motion";

export default function GlowButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 30px var(--color-glow-red-strong)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`
        w-12 h-12 rounded-full flex items-center justify-center
        bg-primary text-white
        shadow-[0_0_20px_var(--color-glow-red)]
        transition-colors duration-300
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
