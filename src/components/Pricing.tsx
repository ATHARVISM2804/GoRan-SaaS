import React, { useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small projects and startups',
      monthlyPrice: 29,
      yearlyPrice: 24,
      features: [
        '5 AI Agents',
        '10 Automated Workflows',
        '1 Website Build',
        'Community Support',
        'Standard Templates',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      yearlyPrice: 65,
      features: [
        '25 AI Agents',
        'Unlimited Workflows',
        '5 Website Builds',
        'Priority Support',
        'Custom Templates',
        'Advanced Analytics',
        'API Access',
        'White-label Options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large-scale operations',
      monthlyPrice: 199,
      yearlyPrice: 165,
      features: [
        'Unlimited AI Agents',
        'Unlimited Workflows',
        'Unlimited Website Builds',
        'Dedicated Support Manager',
        'Custom Development',
        'Advanced Security & Compliance',
        'SSO Integration',
        'SLA Guarantee',
        'Custom Training & Onboarding'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-black relative">
      {/* Pricing section animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-white/[0.015] to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-l from-white/[0.02] to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Floating price indicators */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/5 rounded-full animate-float-particle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-silver/[0.05] backdrop-blur-sm border border-silver/[0.08] text-sm text-silver/70 mb-8">
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
              Choose your plan
            </span>
          </h2>
          <p className="text-xl text-silver/70 max-w-3xl mx-auto mb-12 font-light">
            Flexible pricing options designed to scale with your business needs. 
            Start free, upgrade when you're ready.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-silver/[0.05] backdrop-blur-sm rounded-full border border-silver/[0.08]">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isYearly 
                  ? 'bg-gradient-to-r from-silver/30 to-silver/20 text-silver border border-silver/40 shadow-lg' 
                  : 'text-silver/70 hover:text-silver'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                isYearly 
                  ? 'bg-gradient-to-r from-silver/30 to-silver/20 text-silver border border-silver/40 shadow-lg' 
                  : 'text-silver/70 hover:text-silver'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative p-8 lg:p-10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-silver/[0.2] shadow-2xl shadow-silver/[0.05] ring-1 ring-silver/[0.1]' 
                  : 'border-silver/[0.08] hover:border-silver/[0.15]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-silver/30 to-silver/20 text-silver border border-silver/40 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-silver/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-silver/[0.1] to-silver/[0.05] border border-silver/[0.1] mb-6">
                    <plan.icon size={28} className="text-silver" />
                  </div>
                  <h3 className="text-2xl font-bold text-silver mb-2">{plan.name}</h3>
                  <p className="text-silver/70 text-sm font-light">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent mb-2">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-lg text-silver/70 font-normal">/month</span>
                  </div>
                  {isYearly && (
                    <div className="text-sm text-silver/70 font-light">
                      Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12} annually
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check size={16} className="text-silver mr-3 flex-shrink-0" />
                        <span className="text-silver/80 text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`group w-full py-4 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-silver/30 to-silver/20 hover:from-silver/40 hover:to-silver/30 text-silver border border-silver/40 hover:border-silver/50 hover:shadow-2xl hover:shadow-silver/20 hover:scale-105' 
                    : 'bg-silver/[0.05] hover:bg-silver/[0.08] text-silver border border-silver/[0.1] hover:border-silver/[0.2]'
                }`}>
                  Get Started
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Bottom Border Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center p-8 bg-silver/[0.02] backdrop-blur-sm border border-silver/[0.08] rounded-2xl">
            <h3 className="text-xl font-bold text-silver mb-2">Need a custom solution?</h3>
            <p className="text-silver/70 mb-6 font-light">
              Let's discuss your specific requirements and create a tailored plan.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-silver/30 to-silver/20 hover:from-silver/40 hover:to-silver/30 text-silver border border-silver/40 hover:border-silver/50 rounded-full font-semibold hover:shadow-lg hover:shadow-silver/20 transition-all duration-300 hover:scale-105">
              Contact Sales
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;