'use client';

import React, { useEffect, useRef } from 'react';
import { lapsData } from '@/data/laps';
import TimelinePoint from '@/components/TimelinePoint';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

interface TimelineProps {
  activeLap?: number;
  onLapSelect: (lapId: number) => void;
}

// Precomputed normalized positions along the path for each lap (0..1)
const PATH_POSITIONS = [0.08, 0.28, 0.5, 0.72, 0.94];

export default function Timeline({ activeLap = 3, onLapSelect }: TimelineProps) {
  // The exact path from the Figma design, normalized to a 1000x100 viewBox
  const svgPath = "M 0 80 C 150 75, 250 85, 500 50 C 750 15, 850 70, 1000 60";
  const dotRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    if (!dotRef.current) return;

    const idx = Math.max(0, Math.min(4, (activeLap ?? 1) - 1));
    const progress = PATH_POSITIONS[idx];

    // animate dot to the target point on the path using MotionPathPlugin
    gsap.to(dotRef.current, {
      duration: 0.9,
      ease: 'power2.inOut',
      motionPath: {
        path: '#timeline-path',
        align: '#timeline-path',
        alignOrigin: [0.5, 0.5],
        start: progress,
        end: progress,
      },
    });
  }, [activeLap]);

  return (
    <div className="reference-timeline fixed bottom-0 left-0 w-full h-[160px] pointer-events-none z-30">
      <div className="relative w-full h-full">
        {/* Curved SVG path */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1000 100"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* Main dashed line */}
          <path
            id="timeline-path"
            d={svgPath}
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeDasharray="10 8"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
            className="timeline-dash-animation"
          />

          {/* Solid fill below the curve for the red wash */}
          <path
            d={`${svgPath} L 1000 100 L 0 100 Z`}
            fill="url(#redGradient)"
            opacity="0.18"
          />

          <defs>
            <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.38" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* animated dot (we animate transform via GSAP MotionPath) */}
          <g className="z-40 pointer-events-none">
            <circle ref={dotRef} r={8} fill="var(--color-primary)" className="drop-shadow-[0_10px_30px_rgba(209,0,0,0.35)]" />
          </g>
        </svg>

        {/* Timeline Points container (HTML overlay so tooltips and clicks are easy) */}
        <div className="absolute inset-0 pointer-events-auto">
          {lapsData.map((lap, index) => (
            <button
              key={lap.id}
              onClick={() => onLapSelect(lap.id)}
              className="absolute z-20"
              aria-label={`Select ${lap.title}`}
              // positioning comes from globals.css timeline-point-# classes
            >
              <TimelinePoint lap={lap} isActive={activeLap === lap.id} index={index} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
