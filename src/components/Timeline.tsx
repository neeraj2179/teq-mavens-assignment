'use client';

import { lapsData } from '@/data/laps';
import TimelinePoint from '@/components/TimelinePoint';

interface TimelineProps {
  activeLap?: number;
  onLapSelect: (lapId: number) => void;
}

export default function Timeline({ activeLap = 3, onLapSelect }: TimelineProps) {
  // The exact path from the Figma design, normalized to a 1000x100 viewBox
  const svgPath = "M 0 80 C 150 75, 250 85, 500 50 C 750 15, 850 70, 1000 60";
  
  return (
    <div className="reference-timeline fixed bottom-0 left-0 w-full h-[128px] pointer-events-none z-30">
      <div className="relative w-full h-full">
        {/* Curved SVG path */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1000 100"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Main dashed line */}
          <path
            id="timeline-path"
            d={svgPath}
            stroke="var(--color-primary)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          {/* Solid fill below the curve for the red wash */}
          <path
            d={`${svgPath} L 1000 100 L 0 100 Z`}
            fill="url(#redGradient)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Timeline Points container */}
        <div className="absolute inset-0 pointer-events-auto">
          {lapsData.map((lap, index) => (
            <div key={lap.id} onClick={() => onLapSelect(lap.id)}>
              <TimelinePoint
                lap={lap}
                isActive={activeLap === lap.id}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
