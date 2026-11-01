import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function FAQ({ settings }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Who can participate in Binary Battle 2026?',
      a: 'All eligible students currently enrolled in degree programs (BCA, B.Sc Computer Science, B.Sc, B.Com, BBA, BA, etc.) at Shri Satyam Degree College, Bidar are eligible to register and compete.'
    },
    {
      q: 'How do I register for the competition?',
      a: 'Registration is 100% free! Simply click "Register Now" on this website, fill in your Full Name, USN/Roll Number, Department, Semester, College Email, and Mobile Number, and submit. You will immediately see an on-screen confirmation once your registration is securely saved in the database. Carry your college ID card on event day.'
    },
    {
      q: 'What are the two rounds of the competition?',
      a: 'Round 1 is a Technical Aptitude test conducted physically using pen and paper covering programming fundamentals, C/C++/Java/Python basics, DBMS, OS, Networks, and Logical Reasoning. Round 2 is a hands-on Coding Round conducted in the college computer lab for students who qualify Round 1.'
    },
    {
      q: 'Where will the rounds be conducted?',
      a: 'Both rounds will take place in-person on campus at Shri Satyam Degree College, Devi Colony, Opp. Gurudwara Gate, Bidar - 585401. Round 1 in the examination lecture halls, and Round 2 in the Advanced Computer Science Lab.'
    },
    {
      q: 'Will all participants receive certificates?',
      a: 'Yes! Every verified participant who attends the competition will receive an official physical Participation Certificate printed and stamped by Shri Satyam Degree College. Special Winner and Runner-up certificates and trophies will be awarded to 1st and 2nd place winners.'
    },
    {
      q: 'How will winners be announced?',
      a: 'The faculty evaluation panel will assess code execution accuracy, algorithm efficiency, problem-solving speed, and Round 1 scores. The final winners will be announced during the grand valedictory ceremony at the college auditorium.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>CLARIFICATIONS & QUERIES</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text-purple">Questions</span>
          </h2>
          <p className="section-subtitle">
            Got questions about Binary Battle? Find instant answers to all common questions below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{
          maxWidth: '840px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.75rem',
                  cursor: 'pointer',
                  border: isOpen ? '1px solid rgba(6, 182, 212, 0.45)' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isOpen ? 'rgba(16, 27, 63, 0.85)' : 'rgba(10, 15, 36, 0.75)',
                  transition: 'all 0.25s ease',
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}>
                  <h3 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: isOpen ? '#22d3ee' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: isOpen ? '#22d3ee' : '#64748b',
                    }}>
                      Q{idx + 1}.
                    </span>
                    <span>{faq.q}</span>
                  </h3>

                  <div style={{
                    color: isOpen ? '#22d3ee' : '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    marginTop: '0.85rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#cbd5e1',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    animation: 'fadeIn 0.2s ease-out',
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
