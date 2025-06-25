import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const tailRefs = useRef<HTMLDivElement[]>([]);
  const requestRef = useRef<number | null>(null);
  const positions = useRef<{ x: number; y: number }[]>([]);

  // Track mouse position
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      // Store positions for tail
      positions.current.unshift({ x: e.clientX, y: e.clientY });
      if (positions.current.length > 12) positions.current.length = 12;
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Animate tail
  useEffect(() => {
    const animate = () => {
      positions.current.forEach((pos, i) => {
        if (tailRefs.current[i]) {
          tailRefs.current[i].style.left = `${pos.x}px`;
          tailRefs.current[i].style.top = `${pos.y}px`;
          tailRefs.current[i].style.opacity = `${1 - i / positions.current.length}`;
        }
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Only show tail in banner section
  // Assumes your banner has id="banner"
  const [showTail, setShowTail] = React.useState(false);
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const banner = document.getElementById("banner");
      if (banner) {
        const rect = banner.getBoundingClientRect();
        setShowTail(
          e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(158,0,255,0.2)",
          border: "2px solid #9E00FF",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "background 0.2s, border 0.2s",
          mixBlendMode: "difference",
        }}
      />
      {/* Asteroid tail */}
      {showTail &&
        Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { tailRefs.current[i] = el!; }}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: 18 - i,
              height: 4 - i * 0.2,
              borderRadius: "50%",
              background: "linear-gradient(90deg, #2EB9DF, #9E00FF)",
              pointerEvents: "none",
              zIndex: 9998,
              opacity: 0,
              transform: "translate(-50%, -50%)",
              filter: "blur(1.5px)",
              transition: "background 0.2s",
            }}
          />
        ))}
    </>
  );
}