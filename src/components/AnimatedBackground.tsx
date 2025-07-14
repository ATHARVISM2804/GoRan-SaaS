import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

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
          color: 0x00ffff,
          backgroundColor: 0x000000,
          points: 12.0,
          maxDistance: 20.0,
          spacing: 18.0,
          showDots: true,
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
    />
  );
};

export default AnimatedBackground;





