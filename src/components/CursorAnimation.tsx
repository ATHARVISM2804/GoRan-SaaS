import React, { useEffect, useState } from 'react';

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: trailId++ }];
        return newTrail.slice(-15); // Keep only last 15 positions
      });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setTrail([]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        button, a, input, textarea, [role="button"] {
          cursor: none !important;
        }
      `}</style>

      {/* Custom Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
        }}
      >
        {/* Main Cursor */}
        <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
          isHovering 
            ? 'border-silver bg-silver/20 shadow-lg shadow-silver/50' 
            : 'border-silver/70 bg-silver/10'
        }`} />
        
        {/* Inner Dot */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-all duration-200 ${
          isHovering ? 'bg-silver scale-150' : 'bg-silver/80 scale-100'
        }`} />
      </div>

      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed top-0 left-0 pointer-events-none z-[9998] w-2 h-2 rounded-full bg-silver/30 transition-all duration-500 ease-out"
          style={{
            transform: `translate(${point.x - 4}px, ${point.y - 4}px)`,
            opacity: (index + 1) / trail.length * 0.6,
            scale: (index + 1) / trail.length * 0.8,
          }}
        />
      ))}

      {/* Cursor Glow Effect */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997] w-32 h-32 rounded-full bg-gradient-radial from-silver/5 to-transparent transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 64}px, ${mousePosition.y - 64}px)`,
          opacity: isHovering ? 0.8 : 0.3,
        }}
      />
    </>
  );
};

export default CursorAnimation;