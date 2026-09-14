"use client";

import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(15);
  const [minutes, setMinutes] = useState(32);
  const [hours, setHours] = useState(4);

  const toBengaliNum = (num: number) => {
    const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(num)
      .padStart(2, "0")
      .split("")
      .map((d) => bnDigits[parseInt(d)] || d)
      .join("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          setMinutes((prevMinutes) => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              setHours((prevHours) => {
                if (prevHours > 0) {
                  return prevHours - 1;
                }
                return 0; // Everything is 0
              });
              return hours > 0 ? 59 : 0;
            }
          });
          return (minutes > 0 || hours > 0) ? 59 : 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes]);

  // Prevent hydration mismatch by rendering default client state initially or empty
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-space-xs text-on-surface">
        <span className="font-label-md text-label-md text-on-surface-variant mr-space-xs">
          অফার শেষ হতে বাকি:
        </span>
        <div className="bg-primary text-on-primary font-headline-sm text-headline-sm px-3 py-1.5 rounded-lg font-bold shadow-sm">
          ০৪
        </div>
        <span className="font-bold text-primary">:</span>
        <div className="bg-primary text-on-primary font-headline-sm text-headline-sm px-3 py-1.5 rounded-lg font-bold shadow-sm">
          ৩২
        </div>
        <span className="font-bold text-primary">:</span>
        <div className="bg-secondary text-on-secondary font-headline-sm text-headline-sm px-3 py-1.5 rounded-lg font-bold shadow-sm">
          ১৫
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-space-xs text-on-surface">
      <span className="font-label-md text-label-md text-on-surface-variant mr-space-xs">
        অফার শেষ হতে বাকি:
      </span>
      <div className="bg-primary text-on-primary font-headline-sm text-headline-sm px-3 py-1.5 rounded-lg font-bold shadow-sm">
        {toBengaliNum(hours)}
      </div>
      <span className="font-bold text-primary">:</span>
      <div className="bg-primary text-on-primary font-headline-sm text-headline-sm px-3 py-1.5 rounded-lg font-bold shadow-sm">
        {toBengaliNum(minutes)}
      </div>
      <span className="font-bold text-primary">:</span>
      <div className="bg-secondary text-on-secondary font-headline-sm text-headline-sm px-3 py-1.5 rounded-lg font-bold shadow-sm">
        {toBengaliNum(seconds)}
      </div>
    </div>
  );
}
