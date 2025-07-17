import React from 'react';
import { Zap, Brain, Cog, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';
import GlareHover from './GlareHover';

const WhyGoRan = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Development',
      description: 'Deploy production-ready applications 10x faster with our AI-powered development tools and automated workflows.',
      stats: '10x Faster',
      metric: 'Development Speed'
    },
    {
      icon: Brain,
      title: 'Intelligent AI Integration',
      description: 'Custom AI solutions that understand your business context and adapt to your unique processes and requirements.',
      stats: '99.9%',
      metric: 'Accuracy Rate'
    },
    {
      icon: Cog,
      title: 'Complete Automation',
      description: 'End-to-end automation from development to deployment, monitoring, and maintenance with zero downtime.',
      stats: '24/7',
      metric: 'Uptime Guarantee'
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 Type II compliance with bank-level encryption' },
    { icon: Users, title: 'Expert Support', description: 'Dedicated AI specialists available around the clock' },
    { icon: TrendingUp, title: 'Infinite Scale', description: 'Seamlessly grow from startup to enterprise level' }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-white/[0.025] to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-full blur-3xl animate-float-reverse"></div>

        {/* Animated connecting lines */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-line-flow"
              style={{
                left: `${30 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-silver/[0.05] backdrop-blur-sm border border-silver/[0.08] text-sm text-silver/70 mb-8">
            Why Choose GoRan
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
              Built for the future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-silver/90 to-silver/70 bg-clip-text text-transparent">
              intelligent automation
            </span>
          </h2>
          <p className="text-xl text-silver/70 max-w-4xl mx-auto font-light">
            Transform your business with cutting-edge AI technology that delivers measurable results 
            and scales with your ambitions.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <GlareHover key={index} glareColor="#ffffff" glareOpacity={0.1} glareAngle={-30} glareSize={300} transitionDuration={700}>
              <div
                className="group relative p-8 lg:p-10 bg-gradient-to-br from-silver/[0.03] to-silver/[0.01] backdrop-blur-sm rounded-2xl border border-silver/[0.08] hover:border-silver/[0.15] transition-all duration-500 h-[380px] flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <div className="p-4 bg-gradient-to-br from-silver/[0.1] to-silver/[0.05] border border-silver/[0.1] rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={28} className="text-silver" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
                        {feature.stats}
                      </div>
                      <div className="text-xs text-silver/60 font-medium mt-1">
                        {feature.metric}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-silver mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-silver/70 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </GlareHover>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <GlareHover key={index} glareColor="#ffffff" glareOpacity={0.08} glareAngle={-30} glareSize={250} transitionDuration={600}>
              <div
                className="group flex flex-col justify-between h-[220px] p-6 bg-silver/[0.02] backdrop-blur-sm rounded-xl border border-silver/[0.05] hover:border-silver/[0.1] hover:bg-silver/[0.03] transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-silver/[0.05] border border-silver/[0.1] rounded-lg mr-4 group-hover:bg-silver/[0.08] transition-colors duration-300">
                    <benefit.icon size={20} className="text-silver" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver mb-2 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-silver/70 font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </GlareHover>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-silver/[0.03] backdrop-blur-sm border border-silver/[0.08] rounded-full">
            <CheckCircle size={16} className="text-green-400 mr-2" />
            <span className="text-sm text-silver/80 font-medium">
              Trusted by 500+ companies worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGoRan;