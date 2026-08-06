'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CarViewerProps {
  imageSrc: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CarViewer({
  imageSrc,
  alt = 'Car',
  size = 'md',
}: CarViewerProps) {
  const sizeClasses = {
    sm: 'w-28 h-28',
    md: 'w-36 h-36 md:w-40 md:h-40',
    lg: 'w-48 h-48 md:w-56 md:h-56',
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.03] to-transparent scale-110" />

      {/* Main circular frame */}
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden border border-white/[0.1] relative shadow-2xl`}>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10 pointer-events-none rounded-full" />
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 256px, 320px"
          priority
        />
      </div>

      {/* Soft shadow beneath */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-primary/10 rounded-full blur-xl" />
    </motion.div>
  );
}
