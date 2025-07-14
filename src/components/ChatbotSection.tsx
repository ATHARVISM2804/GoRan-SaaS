import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User, Sparkles, ArrowRight, Zap } from 'lucide-react';

const ChatbotSection = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m GoRan AI. How can I help you automate your business today?' },
    { type: 'user', text: 'I need help building a customer support chatbot' },
    { type: 'bot', text: 'Perfect! I can help you create an intelligent chatbot that handles customer inquiries 24/7. Would you like to see a demo?' }
  ]);

  const features = [
    { icon: Zap, title: 'Instant Responses', desc: 'Lightning-fast AI responses' },
    { icon: Bot, title: 'Smart Learning', desc: 'Learns from every interaction' },
    { icon: MessageSquare, title: 'Multi-Channel', desc: 'Works across all platforms' }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-500/[0.03] to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-500/[0.02] to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Floating chat bubbles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white/5 rounded-full animate-float-particle"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 8}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] text-sm text-gray-400 mb-8">
              <Bot size={16} className="mr-2 text-blue-400" />
              AI Chatbot Solutions
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-silver via-white to-silver bg-clip-text text-transparent">
                Conversations that
              </span>
              <br />
              <span className="bg-gradient-to-r from-silver/90 via-silver to-silver/80 bg-clip-text text-transparent">
                convert customers
              </span>
            </h2>
            
            <p className="text-xl text-silver/70 mb-8 font-light leading-relaxed">
              Deploy intelligent chatbots that understand context, learn from interactions, 
              and provide human-like support across all your channels.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 bg-silver/[0.02] backdrop-blur-sm border border-silver/[0.05] rounded-xl hover:border-silver/[0.1] hover:bg-silver/[0.03] transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-silver/[0.1] to-silver/[0.05] border border-silver/[0.1] rounded-lg mb-3 w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={20} className="text-silver" />
                  </div>
                  <h4 className="font-semibold text-silver mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-silver/70 font-light">{feature.desc}</p>
                </div>
              ))}
            </div>

            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-silver/30 to-silver/20 hover:from-silver/40 hover:to-silver/30 text-silver border border-silver/40 hover:border-silver/50 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-silver/20 hover:scale-105 shine-button">
              Try Our Chatbot
              <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Side - Chat Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-silver/[0.08] to-silver/[0.02] backdrop-blur-xl border border-silver/[0.1] rounded-2xl p-6 shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-silver/[0.1]">
                <div className="flex items-center">
                  <div className="p-2 bg-gradient-to-br from-silver/20 to-silver/10 rounded-full mr-3">
                    <Bot size={20} className="text-silver" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-silver">GoRan AI Assistant</h4>
                    <p className="text-xs text-green-400 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Online
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles size={16} className="text-yellow-400 animate-pulse" />
                  <span className="text-xs text-silver/70">AI Powered</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <div className={`flex items-start max-w-xs ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`p-2 rounded-full ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-br from-silver/[0.2] to-silver/[0.1] ml-2' 
                          : 'bg-gradient-to-br from-silver/20 to-silver/10 mr-2'
                      }`}>
                        {message.type === 'user' ? (
                          <User size={16} className="text-silver" />
                        ) : (
                          <Bot size={16} className="text-silver" />
                        )}
                      </div>
                      <div className={`px-4 py-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-silver/[0.15] to-silver/[0.1] text-silver'
                          : 'bg-gradient-to-r from-silver/[0.05] to-silver/[0.02] text-silver/80 border border-silver/[0.05]'
                      }`}>
                        <p className="text-sm font-light">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 bg-silver/[0.03] backdrop-blur-sm border border-silver/[0.08] rounded-full text-silver placeholder-silver/50 focus:outline-none focus:border-silver/[0.2] focus:bg-silver/[0.05] transition-all duration-300"
                  />
                </div>
                <button className="p-3 bg-gradient-to-r from-silver/30 to-silver/20 hover:from-silver/40 hover:to-silver/30 border border-silver/40 hover:border-silver/50 rounded-full text-silver hover:shadow-lg hover:shadow-silver/20 transition-all duration-300 hover:scale-110">
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-silver/20 to-silver/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-silver/15 to-silver/5 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;