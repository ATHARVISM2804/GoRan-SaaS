import React, { useEffect, useRef, useState } from 'react';

const MovingBackground = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const slides = [
    {
      id: 1,
      color: 0x8e44ad,
      color2: 0xffffff,
      backgroundColor: 0x1a1a2e,
    },
    {
      id: 2,
      color: 0x1abc9c,
      color2: 0xffffff,
      backgroundColor: 0x102027,
    },
    {
      id: 3,
      color: 0xe91e63,
      color2: 0xffffff,
      backgroundColor: 0x2a003f,
    },
    {
      id: 4,
      color: 0xffc107,
      color2: 0xffffff,
      backgroundColor: 0x331a00,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    let effectInstance: any = null;

    const loadVanta = async () => {
      const THREE = await import('three');

      // Load the custom GLOBE script from the public folder
      const script = document.createElement('script');
      script.src = '/vantaGlobe.min.js';
      script.async = true;

      script.onload = () => {
        if (window._vantaEffect && vantaRef.current) {
          if (vantaEffect) vantaEffect.destroy?.(); // Clean up old effect

          const { color, color2, backgroundColor } = slides[currentSlide];

          effectInstance = window._vantaEffect.default({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color,
            color2,
            backgroundColor,
            points: window.innerWidth < 768 ? 6 : 10,
            maxDistance: window.innerWidth < 768 ? 10 : 20,
            spacing: window.innerWidth < 768 ? 25 : 15,
            showDots: window.innerWidth >= 768,
            mouseCoeffX: 0.2,
            mouseCoeffY: 0.2,
          });

          setVantaEffect(effectInstance);
        }
      };

      document.body.appendChild(script);
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy?.();
    };
  }, [currentSlide]);

  return (
    <div ref={vantaRef} className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Optional glow layer on top of Vanta */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-cyan-300/5 mix-blend-soft-light" />
    </div>
  );
};

export default MovingBackground;

