'use client';

export default function Spotlight() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top spotlight beam - cone of light from above */}
      <div
        className="spotlight-beam absolute left-1/2 -top-[200px]"
      />

      {/* Center radial glow - soft red tint */}
      <div
        className="spotlight-center-glow absolute top-1/2 left-1/2"
      />

      {/* Top-center soft red glow */}
      <div
        className="spotlight-top-glow absolute top-0 left-1/2"
      />

      {/* Bottom-right red gradient wash */}
      <div
        className="spotlight-bottom-wash absolute bottom-0 right-0"
      />

      {/* Bottom edge red line glow */}
      <div
        className="spotlight-bottom-edge absolute bottom-0 left-0 w-full"
      />
    </div>
  );
}
