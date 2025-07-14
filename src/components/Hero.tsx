import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

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
              <span className="block bg-gradient-to-r from-cyan-400 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl text-shadow-glow">
                Smarter Systems.
              </span>
              <span className="block bg-gradient-to-r from-cyan-300/90 via-cyan-200 to-cyan-100/80 bg-clip-text text-transparent relative z-10 drop-shadow-2xl">
                Seamless Automation.
              </span>
              <span className="block bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent drop-shadow-2xl text-shadow-glow">
                GoRan.
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-cyan-100/80 max-w-4xl mx-auto leading-relaxed font-light mt-6">
            Build intelligent websites, workflows, and agents with unprecedented speed and precision.
            Transform your business with AI that actually works.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400/30 to-cyan-200/20 hover:from-cyan-400/40 hover:to-cyan-200/30 text-cyan-100 border border-cyan-400/40 hover:border-cyan-400/60 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/30 hover:scale-105 shine-button overflow-hidden">
              <span className="relative z-10">Start Building</span>
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 to-cyan-100/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group inline-flex items-center px-8 py-4 bg-cyan-100/[0.05] backdrop-blur-sm border border-cyan-100/[0.2] text-cyan-100 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-cyan-100/[0.08] hover:border-cyan-100/[0.3] hover:shadow-lg hover:shadow-cyan-100/20 shine-button-outline">
              <Play size={20} className="mr-2" />
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                  <span className="text-cyan-100/70">{stat.suffix}</span>
                </div>
                <div className="text-sm text-cyan-100/60 font-medium">{stat.label}</div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-100/30 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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






