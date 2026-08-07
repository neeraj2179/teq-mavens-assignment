"use client";

import { useEffect, useState } from "react";

export default function AnimatedCounter({ value, className = "" }) {
  const numericMatch = value.match(/[\d.,]+/);
  const numericString = numericMatch ? numericMatch[0] : "";
  const suffixPart = value.replace(numericString, "").trim();
  const targetNumber = parseFloat(numericString.replace(/,/g, ""));
  const isNumber = !isNaN(targetNumber);
  const hasDecimals = numericString.includes(".");
  const hasCommas = numericString.includes(",");

  const [displayValue, setDisplayValue] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (!isNumber) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = start + (targetNumber - start) * easeProgress;
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber, isNumber]);

  let finalDisplay = displayValue;
  if (isNumber) {
    if (hasDecimals) {
      finalDisplay = Number(displayValue).toFixed(1);
    } else if (hasCommas) {
      finalDisplay = Math.round(Number(displayValue)).toLocaleString();
    } else {
      finalDisplay = Math.round(Number(displayValue)).toString();
    }
  }

  return (
    <span className={className}>
      {isNumber ? (
        <>
          <span>{finalDisplay}</span> {suffixPart}
        </>
      ) : (
        value
      )}
    </span>
  );
}
