import React from 'react';
import { Terminal, ChevronUp, MapPin, Phone, Mail } from 'lucide-react';
import { EVENT_CONFIG } from '../../lib/supabaseClient';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, rgba(6, 10, 23, 0.95) 0%, #03060f 100%)',
      borderTop: '1px solid rgba(6, 182, 212, 0.2)',
      padding: '70px 0 30px 0',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem',
        }}>
          {/* Column 1: College & Event Branding */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/assets/college_logo.jpeg"
                alt="College Logo"
                style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  color: '#ffffff',
                }}>
                  BINARY <span className="gradient-text-cyan">BATTLE</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#22d3ee' }}>
                  EDITION 2026 // ON-CAMPUS
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.85rem', color: '#f43f5e', fontWeight: 600, marginBottom: '0.25rem' }}>
              ಶ್ರೀ ಸತ್ಯಂ ಪದವಿ ಮಹಾವಿದ್ಯಾಲಯ, ಬೀದರ
            </div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
              Shri Satyam Degree College, Bidar
            </div>
            <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              "Think. Code. Conquer." A premier college-level technical aptitude and computer lab coding competition fostering algorithmic excellence and logical thinking.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.78rem',
              color: '#a78bfa',
              fontStyle: 'italic',
            }}>
              "Every expert was once a beginner."
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
            }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <a href="#hero" style={{ color: '#94a3b8' }}>Home</a>
              <a href="#about" style={{ color: '#94a3b8' }}>About Binary Battle</a>
              <a href="#rounds" style={{ color: '#94a3b8' }}>Competition Rounds & Syllabus</a>
              <a href="#process" style={{ color: '#94a3b8' }}>Event Process</a>
              <a href="#certificates" style={{ color: '#94a3b8' }}>Honors & Certificates</a>
              <a href="#guidelines" style={{ color: '#94a3b8' }}>Event Guidelines</a>
              <a href="#register" style={{ color: '#22d3ee' }}>Student Registration</a>
              <a href="#faq" style={{ color: '#94a3b8' }}>FAQs</a>
              <a href="#contact" style={{ color: '#94a3b8' }}>Contact & Helpdesk</a>
            </div>
          </div>

          {/* Column 3: Campus Location & Official Contact */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem',
            }}>
              Campus & Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.86rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={18} color="#22d3ee" style={{ flexShrink: 0 }} />
                <span>Devi Colony, Opp. Gurudwara Gate, Bidar - 585401, Karnataka</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Phone size={18} color="#34d399" style={{ flexShrink: 0 }} />
                <span>{EVENT_CONFIG.contact_number}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Mail size={18} color="#c084fc" style={{ flexShrink: 0 }} />
                <a href="mailto:placement@shrisatyam.in" style={{ color: '#c084fc', wordBreak: 'break-all' }}>
                  placement@shrisatyam.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1.75rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.82rem',
          color: '#64748b',
        }}>
          <div>
            © 2026 <strong>Shri Satyam Degree College, Bidar</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span>Affiliated to Bidar University</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                padding: '0.35rem 0.75rem',
                color: '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
              }}
            >
              <span>Back to Top</span>
              <ChevronUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
