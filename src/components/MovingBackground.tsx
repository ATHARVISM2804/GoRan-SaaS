import React, { useEffect, useState } from 'react';

const MovingBackground = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      gradient: 'from-purple-900/20 via-blue-900/15 to-indigo-900/20',
      particles: 'from-purple-400/10 to-blue-400/5',
      orbs: [
        { size: 'w-96 h-96', position: 'top-1/4 left-1/4', color: 'from-purple-500/8 to-blue-500/4' },
        { size: 'w-80 h-80', position: 'bottom-1/3 right-1/4', color: 'from-indigo-500/6 to-purple-500/3' },
        { size: 'w-64 h-64', position: 'top-2/3 right-1/3', color: 'from-blue-500/7 to-indigo-500/4' }
      ]
    },
    {
      id: 2,
      gradient: 'from-emerald-900/20 via-teal-900/15 to-cyan-900/20',
      particles: 'from-emerald-400/10 to-teal-400/5',
      orbs: [
        { size: 'w-72 h-72', position: 'top-1/3 right-1/4', color: 'from-emerald-500/8 to-teal-500/4' },
        { size: 'w-88 h-88', position: 'bottom-1/4 left-1/3', color: 'from-teal-500/6 to-cyan-500/3' },
        { size: 'w-56 h-56', position: 'top-3/4 left-1/4', color: 'from-cyan-500/7 to-emerald-500/4' }
      ]
    },
    {
      id: 3,
      gradient: 'from-rose-900/20 via-pink-900/15 to-fuchsia-900/20',
      particles: 'from-rose-400/10 to-pink-400/5',
      orbs: [
        { size: 'w-84 h-84', position: 'top-1/2 left-1/2', color: 'from-rose-500/8 to-pink-500/4' },
        { size: 'w-76 h-76', position: 'top-1/4 right-1/3', color: 'from-pink-500/6 to-fuchsia-500/3' },
        { size: 'w-68 h-68', position: 'bottom-1/3 left-1/4', color: 'from-fuchsia-500/7 to-rose-500/4' }
      ]
    },
    {
      id: 4,
      gradient: 'from-amber-900/20 via-orange-900/15 to-red-900/20',
      particles: 'from-amber-400/10 to-orange-400/5',
      orbs: [
        { size: 'w-92 h-92', position: 'bottom-1/4 right-1/4', color: 'from-amber-500/8 to-orange-500/4' },
        { size: 'w-60 h-60', position: 'top-1/3 left-1/3', color: 'from-orange-500/6 to-red-500/3' },
        { size: 'w-78 h-78', position: 'top-2/3 right-1/2', color: 'from-red-500/7 to-amber-500/4' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Slide Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-[3000ms] ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100 blur-0' 
              : 'opacity-0 scale-110 blur-sm'
          }`}
        >
          {/* Main Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} animate-gradient-shift`} />
          
          {/* Floating Orbs with Motion Blur */}
          {slide.orbs.map((orb, orbIndex) => (
            <div
              key={orbIndex}
              className={`absolute ${orb.size} ${orb.position} bg-gradient-to-br ${orb.color} rounded-full blur-3xl animate-float-complex transition-all duration-[2000ms] ease-out`}
              style={{
                animationDelay: `${orbIndex * 1.5}s`,
                animationDuration: `${12 + orbIndex * 2}s`,
                filter: index === currentSlide ? 'blur(48px)' : 'blur(64px)',
                transform: index === currentSlide ? 'scale(1)' : 'scale(1.2)'
              }}
            />
          ))}

          {/* Particle System */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${slide.particles} rounded-full animate-particle-float transition-all duration-[1500ms]`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${10 + Math.random() * 8}s`,
                  opacity: index === currentSlide ? 0.6 : 0.2
                }}
              />
            ))}
          </div>

          {/* Dynamic Light Rays */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-px h-96 bg-gradient-to-t from-transparent via-silver/5 to-transparent origin-bottom animate-ray-rotate transition-all duration-[2500ms]`}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + Math.sin(i) * 20}%`,
                  transform: `rotate(${i * 45}deg)`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${15 + i * 2}s`,
                  opacity: index === currentSlide ? 0.4 : 0.1
                }}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Motion Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 backdrop-blur-[0.5px]" />
      
      {/* Depth Layers */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
    </div>
  );
};

export default MovingBackground;