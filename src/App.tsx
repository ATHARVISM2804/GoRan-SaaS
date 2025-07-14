import React from 'react';
import MovingBackground from './components/MovingBackground';
import CursorAnimation from './components/CursorAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChatbotSection from './components/ChatbotSection';
import Services from './components/Services';
import WhyGoRan from './components/WhyGoRan';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MovingBackground />
      <CursorAnimation />
      <Navbar />
      <Hero />
      <ChatbotSection />
      <Services />
      <WhyGoRan />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;