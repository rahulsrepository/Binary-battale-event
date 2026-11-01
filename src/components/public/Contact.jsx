import React from 'react';
import { MapPin, Phone, Mail, User, Building, Compass } from 'lucide-react';
import { EVENT_CONFIG } from '../../lib/supabaseClient';

export default function Contact() {
  const contactPerson = EVENT_CONFIG.contact_person;
  const contactPhone = EVENT_CONFIG.contact_number;
  const contactEmail = 'placement@shrisatyam.in';

  return (
    <section id="contact" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>CAMPUS LOCATION & HELP</span>
          </div>
          <h2 className="section-title">
            Contact & <span className="gradient-text-cyan">Event Helpdesk</span>
          </h2>
          <p className="section-subtitle">
            Need assistance regarding the competition, directions to the campus, or event inquiries? Get in touch with our event coordination desk.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {/* Card 1: College Address & Official Details */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'rgba(6, 182, 212, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Building size={24} color="#22d3ee" />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: '#f43f5e', fontWeight: 600 }}>
                  ಶ್ರೀ ಸತ್ಯಂ ಪದವಿ ಮಹಾವಿದ್ಯಾಲಯ, ಬೀದರ
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800 }}>
                  Shri Satyam Degree College, Bidar
                </h3>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              color: '#cbd5e1',
              fontSize: '0.92rem',
            }}>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <MapPin size={20} color="#22d3ee" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>
                    Campus Address:
                  </strong>
                  <span>Devi Colony, Opp. Gurudwara Gate, Bidar, Karnataka - 585401</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <Compass size={20} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff', display: 'block', marginBottom: '2px' }}>
                    University Affiliation:
                  </strong>
                  <span>Affiliated to Bidar University, Bidar, Halhalli (K), Dist. Bidar - 585415</span>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>
                    Recognized by Government of Karnataka
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '0.5rem',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.82rem',
                color: '#94a3b8',
              }}>
                <span style={{ color: '#22d3ee', fontWeight: 600 }}>Landmark:</span> Directly opposite to the historic Gurudwara Gate in Devi Colony, Bidar. Easily accessible via city transit.
              </div>
            </div>
          </div>

          {/* Card 2: Event Coordinator Contact Placeholders */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'rgba(124, 58, 237, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <User size={24} color="#c084fc" />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#c084fc', textTransform: 'uppercase' }}>
                  ORGANIZING COMMITTEE
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 800 }}>
                  Event Coordinator Desk
                </h3>
              </div>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              {/* Coordinator Name */}
              <div style={{
                background: 'rgba(10, 15, 36, 0.7)',
                padding: '1rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}>
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', color: '#ffffff' }}>
                  <User size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                    FACULTY COORDINATOR
                  </div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.98rem' }}>
                    {contactPerson}
                  </div>
                </div>
              </div>

              {/* Coordinator Phone */}
              <a
                href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                style={{
                  background: 'rgba(10, 15, 36, 0.7)',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                    CONTACT NUMBER
                  </div>
                  <div style={{ fontWeight: 700, color: '#34d399', fontSize: '0.98rem' }}>
                    {contactPhone}
                  </div>
                </div>
              </a>

              {/* Coordinator Email - placement@shrisatyam.in */}
              <a
                href={`mailto:${contactEmail}`}
                style={{
                  background: 'rgba(10, 15, 36, 0.7)',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  textDecoration: 'none',
                }}
              >
                <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                    OFFICIAL EMAIL ADDRESS
                  </div>
                  <div style={{ fontWeight: 700, color: '#22d3ee', fontSize: '0.98rem', wordBreak: 'break-all' }}>
                    {contactEmail}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
