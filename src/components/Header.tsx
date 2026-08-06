'use client';

import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="reference-header fixed top-0 left-0 w-full flex justify-between items-center px-3 pt-1 pb-2 z-50"
    >
      {/* Left: Back button + Logo */}
      <div className="flex items-center gap-3">
        {/* <button className="w-10 h-10 rounded-full bg-[#161616] flex items-center justify-center text-text-secondary hover:text-white transition-colors duration-300">
          <ArrowLeft size={18} />
        </button> */}
        <div className="flex items-center select-none">
          <Image 
            src="/assets/logo.png" 
            alt="NEXTCAR Logo" 
            width={92}
            height={30} 
            className="object-contain" 
            priority 
          />
        </div>
      </div>

      {/* Right: Theme toggle */}
      <div className="theme-toggle flex items-center gap-0.5 rounded-full bg-[#161616] p-1">
        <button className="p-1.5 rounded-full text-text-secondary hover:text-white transition-colors duration-300">
          <Sun size={11} />
        </button>
        <button className="p-1.5 rounded-full bg-[#2A2A2A] text-white transition-colors duration-300">
          <Moon size={11} />
        </button>
      </div>
    </motion.header>
  );
}
