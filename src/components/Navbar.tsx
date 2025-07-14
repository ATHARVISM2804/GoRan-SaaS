import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'signup' }>({
    isOpen: false,
    mode: 'login'
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-silver/[0.08]' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
                GoRan
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {['Home', 'Solutions', 'AI Agents', 'Workflows', 'Chatbots', 'Pricing'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="relative px-4 py-2 text-sm font-medium text-silver/80 hover:text-silver transition-all duration-300 rounded-lg hover:bg-silver/[0.05] group"
                  >
                    {item}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-silver/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => openAuthModal('login')}
                className="text-sm font-medium text-silver/80 hover:text-silver transition-colors duration-300"
              >
                Sign In
              </button>
              <button 
                onClick={() => openAuthModal('signup')}
                className="group relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-silver/20 to-silver/10 hover:from-silver/30 hover:to-silver/20 text-silver border border-silver/30 hover:border-silver/40 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-silver/20 hover:scale-105"
              >
                Get Started
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-silver/80 hover:text-silver transition-colors duration-300 rounded-lg hover:bg-silver/[0.05]"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-silver/[0.08]">
            <div className="px-6 py-6 space-y-2">
              {['Home', 'Solutions', 'AI Agents', 'Workflows', 'Chatbots', 'Pricing'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-4 py-3 text-silver/80 hover:text-silver hover:bg-silver/[0.05] rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <button 
                  onClick={() => openAuthModal('login')}
                  className="block w-full text-left px-4 py-3 text-silver/80 hover:text-silver transition-colors duration-300"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => openAuthModal('signup')}
                  className="w-full bg-gradient-to-r from-silver/20 to-silver/10 text-silver border border-silver/30 px-6 py-3 rounded-full font-semibold"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={authModal.isOpen} 
        onClose={closeAuthModal} 
        initialMode={authModal.mode}
      />
    </>
  );
};

export default Navbar;