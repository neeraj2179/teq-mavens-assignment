'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(MotionPathPlugin);
}

interface TruckSequenceProps {
  onSequenceComplete: () => void;
  triggerSequence: boolean;
}

export default function TruckSequence({ onSequenceComplete, triggerSequence }: TruckSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const truckRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const isPlayingRef = useRef(false);

  // Exact path for the truck driving across
  const truckPath = "M -200 400 L 400 400 L 1200 400";
  
  // Exact path for the car entering the truck
  const carEnterPath = "M 400 600 Q 600 500 550 420";

  useEffect(() => {
    if (!triggerSequence || isPlayingRef.current) return;

    isPlayingRef.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        isPlayingRef.current = false;
        onSequenceComplete();
      }
    });

    // 1. Truck enters from left and stops
    tl.to(truckRef.current, {
      duration: 2,
      x: '50vw',
      ease: 'power2.out',
    })
    
    // 2. Car drives up and into the truck
    .to(carRef.current, {
      duration: 1.5,
      motionPath: {
        path: carEnterPath,
        align: carEnterPath,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      scale: 0.3,
      opacity: 0,
      ease: 'power1.inOut',
    }, "+=0.5")
    
    // 3. Truck drives off to the right
    .to(truckRef.current, {
      duration: 2,
      x: '120vw',
      ease: 'power2.in',
    }, "+=0.5");

    return () => {
      tl.kill();
    };
  }, [triggerSequence, onSequenceComplete]);

  if (!triggerSequence) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Invisible SVG Paths for debugging/motion */}
      <svg className="absolute inset-0 w-full h-full opacity-0">
        <path id="truck-path" d={truckPath} fill="none" stroke="red" />
        <path id="car-enter-path" d={carEnterPath} fill="none" stroke="blue" />
      </svg>

      {/* Truck Asset */}
      <div 
        ref={truckRef} 
        className="absolute top-1/2 -translate-y-1/2 -left-[400px] w-[400px] h-[150px]"
      >
        <Image 
          src="/assets/truck-trailer.png" 
          alt="Truck Trailer" 
          fill 
          className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Car Asset */}
      <div 
        ref={carRef}
        className="absolute bottom-[-200px] left-1/2 w-[250px] h-[80px]"
      >
        <Image 
          src="/assets/car-profile.png" 
          alt="Car Profile" 
          fill 
          className="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
}
