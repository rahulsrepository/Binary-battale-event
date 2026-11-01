import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar({ onRegisterClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Rounds', href: '#rounds' },
    { label: 'Process', href: '#process' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Guidelines', href: '#guidelines' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 110;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.3s ease',
    }}>
      {/* College Official Accreditation Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #090e23 0%, #101b3f 50%, #090e23 100%)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.2)',
        padding: '0.4rem 1rem',
        fontSize: '0.8rem',
        color: '#cbd5e1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <img 
            src="/assets/college_logo.jpeg" 
            alt="Shri Satyam College Logo" 
            style={{ width: '26px', height: '26px', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div>
            <span style={{ fontWeight: 700, color: '#ffffff' }}>
              ಶ್ರೀ ಸತ್ಯಂ ಪದವಿ ಮಹಾವಿದ್ಯಾಲಯ, ಬೀದರ
            </span>
            <span style={{ margin: '0 0.5rem', color: '#06b6d4', opacity: 0.6 }}>|</span>
            <span style={{ color: '#e2e8f0', fontWeight: 600 }}>
              Shri Satyam Degree College, Bidar
            </span>
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          fontSize: '0.74rem',
          color: '#94a3b8'
        }} className="desktop-only-info">
          <span>Affiliated to Bidar University, Bidar</span>
          <span>•</span>
          <span>Recognized by Govt. of Karnataka</span>
          <span>•</span>
          <span style={{ color: '#38bdf8' }}>Devi Colony, Opp. Gurudwara Gate</span>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <nav style={{
        background: isScrolled ? 'rgba(10, 15, 36, 0.92)' : 'rgba(10, 15, 36, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(6, 182, 212, 0.15)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
        }}>
          {/* Logo & Event Title */}
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(124, 58, 237, 0.3))',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)',
            }}>
              <Terminal size={22} color="#22d3ee" />
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.28rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}>
                <span style={{ color: '#ffffff' }}>BINARY</span>
                <span style={{ 
                  background: 'linear-gradient(135deg, #22d3ee, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>BATTLE</span>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--neon-cyan-bright)',
                letterSpacing: '0.08em',
                fontWeight: 600,
              }}>
                EDITION 2026 // SHRI SATYAM
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
          }} className="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  color: '#cbd5e1',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                  padding: '0.3rem 0',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#22d3ee')}
                onMouseLeave={(e) => (e.target.style.color = '#cbd5e1')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            {/* Status Pill */}
            <div className="status-pill open status-pill-hide-mobile">
              <span className="status-dot"></span>
              <span>REGISTRATIONS OPEN</span>
            </div>

            {/* Register Now Primary Button */}
            <button
              onClick={onRegisterClick}
              className="btn btn-primary btn-sm register-btn-glow"
              style={{
                fontSize: '0.86rem',
                fontWeight: 700,
              }}
            >
              <Sparkles size={14} />
              <span>Register Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(16, 27, 63, 0.8)',
                border: '1px solid var(--border-cyan)',
                borderRadius: '8px',
                color: '#ffffff',
                padding: '0.45rem',
                display: 'none',
              }}
              className="mobile-menu-btn"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '90px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(6, 10, 23, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border-cyan)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          zIndex: 99,
          animation: 'fadeIn 0.25s ease-out',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>NAVIGATION MENU</span>
            <div className="status-pill open">
              <span className="status-dot"></span>
              <span>OPEN</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(16, 27, 63, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="#06b6d4" />
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRegisterClick();
              }}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <Sparkles size={16} />
              <span>Register Now for Free</span>
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-only-info { display: none !important; }
          .nav-desktop-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .status-pill-hide-mobile { display: none !important; }
        }
        @media (max-width: 480px) {
          .register-btn-glow span { display: inline-block; font-size: 0.8rem; }
        }
      `}</style>
    </header>
  );
}
