import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    let effectInstance: any = null;

    const loadVanta = async () => {
      const THREE = await import('three');
      const VANTA = await import('vanta/dist/vanta.net.min');

      if (!effectInstance) {
        effectInstance = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,

          // ✨ Styling
          color: 0x66fcf1,
          backgroundColor: 0x0b0c10,
          points: isMobile ? 6.0 : 12.0,
          maxDistance: isMobile ? 15.0 : 25.0,
          spacing: isMobile ? 30.0 : 20.0,
          showDots: !isMobile,

          // ✅ Snappy Movement
          mouseCoeffX: 1.0,
          mouseCoeffY: 1.0,
        });

        setVantaEffect(effectInstance);
      }
    };

    loadVanta();

    return () => {
      if (effectInstance) effectInstance.destroy?.();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    >
      {/* Optional Glassy Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-cyan-300/5 mix-blend-soft-light" />
    </div>
  );
};

export default AnimatedBackground;






