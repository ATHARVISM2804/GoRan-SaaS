import React, { useEffect, useState } from 'react';

const CursorAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }

        @keyframes ringPulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
      `}</style>

      <div
        className="fixed z-[9999] pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        }}
      >
        <div className="relative w-10 h-10 flex items-center justify-center">
          {/* Glass Ring 1 */}
          <div className="absolute w-full h-full rounded-full border border-white/20 backdrop-blur-sm bg-white/5 animate-ringPulse" />
          
          {/* Glass Ring 2 */}
          <div className="absolute w-8 h-8 rounded-full border border-white/10 backdrop-blur-sm bg-white/2" />

          {/* Center Dot */}
          <div className="w-2 h-2 rounded-full bg-white/70 backdrop-blur-[2px] shadow-md" />
        </div>
      </div>
    </>
  );
};

export default CursorAnimation;


