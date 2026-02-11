"use client";

import React, { useEffect, useRef, useState, useCallback, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function StackScroller({ children }: Props) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const items = React.Children.toArray(children);
  const total = items.length;
  const touchStartY = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      if (index < 0 || index >= total) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 900);
    },
    [isAnimating, total]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let accumulated = 0;
    const threshold = 60;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isAnimating) return;

      accumulated += e.deltaY;

      if (accumulated > threshold) {
        accumulated = 0;
        goTo(current + 1);
      } else if (accumulated < -threshold) {
        accumulated = 0;
        goTo(current - 1);
      }

      // Reset accumulator after pause
      clearTimeout((onWheel as any)._t);
      (onWheel as any)._t = setTimeout(() => { accumulated = 0; }, 200);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) {
        goTo(dy > 0 ? current + 1 : current - 1);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); goTo(current + 1); }
      if (e.key === "ArrowUp") { e.preventDefault(); goTo(current - 1); }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [current, isAnimating, goTo]);

  return (
    <div ref={containerRef} className="stack-viewport">
      {items.map((child, i) => {
        const isActive = i <= current;
        const isCovered = i < current;
        const distance = current - i;

        return (
          <div
            key={i}
            className="stack-panel"
            style={{
              zIndex: i + 1,
              transform: isActive
                ? `translateY(0) scale(${isCovered ? 1 - distance * 0.02 : 1})`
                : "translateY(100%)",
              filter: isCovered ? `blur(${Math.min(distance * 6, 16)}px)` : "none",
              opacity: isCovered && distance > 2 ? 0.5 : 1,
            }}
          >
            {child}
          </div>
        );
      })}

      {/* Navigation dots */}
      <div className="stack-nav">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`stack-dot ${i === current ? "stack-dot-active" : ""}`}
            aria-label={`Section ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
