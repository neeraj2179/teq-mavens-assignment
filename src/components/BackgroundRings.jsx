"use client";

export default function BackgroundRings() {
  const rings = [
    { size: 2800, opacity: 0.02, delay: "0s" },
    { size: 2000, opacity: 0.03, delay: "1.5s" },
    { size: 1400, opacity: 0.04, delay: "3s" },
    { size: 900, opacity: 0.05, delay: "4.5s" },
    { size: 500, opacity: 0.08, delay: "2s" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      {rings.map((ring, i) => (
        <div
          key={i}
          className={`absolute rounded-full`}
          style={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: `rgba(255, 255, 255, ${ring.opacity})`,
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            animationDelay: ring.delay
          }}
        />
      ))}
    </div>
  );
}
