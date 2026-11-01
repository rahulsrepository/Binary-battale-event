import React from 'react';
import { Trophy, Award, Medal, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function Certificates({ settings }) {
  const awards = [
    {
      category: '1ST PLACE // CHAMPION',
      title: 'First Winner Certificate & Trophy',
      subtitle: 'Highest Combined Score in Round 1 & Round 2',
      badge: 'TOP HONORS',
      icon: <Trophy size={36} color="#fbbf24" />,
      borderGlow: 'rgba(245, 158, 11, 0.45)',
      gradientText: 'gradient-text-gold',
      features: [
        'Official Shri Satyam Winner Certificate',
        'Winner Trophy presented on stage',
        'Academic recognition & departmental honor',
        'Physically awarded by College Dignitaries'
      ]
    },
    {
      category: '2ND PLACE // RUNNER UP',
      title: 'Second Winner Certificate',
      subtitle: 'Exceptional Performance in Lab Finals',
      badge: 'SILVER MERIT',
      icon: <Medal size={36} color="#c084fc" />,
      borderGlow: 'rgba(124, 58, 237, 0.45)',
      gradientText: 'gradient-text-purple',
      features: [
        'Official 2nd Place Certificate of Merit',
        'Distinguished runner-up memento',
        'Special commendation by faculty panel',
        'Physically awarded by College Dignitaries'
      ]
    },
    {
      category: 'ALL ELIGIBLE PARTICIPANTS',
      title: 'Participation Certificate',
      subtitle: 'Awarded to every registered attendee',
      badge: 'EVERY BUILDER',
      icon: <Award size={36} color="#22d3ee" />,
      borderGlow: 'rgba(6, 182, 212, 0.45)',
      gradientText: 'gradient-text-cyan',
      features: [
        'Official College Participation Certificate',
        'Recognized proof of extracurricular skill',
        'Boosts student resume and academic profile',
        'Physically distributed directly at the college'
      ]
    }
  ];

  return (
    <section id="certificates" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Trophy size={14} />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="section-title">
            Certificates & <span className="gradient-text-gold">Accolades</span>
          </h2>
          <p className="section-subtitle">
            Every participant's effort and dedication is honored. Shri Satyam Degree College physically awards official printed certificates recognized by the institution.
          </p>
        </div>

        {/* Physical Distribution Notice Banner */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto 3rem auto',
          background: 'rgba(16, 27, 63, 0.8)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '1.25rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'left',
          flexWrap: 'wrap',
          boxShadow: '0 0 25px rgba(6, 182, 212, 0.1)',
        }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(6, 182, 212, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Building2 size={22} color="#22d3ee" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.98rem', marginBottom: '0.2rem' }}>
              Physical Distribution by Shri Satyam Degree College
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
              All certificates are printed, stamped, signed by the Principal & Coordinators, and distributed in-person at the college auditorium. No online digital downloads required.
            </div>
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {awards.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: `1px solid ${item.borderGlow}`,
                boxShadow: `0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 25px -10px ${item.borderGlow}`,
                padding: '2.25rem 1.75rem',
              }}
            >
              <div>
                {/* Header with Icon and Pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                  }}>
                    {item.badge}
                  </span>
                </div>

                {/* Subtag */}
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: '#94a3b8',
                  letterSpacing: '0.08em',
                  marginBottom: '0.35rem',
                }}>
                  {item.category}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#cbd5e1',
                  marginBottom: '1.5rem',
                  lineHeight: 1.5,
                }}>
                  {item.subtitle}
                </p>

                {/* Bullet Points */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  marginBottom: '1.5rem',
                }}>
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.86rem',
                      color: '#cbd5e1',
                    }}>
                      <CheckCircle2 size={15} color="#22d3ee" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div style={{
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: '#94a3b8',
              }}>
                <span>Issued by:</span>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>Shri Satyam College</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
