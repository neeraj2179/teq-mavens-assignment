'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = '' }: AnimatedCounterProps) {
  // Extract number and suffix (e.g., "352", "620", "3.2 Sec", "2,450 KM")
  const numericMatch = value.match(/[\d.,]+/);
  const numericPart = numericMatch ? numericMatch[0] : '';
  const suffixPart = value.replace(numericPart, '').trim();
  
  const parsedNumber = parseFloat(numericPart.replace(/,/g, ''));
  const isNumber = !isNaN(parsedNumber);

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    if (!isNumber) return value;
    
    // Determine formatting based on the original string
    if (numericPart.includes('.')) {
      return latest.toFixed(1);
    }
    if (numericPart.includes(',')) {
      return Math.round(latest).toLocaleString();
    }
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (isNumber) {
      const controls = animate(motionValue, parsedNumber, {
        duration: 1.5,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isNumber, parsedNumber, motionValue]);

  return (
    <span className={className}>
      {isNumber ? (
        <>
          <motion.span>{rounded}</motion.span> {suffixPart}
        </>
      ) : (
        value
      )}
    </span>
  );
}
