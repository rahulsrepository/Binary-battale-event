import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, Terminal, ArrowRight, Sparkles, Clock, CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';

export default function Hero({ settings, onRegisterClick }) {
  // Quotes ticker
  const quotes = [
    "Think logically. Code creatively. Compete fearlessly.",
    "Your logic is your weapon. Your code is your power.",
    "Every expert was once a beginner."
  ];
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [quotes.length]);

  // Dynamic Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(settings?.event_date || '2026-11-20T09:30:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [settings?.event_date]);

  return (
    <section id="hero" style={{
      position: 'relative',
      paddingTop: '160px',
      paddingBottom: '80px',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {/* Decorative Glow Radar Circle (Inspired by Reference Image 3) */}
      <div style={{
        position: 'absolute',
        top: '180px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
        border: '1px dashed rgba(6, 182, 212, 0.15)',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          inset: '40px',
          borderRadius: '50%',
          border: '1px solid rgba(124, 58, 237, 0.12)',
        }} />
        <div style={{
          position: 'absolute',
          inset: '120px',
          borderRadius: '50%',
          border: '1px dashed rgba(6, 182, 212, 0.18)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top College Pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.45rem 1.2rem',
          background: 'rgba(16, 27, 63, 0.7)',
          border: '1px solid var(--border-cyan)',
          borderRadius: 'var(--radius-full)',
          marginBottom: '1.5rem',
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.15)',
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--neon-cyan-bright)',
            boxShadow: '0 0 8px var(--neon-cyan-bright)',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: '#e2e8f0',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            {settings?.college_name || 'Shri Satyam Degree College, Bidar'}
          </span>
        </div>

        {/* Competition Badge */}
        <div style={{ marginBottom: '1rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            color: 'var(--neon-cyan-bright)',
            letterSpacing: '0.12em',
            fontWeight: 600,
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <Terminal size={16} /> A TECHNICAL APTITUDE & CODING COMPETITION
          </span>
        </div>

        {/* Big Glitch/Glow Title */}
        <h1 style={{
          fontSize: 'clamp(2.8rem, 7.5vw, 5.5rem)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: '1rem',
          textTransform: 'uppercase',
        }}>
          <span style={{
            color: '#ffffff',
            textShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
          }}>
            BINARY{' '}
          </span>
          <span style={{
            background: 'linear-gradient(135deg, #22d3ee 0%, #2563eb 50%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 35px rgba(6, 182, 212, 0.45))',
          }}>
            BATTLE
          </span>
        </h1>

        {/* Tagline */}
        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          color: '#cbd5e1',
          letterSpacing: '0.05em',
          marginBottom: '1.25rem',
        }}>
          <span style={{ color: 'var(--neon-cyan-bright)' }}>"Think. </span>
          <span style={{ color: '#ffffff' }}>Code. </span>
          <span style={{ color: 'var(--accent-purple-light)' }}>Conquer."</span>
        </div>

        {/* Animated Quote Ticker */}
        <div style={{
          minHeight: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          <p style={{
            fontStyle: 'italic',
            color: '#94a3b8',
            fontSize: '1.05rem',
            fontFamily: 'var(--font-body)',
            padding: '0.35rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            transition: 'all 0.4s ease',
          }}>
            "{quotes[currentQuoteIndex]}"
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem',
        }}>
          <button
            onClick={onRegisterClick}
            className="btn btn-primary btn-lg"
            style={{
              padding: '1rem 2.4rem',
              fontSize: '1.05rem',
              fontWeight: 800,
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
            }}
          >
            <Sparkles size={18} />
            <span>Register Now for Free</span>
            <ArrowRight size={18} />
          </button>

          <a
            href="#rounds"
            className="btn btn-outline btn-lg"
            style={{
              padding: '1rem 2rem',
              fontSize: '1.05rem',
              fontWeight: 600,
            }}
          >
            <span>Explore Event Rounds</span>
            <ChevronDown size={18} />
          </a>
        </div>

        {/* Countdown Timer Block (Referencing Image 4) */}
        <div style={{
          maxWidth: '780px',
          margin: '0 auto 3rem auto',
          background: 'rgba(10, 15, 36, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-cyan)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.75rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(6, 182, 212, 0.15)',
        }}>
          {/* Header row inside countdown */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#38bdf8' }}>
              <Clock size={15} />
              <span>OFFICIAL COMPETITION LAUNCH COUNTDOWN</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#a78bfa' }}>
              <span className="status-dot" style={{ background: '#a78bfa', boxShadow: '0 0 8px #a78bfa' }}></span>
              <span>OFFLINE AT COLLEGE CAMPUS</span>
            </div>
          </div>

          {/* 4 Colored Digits Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }} className="countdown-grid">
            {/* Days - Neon Cyan */}
            <div style={{
              background: 'rgba(16, 27, 63, 0.6)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 0.5rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 900,
                color: '#22d3ee',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
              }}>
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#94a3b8',
                marginTop: '0.5rem',
                letterSpacing: '0.08em',
              }}>
                DAYS
              </div>
            </div>

            {/* Hours - Purple */}
            <div style={{
              background: 'rgba(16, 27, 63, 0.6)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 0.5rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 900,
                color: '#c084fc',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(192, 132, 252, 0.5)',
              }}>
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#94a3b8',
                marginTop: '0.5rem',
                letterSpacing: '0.08em',
              }}>
                HOURS
              </div>
            </div>

            {/* Minutes - Orange */}
            <div style={{
              background: 'rgba(16, 27, 63, 0.6)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 0.5rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 900,
                color: '#fb923c',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(251, 146, 60, 0.5)',
              }}>
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#94a3b8',
                marginTop: '0.5rem',
                letterSpacing: '0.08em',
              }}>
                MINUTES
              </div>
            </div>

            {/* Seconds - Emerald */}
            <div style={{
              background: 'rgba(16, 27, 63, 0.6)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 0.5rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 900,
                color: '#34d399',
                lineHeight: 1,
                textShadow: '0 0 20px rgba(52, 211, 153, 0.5)',
              }}>
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#94a3b8',
                marginTop: '0.5rem',
                letterSpacing: '0.08em',
              }}>
                SECONDS
              </div>
            </div>
          </div>

          {/* Subtext */}
          <div style={{
            marginTop: '1rem',
            fontSize: '0.76rem',
            color: '#64748b',
            fontFamily: 'var(--font-mono)',
          }}>
            Synchronized to Indian Standard Time (IST UTC+5:30) • Shri Satyam Campus, Bidar
          </div>
        </div>

        {/* Quick Highlights Row (4 info blocks) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '1rem',
          maxWidth: '1060px',
          margin: '0 auto',
        }}>
          {/* Card 1: Event Date */}
          <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
                <Calendar size={18} />
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>EVENT DATE & TIME</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>
              {settings?.event_date || '20 November 2026'}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Reporting at {settings?.event_time || '09:30 AM IST'}</div>
          </div>

          {/* Card 2: Venue */}
          <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(124, 58, 237, 0.15)', color: '#c084fc' }}>
                <MapPin size={18} />
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>COMPETITION VENUE</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff' }}>
              Shri Satyam Degree College
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Devi Colony, Opp. Gurudwara Gate, Bidar</div>
          </div>

          {/* Card 3: Format */}
          <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
                <Terminal size={18} />
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>FORMAT</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff' }}>
              2 Physical Rounds
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Pen & Paper + Computer Lab Coding</div>
          </div>

          {/* Card 4: Certificates */}
          <div className="glass-card" style={{ padding: '1.25rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <Award size={18} />
              </div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>RECOGNITION</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff' }}>
              College Certificates
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>1st, 2nd & All Eligible Participants</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .countdown-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
