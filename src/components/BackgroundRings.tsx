'use client';

export default function BackgroundRings() {
  const rings = [
    { size: 750, opacity: 0.03, dashed: true, delay: '0s' },
    { size: 600, opacity: 0.04, dashed: true, delay: '1.5s' },
    { size: 460, opacity: 0.05, dashed: false, delay: '3s' },
    { size: 340, opacity: 0.04, dashed: false, delay: '4.5s' },
    { size: 240, opacity: 0.03, dashed: true, delay: '2s' },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      {rings.map((ring, i) => (
        <div
          key={i}
          className={`background-ring background-ring-${i + 1} absolute rounded-full`}
        />
      ))}

      {/* Extra large subtle ring at the very back */}
      <div
        className="background-ring background-ring-outer absolute rounded-full"
      />
    </div>
  );
}
