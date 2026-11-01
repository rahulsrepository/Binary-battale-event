import React from 'react';
import { ShieldCheck, CheckSquare, AlertCircle, FileCheck, IdCard, Users, Cpu, PenLine } from 'lucide-react';

export default function Guidelines() {
  const rules = [
    {
      num: '01',
      icon: <Users size={20} color="#22d3ee" />,
      title: 'Eligible College Students Only',
      desc: 'Participation is exclusively open to bonafide eligible students enrolled at Shri Satyam Degree College, Bidar.'
    },
    {
      num: '02',
      icon: <AlertCircle size={20} color="#f43f5e" />,
      title: 'Single Registration Limit',
      desc: 'Each student must register only once using their unique USN. Duplicate registrations are automatically detected and blocked.'
    },
    {
      num: '03',
      icon: <FileCheck size={20} color="#38bdf8" />,
      title: 'Accurate Information Required',
      desc: 'Students must provide accurate personal, department, semester, and active contact information for smooth event coordination.'
    },
    {
      num: '04',
      icon: <IdCard size={20} color="#fbbf24" />,
      title: 'Mandatory College ID Card',
      desc: 'All participants must physically carry their valid Shri Satyam College ID card to the examination hall for verification.'
    },
    {
      num: '05',
      icon: <ShieldCheck size={20} color="#34d399" />,
      title: 'Organizer & Invigilator Code',
      desc: 'Students must strictly adhere to the schedule, lab protocols, and instructions given by the event coordinators and faculty.'
    },
    {
      num: '06',
      icon: <PenLine size={20} color="#a78bfa" />,
      title: 'Round 1: Pen & Paper Mode',
      desc: 'Round 1 (Technical Aptitude) is strictly physical pen-and-paper. No mobile phones, smartwatches, or internet access permitted.'
    },
    {
      num: '07',
      icon: <Cpu size={20} color="#c084fc" />,
      title: 'Round 2: College Computer Lab',
      desc: 'Round 2 (Coding) will take place in the college computer lab under controlled environment and time constraints.'
    },
    {
      num: '08',
      icon: <CheckSquare size={20} color="#22d3ee" />,
      title: 'Round 1 Cutoff Qualification',
      desc: 'Entry into Round 2 is strictly merit-based. Only students who clear the qualifying cutoff score in Round 1 will participate in Round 2.'
    }
  ];

  return (
    <section id="guidelines" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>RULES OF ENGAGEMENT</span>
          </div>
          <h2 className="section-title">
            Official Event <span className="gradient-text-cyan">Guidelines</span>
          </h2>
          <p className="section-subtitle">
            Please read and understand the official guidelines before registering for Binary Battle 2026.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {rule.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.35rem',
                }}>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                  }}>
                    {rule.title}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#64748b',
                    fontWeight: 700,
                  }}>
                    RULE {rule.num}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.88rem',
                  color: '#94a3b8',
                  lineHeight: 1.55,
                }}>
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
