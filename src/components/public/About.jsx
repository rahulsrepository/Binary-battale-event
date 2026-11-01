import React from 'react';
import { Cpu, Brain, Code2, Award, Building, BookOpen, CheckCircle, ShieldAlert } from 'lucide-react';

export default function About({ settings }) {
  const pillars = [
    {
      icon: <Brain size={24} color="#22d3ee" />,
      title: 'Logical Thinking & Aptitude',
      desc: 'Evaluate deep problem-solving intuition, analytical ability, algorithm comprehension, and pattern recognition without internet crutches.'
    },
    {
      icon: <Code2 size={24} color="#c084fc" />,
      title: 'Coding Fundamentals',
      desc: 'Mastery over core languages: C, C++, Java, and Python. Solid understanding of data structures, control flow, loops, and functions.'
    },
    {
      icon: <Cpu size={24} color="#fbbf24" />,
      title: 'Lab Problem Solving',
      desc: 'Step into the college computer lab to turn logic into working code under timed competition settings in Round 2.'
    },
    {
      icon: <Award size={24} color="#34d399" />,
      title: 'Physical Recognition',
      desc: 'Distinguished 1st Place, 2nd Place trophies/certificates, and verified Participation Certificates distributed directly by the college.'
    }
  ];

  return (
    <section id="about" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>ABOUT THE COMPETITION</span>
          </div>
          <h2 className="section-title">
            Forging Future <span className="gradient-text-cyan">Tech Leaders</span> & Coders
          </h2>
          <p className="section-subtitle">
            BINARY BATTLE is a premier college-level technical competition hosted by Shri Satyam Degree College, Bidar, engineered to challenge and showcase the brightest student minds in computing.
          </p>
        </div>

        {/* College Feature Card with Crest Banner */}
        <div className="glass-card" style={{
          marginBottom: '3rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(16, 27, 63, 0.75) 0%, rgba(10, 15, 36, 0.9) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '2rem',
            alignItems: 'center',
          }} className="college-info-grid">
            {/* College Logo with glowing aura */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#ffffff',
                padding: '6px',
                boxShadow: '0 0 30px rgba(124, 58, 237, 0.4)',
                border: '3px solid #7c3aed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src="/assets/college_logo.jpeg"
                  alt="Shri Satyam College Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#a78bfa',
                marginTop: '0.75rem',
                fontWeight: 700,
              }}>
                ESTD. 2004 • KRISHNA TRUST
              </span>
            </div>

            {/* College Description */}
            <div>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#f43f5e',
                marginBottom: '0.35rem',
                fontFamily: 'var(--font-display)',
              }}>
                ಶ್ರೀ ಸತ್ಯಂ ಪದವಿ ಮಹಾವಿದ್ಯಾಲಯ, ಬೀದರ
              </div>
              <h3 style={{
                fontSize: '1.6rem',
                color: '#ffffff',
                marginBottom: '0.75rem',
              }}>
                {settings?.college_name || 'Shri Satyam Degree College, Bidar'}
              </h3>
              <p style={{
                color: '#cbd5e1',
                fontSize: '0.98rem',
                marginBottom: '1rem',
                lineHeight: 1.6,
              }}>
                Affiliated to <strong>Bidar University, Bidar</strong> (Halhalli K, Dist. Bidar - 585415) and Recognized by the <strong>Government of Karnataka</strong>. Located at Devi Colony, Opp. Gurudwara Gate, Bidar.
              </p>
              <p style={{
                color: '#94a3b8',
                fontSize: '0.92rem',
                lineHeight: 1.6,
              }}>
                Binary Battle brings together passionate students to compete fearlessly across fundamental technical concepts and real-world coding problem solving in a healthy, collaborative collegiate atmosphere.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {pillars.map((p, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                {p.icon}
              </div>
              <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.65rem' }}>
                {p.title}
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Offline Clarity Alert Box */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.25rem 1.75rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(37, 99, 235, 0.1)',
          border: '1px solid rgba(37, 99, 235, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <ShieldAlert size={24} color="#38bdf8" />
          <div style={{ flex: 1 }}>
            <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>
              Important Offline Notice:
            </strong>{' '}
            <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
              Both Round 1 (Pen & Paper) and Round 2 (Lab Coding) are strictly conducted physically on-campus at Shri Satyam Degree College. No online tests or remote submissions are involved.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .college-info-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
