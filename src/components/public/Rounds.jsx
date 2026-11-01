import React from 'react';
import { FileEdit, MonitorPlay, CheckCircle2, AlertTriangle, ArrowRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export default function Rounds() {
  const round1Topics = [
    'Programming Fundamentals',
    'C, C++, Java & Python Basics',
    'DBMS and SQL Queries',
    'Data Structures (Arrays, Stacks, Queues)',
    'Operating Systems Essentials',
    'Computer Networks Basics',
    'Logical & Analytical Reasoning',
    'Core Computer Science Concepts'
  ];

  const round2Topics = [
    'Conditional Statements (if-else, switch)',
    'Loops (for, while, nested loops)',
    'Arrays and String Manipulation',
    'Functions & Modularity',
    'Hands-on Problem Solving',
    'Basic Algorithms & Logic Flow',
    'Debugging & Output Precision'
  ];

  return (
    <section id="rounds" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>TWO-STAGE BATTLE</span>
          </div>
          <h2 className="section-title">
            Competition <span className="gradient-text-cyan">Rounds & Syllabus</span>
          </h2>
          <p className="section-subtitle">
            Binary Battle challenges students through a rigorous two-stage offline evaluation: an aptitude qualifying round followed by an intensive hands-on lab coding finale.
          </p>
        </div>

        {/* Qualification Pipeline Notice */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto 3rem auto',
          background: 'rgba(124, 58, 237, 0.1)',
          border: '1px solid rgba(124, 58, 237, 0.3)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.85rem',
          textAlign: 'center',
          flexWrap: 'wrap',
        }}>
          <Sparkles size={20} color="#c084fc" />
          <span style={{ fontSize: '0.92rem', color: '#e2e8f0' }}>
            <strong style={{ color: '#ffffff' }}>Crucial Rule:</strong> Only students who score above the qualifying cutoff in <strong>Round 1 (Technical Aptitude)</strong> will advance to <strong>Round 2 (Coding Round)</strong>.
          </span>
        </div>

        {/* 2 Big Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2rem',
        }}>
          {/* ================= ROUND 1 ================= */}
          <div className="glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(6, 182, 212, 0.35)',
            background: 'linear-gradient(180deg, rgba(16, 27, 63, 0.8) 0%, rgba(10, 15, 36, 0.95) 100%)',
          }}>
            <div>
              {/* Header Badges */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(6, 182, 212, 0.12)',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  color: '#22d3ee',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                }}>
                  <FileEdit size={13} /> STAGE 1 // QUALIFYING
                </span>

                <span style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                }}>
                  OFFLINE PEN & PAPER
                </span>
              </div>

              {/* Title & Mode */}
              <h3 style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}>
                ROUND 1 – TECHNICAL APTITUDE
              </h3>

              <p style={{
                color: '#94a3b8',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}>
                This round will be conducted physically at the college campus using pen and paper. It tests foundational knowledge, logical reasoning, and computer science concepts.
              </p>

              {/* Offline Venue Badge */}
              <div style={{
                background: 'rgba(10, 15, 36, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.82rem',
                color: '#cbd5e1',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }}></span>
                <span><strong>Venue:</strong> Shri Satyam College Examination Halls (Pen & Paper)</span>
              </div>

              {/* Topics Included */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#22d3ee',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.85rem',
                }}>
                  SYLLABUS & TOPICS COVERED:
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}>
                  {round1Topics.map((topic, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      fontSize: '0.88rem',
                      color: '#e2e8f0',
                      background: 'rgba(6, 182, 212, 0.04)',
                      padding: '0.5rem 0.8rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(6, 182, 212, 0.1)',
                    }}>
                      <CheckCircle2 size={15} color="#22d3ee" style={{ flexShrink: 0 }} />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status Box */}
            <div style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.82rem',
              color: '#94a3b8',
            }}>
              <span>Mandatory for all participants</span>
              <span style={{ color: '#22d3ee', fontWeight: 600 }}>Cutoff Score Required</span>
            </div>
          </div>

          {/* ================= ROUND 2 ================= */}
          <div className="glass-card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '1px solid rgba(124, 58, 237, 0.35)',
            background: 'linear-gradient(180deg, rgba(20, 25, 70, 0.8) 0%, rgba(10, 15, 36, 0.95) 100%)',
          }}>
            <div>
              {/* Header Badges */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  color: '#c084fc',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                }}>
                  <MonitorPlay size={13} /> STAGE 2 // FINALS
                </span>

                <span style={{
                  padding: '0.3rem 0.8rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(124, 58, 237, 0.1)',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                  color: '#c084fc',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                }}>
                  COLLEGE COMPUTER LAB
                </span>
              </div>

              {/* Title & Mode */}
              <h3 style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.5rem',
              }}>
                ROUND 2 – CODING ROUND
              </h3>

              <p style={{
                color: '#94a3b8',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}>
                Conducted inside the college computer lab. Students demonstrate real programming and problem-solving prowess by writing executable code under timed conditions.
              </p>

              {/* Lab Venue Badge */}
              <div style={{
                background: 'rgba(10, 15, 36, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-sm)',
                padding: '0.75rem 1rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.82rem',
                color: '#cbd5e1',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c084fc' }}></span>
                <span><strong>Venue:</strong> Advanced Computer Science Lab, Shri Satyam Campus</span>
              </div>

              {/* Topics Included */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#c084fc',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.85rem',
                }}>
                  SYLLABUS & PRACTICAL SKILLS:
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}>
                  {round2Topics.map((topic, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      fontSize: '0.88rem',
                      color: '#e2e8f0',
                      background: 'rgba(124, 58, 237, 0.05)',
                      padding: '0.5rem 0.8rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(124, 58, 237, 0.15)',
                    }}>
                      <CheckCircle2 size={15} color="#c084fc" style={{ flexShrink: 0 }} />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status Box */}
            <div style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.82rem',
              color: '#94a3b8',
            }}>
              <span>Prerequisite: Qualified in Round 1</span>
              <span style={{ color: '#c084fc', fontWeight: 600 }}>Winner Selection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
