import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    VANTA: any;
  }
}

const AnimatedBackground = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (!vantaRef.current || isMobile) return;

    const loadVanta = async () => {
      const THREE = await import("three");

      const script = document.createElement("script");
      script.src = "/vantaGlobe.min.js"; // must be inside /public
      script.async = true;

      script.onload = () => {
        if (!vantaEffect && window.VANTA?.GLOBE) {
          const effect = window.VANTA.GLOBE({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x64ffda,
            color2: 0x00c3ff,
            backgroundColor: 0x000000,
            size: 1.2,
          });
          setVantaEffect(effect);
        }
      };

      document.body.appendChild(script);
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy?.();
    };
  }, [isMobile]);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground;









