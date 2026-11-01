import React from 'react';
import CyberBackground from './components/CyberBackground';
import Navbar from './components/public/Navbar';
import Hero from './components/public/Hero';
import About from './components/public/About';
import Rounds from './components/public/Rounds';
import Process from './components/public/Process';
import Certificates from './components/public/Certificates';
import Guidelines from './components/public/Guidelines';
import RegisterSection from './components/public/RegisterSection';
import FAQ from './components/public/FAQ';
import Contact from './components/public/Contact';
import Footer from './components/public/Footer';
import { EVENT_CONFIG } from './lib/supabaseClient';

export default function App() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      {/* Matrix / Cyber Particles Background */}
      <CyberBackground />

      {/* Official Sticky Navbar */}
      <Navbar onRegisterClick={scrollToRegister} />

      {/* Main Public Website Sections */}
      <main>
        <Hero
          settings={EVENT_CONFIG}
          onRegisterClick={scrollToRegister}
        />

        <About
          settings={EVENT_CONFIG}
        />

        <Rounds />

        <Process />

        <Certificates
          settings={EVENT_CONFIG}
        />

        <Guidelines />

        <RegisterSection />

        <FAQ />

        <Contact />
      </main>

      {/* Official Footer */}
      <Footer />
    </div>
  );
}
