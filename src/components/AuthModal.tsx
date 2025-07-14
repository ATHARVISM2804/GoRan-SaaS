import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight, Github, Chrome } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Auth submission:', { mode, formData });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md">
        <div className="bg-black/40 backdrop-blur-2xl border border-silver/20 rounded-3xl p-8 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-silver/60 hover:text-silver hover:bg-silver/10 rounded-full transition-all duration-300"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Join GoRan'}
            </h2>
            <p className="text-silver/70 font-light">
              {mode === 'login' 
                ? 'Sign in to access your AI automation dashboard' 
                : 'Create your account and start building with AI'
              }
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center px-4 py-3 bg-silver/5 hover:bg-silver/10 border border-silver/20 hover:border-silver/30 rounded-xl text-silver font-medium transition-all duration-300 group">
              <Github size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              Continue with GitHub
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 bg-silver/5 hover:bg-silver/10 border border-silver/20 hover:border-silver/30 rounded-xl text-silver font-medium transition-all duration-300 group">
              <Chrome size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-silver/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black/40 text-silver/60 font-light">or continue with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver/50" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-silver/5 border border-silver/20 rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/40 focus:bg-silver/10 transition-all duration-300"
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver/50" />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-silver/5 border border-silver/20 rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/40 focus:bg-silver/10 transition-all duration-300"
                required
              />
            </div>

            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver/50" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-silver/5 border border-silver/20 rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/40 focus:bg-silver/10 transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-silver/50 hover:text-silver transition-colors duration-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {mode === 'signup' && (
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-silver/50" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-silver/5 border border-silver/20 rounded-xl text-silver placeholder-silver/50 focus:outline-none focus:border-silver/40 focus:bg-silver/10 transition-all duration-300"
                  required
                />
              </div>
            )}

            {mode === 'login' && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-silver/70 hover:text-silver transition-colors duration-300"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="group w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-silver/20 to-silver/10 hover:from-silver/30 hover:to-silver/20 border border-silver/30 hover:border-silver/40 rounded-xl text-silver font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-silver/20 hover:scale-[1.02]"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'}
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-silver/60 text-sm font-light">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-silver hover:text-white font-medium transition-colors duration-300"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          {mode === 'signup' && (
            <p className="text-xs text-silver/50 text-center mt-4 font-light">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-silver/70 hover:text-silver transition-colors duration-300">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-silver/70 hover:text-silver transition-colors duration-300">Privacy Policy</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;