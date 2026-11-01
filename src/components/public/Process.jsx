import React from 'react';
import { Globe, UserCheck, PenTool, Monitor, Trophy, Award, GitBranch } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      icon: <Globe size={22} color="#22d3ee" />,
      title: 'Visit Binary Battle Website',
      desc: 'Explore the competition syllabus, guidelines, schedule, and eligibility criteria.',
      stage: '● DIGITAL STAGE'
    },
    {
      step: '02',
      icon: <UserCheck size={22} color="#38bdf8" />,
      title: 'Register Online with USN',
      desc: 'Enter your student details and USN. Records are saved directly into the secure database.',
      stage: '● DIGITAL STAGE'
    },
    {
      step: '03',
      icon: <PenTool size={22} color="#c084fc" />,
      title: 'Attend Round 1 (Pen & Paper)',
      desc: 'Report on-campus at Shri Satyam College with your physical college ID card for the aptitude test.',
      stage: '● ON-CAMPUS STAGE'
    },
    {
      step: '04',
      icon: <Monitor size={22} color="#fb923c" />,
      title: 'Advance to Round 2 (Lab Coding)',
      desc: 'Students qualifying Round 1 proceed to the college computer lab for hands-on problem solving.',
      stage: '● ON-CAMPUS STAGE'
    },
    {
      step: '05',
      icon: <Trophy size={22} color="#facc15" />,
      title: 'Winner Announcement',
      desc: 'Faculty evaluation committee reviews code accuracy, algorithmic efficiency, and declares winners.',
      stage: '● ON-CAMPUS STAGE'
    },
    {
      step: '06',
      icon: <Award size={22} color="#34d399" />,
      title: 'Physical Certificate Distribution',
      desc: 'Official printed certificates and trophies are distributed physically by Shri Satyam College.',
      stage: '● ON-CAMPUS STAGE'
    }
  ];

  return (
    <section id="process" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GitBranch size={14} />
            <span>STEP-BY-STEP WORKFLOW</span>
          </div>
          <h2 className="section-title">
            The Journey to <span className="gradient-text-purple">Victory</span>
          </h2>
          <p className="section-subtitle">
            Follow the clear offline competition process from online registration to taking the physical test and receiving your official college certificate.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
        }}>
          {steps.map((item, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: index === 5 ? '1px solid rgba(16, 185, 129, 0.4)' : index === 4 ? '1px solid rgba(250, 204, 21, 0.4)' : undefined,
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
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
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'rgba(255, 255, 255, 0.25)',
                  }}>
                    {item.step}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '0.65rem',
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#94a3b8',
                  lineHeight: 1.6,
                }}>
                  {item.desc}
                </p>
              </div>

              <div style={{
                marginTop: '1.25rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: index >= 2 ? '#a78bfa' : '#38bdf8',
              }}>
                <span>{item.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
