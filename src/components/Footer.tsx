import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Send, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Solutions': ['Website Development', 'AI Agents', 'Automation', 'Chatbots'],
    'Company': ['About Us', 'Careers', 'Blog', 'Contact'],
    'Resources': ['Documentation', 'API Reference', 'Tutorials', 'Community'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance']
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black border-t border-white/[0.08] relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-white/[0.01] to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-silver/[0.05] backdrop-blur-sm border border-silver/[0.08] text-sm text-silver/70 mb-8">
                Get in Touch
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
                  Ready to transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-silver/90 to-silver/70 bg-clip-text text-transparent">
                  your business?
                </span>
              </h3>
              <p className="text-silver/70 mb-8 font-light text-lg">
                Let's discuss how GoRan can help you achieve your goals with intelligent automation.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-4 bg-silver/[0.03] backdrop-blur-sm border border-silver/[0.08] rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/[0.2] focus:bg-silver/[0.05] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-4 bg-silver/[0.03] backdrop-blur-sm border border-silver/[0.08] rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/[0.2] focus:bg-silver/[0.05] transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-4 bg-silver/[0.03] backdrop-blur-sm border border-silver/[0.08] rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/[0.2] focus:bg-silver/[0.05] transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-4 bg-silver/[0.03] backdrop-blur-sm border border-silver/[0.08] rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/[0.2] focus:bg-silver/[0.05] transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-silver/30 to-silver/20 hover:from-silver/40 hover:to-silver/30 text-silver border border-silver/40 hover:border-silver/50 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-silver/20 hover:scale-105"
                >
                  Send Message
                  <Send size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="p-4 bg-gradient-to-br from-silver/[0.1] to-silver/[0.05] border border-silver/[0.1] rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-silver" />
                  </div>
                  <div>
                    <h4 className="text-silver font-semibold mb-2">Email</h4>
                    <p className="text-silver/70 font-light">hello@goran.ai</p>
                    <p className="text-silver/70 font-light">support@goran.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="p-4 bg-gradient-to-br from-silver/[0.1] to-silver/[0.05] border border-silver/[0.1] rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-silver" />
                  </div>
                  <div>
                    <h4 className="text-silver font-semibold mb-2">Phone</h4>
                    <p className="text-silver/70 font-light">+1 (555) 123-4567</p>
                    <p className="text-silver/70 font-light">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="p-4 bg-gradient-to-br from-silver/[0.1] to-silver/[0.05] border border-silver/[0.1] rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} className="text-silver" />
                  </div>
                  <div>
                    <h4 className="text-silver font-semibold mb-2">Address</h4>
                    <p className="text-silver/70 font-light">123 AI Street</p>
                    <p className="text-silver/70 font-light">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-12">
                <h4 className="text-silver font-semibold mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group p-4 bg-silver/[0.03] backdrop-blur-sm border border-silver/[0.08] rounded-xl text-silver/70 hover:text-silver hover:bg-silver/[0.05] hover:border-silver/[0.15] transition-all duration-300 hover:scale-110"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="relative z-10 border-t border-silver/[0.08] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-silver font-semibold mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-silver/70 hover:text-silver transition-colors duration-300 text-sm font-light hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-silver/[0.08] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-silver/70 text-sm font-light">
              © 2024 GoRan. All rights reserved.
            </div>
            <div className="flex items-center space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-silver/70 hover:text-silver text-sm font-light transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-silver/70 hover:text-silver text-sm font-light transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-silver/70 hover:text-silver text-sm font-light transition-colors duration-300">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;