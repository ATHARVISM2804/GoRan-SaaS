import React from 'react';
import { Globe, Bot, Workflow, MessageSquare, ArrowUpRight } from 'lucide-react';
import GlareHover from './GlareHover'; // ✅ Your custom glare component

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom websites built with cutting-edge technology and seamless AI integration for modern businesses.',
      features: ['AI-Powered Design', 'Lightning Fast', 'SEO Optimized']
    },
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Intelligent agents that automate complex tasks and enhance user experiences across all touchpoints.',
      features: ['Smart Automation', 'Natural Language', 'Self-Learning']
    },
    {
      icon: Workflow,
      title: 'Automation Workflows',
      description: 'Streamlined processes that eliminate manual work and accelerate your business operations.',
      features: ['No-Code Builder', 'Real-time Sync', 'Enterprise Scale']
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Solutions',
      description: 'Advanced conversational AI for customer support, sales, and engagement that feels human.',
      features: ['Multi-Channel', 'Context Aware', '24/7 Available']
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/[0.015] to-transparent rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-silver/[0.05] backdrop-blur-sm border border-silver/[0.08] text-sm text-silver/70 mb-8">
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
              Everything you need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-silver/90 to-silver/70 bg-clip-text text-transparent">
              build the future
            </span>
          </h2>
          <p className="text-xl text-silver/70 max-w-3xl mx-auto font-light">
            Comprehensive AI-powered solutions designed to transform how you build, 
            automate, and scale your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <GlareHover
              key={index}
              glareColor="#ffffff"
              glareOpacity={0.1}
              glareAngle={-35}
              glareSize={250}
              transitionDuration={800}
              className="rounded-2xl"
              style={{ width: '100%', height: '100%' }}
            >
              <div
                className="group relative h-full p-8 lg:p-10 bg-gradient-to-br from-silver/[0.03] to-silver/[0.01] backdrop-blur-sm rounded-2xl border border-silver/[0.08] hover:border-silver/[0.15] transition-all duration-500 hover:bg-silver/[0.05]"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-silver/[0.1] to-silver/[0.05] border border-silver/[0.1] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} className="text-silver" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-silver mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-silver/70 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-silver/[0.05] border border-silver/[0.1] rounded-full text-xs text-silver/80 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <button className="inline-flex items-center text-sm font-semibold text-silver hover:text-white group-hover:translate-x-1 transition-all duration-300">
                    Learn More
                    <ArrowUpRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

