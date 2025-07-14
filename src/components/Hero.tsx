import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import BlurText from './BlurText';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Vanta.NET Canvas Background */}
      <AnimatedBackground />

      {/* Overlay gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-32">
        <div className="space-y-8">
          <div className="space-y-6 mt-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
              <BlurText
                text="Smarter Systems."
                delay={0}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]"
              />
              <BlurText
                text="Seamless Automation."
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]"
              />
              <BlurText
                text="GoRan."
                delay={400}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.55)]"
              />
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light mt-6">
            Build intelligent websites, workflows, and agents with unprecedented speed and precision.
            Transform your business with AI that actually works.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <button className="group relative inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/40 hover:border-white/70 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/30 hover:scale-105 overflow-hidden">
              <span className="relative z-10">Start Building</span>
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 text-white" />
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-white/20">
              <Play size={20} className="mr-2 text-white" />
              Watch Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Projects Deployed', suffix: '' },
              { number: '99.9', label: 'Uptime SLA', suffix: '%' },
              { number: '500', label: 'Enterprise Clients', suffix: '+' },
              { number: '24', label: 'Global Support', suffix: '/7' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent mb-2">
                  {stat.number}
                  <span className="text-white/70">{stat.suffix}</span>
                </div>
                <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default Hero;







