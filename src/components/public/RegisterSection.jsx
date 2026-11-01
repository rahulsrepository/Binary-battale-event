import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { apiService, EVENT_CONFIG } from '../../lib/supabaseClient';
import { Sparkles, User, Hash, BookOpen, GraduationCap, Mail, Phone, AlertCircle, Loader2, CheckCircle2, ShieldCheck, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    usn: '',
    department: '',
    semester: '',
    email: '',
    mobile_number: '',
    alternative_mobile_number: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [registrationSuccessData, setRegistrationSuccessData] = useState(null);

  const departments = EVENT_CONFIG.department_options;
  const semesters = EVENT_CONFIG.semester_options;

  const validate = () => {
    const newErrors = {};

    // 1. Full Name
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    } else if (formData.full_name.trim().length < 3) {
      newErrors.full_name = 'Full name must be at least 3 characters';
    }

    // 2. USN / Roll Number
    if (!formData.usn.trim()) {
      newErrors.usn = 'USN / Roll Number is required';
    } else if (formData.usn.trim().length < 4) {
      newErrors.usn = 'Please enter a valid USN (e.g. 3SB23CA014)';
    }

    // 3. Department
    if (!formData.department) {
      newErrors.department = 'Please select your department';
    }

    // 4. Semester
    if (!formData.semester) {
      newErrors.semester = 'Please select your current semester / year';
    }

    // 5. Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'College email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // 6. Mobile Number (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanMobile = formData.mobile_number.trim().replace(/\D/g, '');
    if (!formData.mobile_number.trim()) {
      newErrors.mobile_number = 'Mobile number is required';
    } else if (!phoneRegex.test(cleanMobile)) {
      newErrors.mobile_number = 'Enter a valid 10-digit Indian mobile number';
    }

    // 7. Alternative Mobile Number (Optional)
    if (formData.alternative_mobile_number.trim()) {
      const cleanAlt = formData.alternative_mobile_number.trim().replace(/\D/g, '');
      if (!phoneRegex.test(cleanAlt)) {
        newErrors.alternative_mobile_number = 'Enter a valid 10-digit mobile number';
      } else if (cleanAlt === cleanMobile) {
        newErrors.alternative_mobile_number = 'Alternative number should be different from primary number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'usn' ? value.toUpperCase() : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    if (!validate()) {
      const firstError = document.querySelector('.form-error');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await apiService.registerStudent(formData);

      if (result.error) {
        setServerError(result.error.message || 'Failed to submit registration. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Success celebration
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#2563eb', '#7c3aed', '#f59e0b', '#10b981']
        });
      } catch (cErr) {
        console.log('Confetti fired');
      }

      setRegistrationSuccessData(result.data);
    } catch (err) {
      setServerError('An unexpected error occurred while saving your registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      full_name: '',
      usn: '',
      department: '',
      semester: '',
      email: '',
      mobile_number: '',
      alternative_mobile_number: '',
    });
    setErrors({});
    setServerError('');
    setRegistrationSuccessData(null);
  };

  return (
    <section id="register" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>STUDENT REGISTRATION</span>
          </div>
          <h2 className="section-title">
            Register for <span className="gradient-text-cyan">Binary Battle 2026</span>
          </h2>
          <p className="section-subtitle">
            Secure your slot for the offline competition at Shri Satyam Degree College, Bidar. Free registration for all eligible students.
          </p>
        </div>

        {/* ================= SUCCESS CONFIRMATION STATE ================= */}
        {registrationSuccessData ? (
          <div className="glass-card" style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(10, 15, 36, 0.95) 100%)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(16, 185, 129, 0.2)',
            animation: 'fadeIn 0.3s ease-out',
          }}>
            {/* Green glowing checkmark */}
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
            }}>
              <CheckCircle2 size={40} color="#34d399" />
            </div>

            <div style={{
              display: 'inline-block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#34d399',
              padding: '0.3rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '1rem',
            }}>
              REGISTRATION RECORDED
            </div>

            <h3 style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.5rem' }}>
              Registration Successful!
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{registrationSuccessData.full_name}</strong>! Your registration has been successfully saved in the database.
            </p>

            {/* Candidate Details Summary */}
            <div style={{
              background: 'rgba(10, 15, 36, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'left',
              marginBottom: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}>
              <div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  STUDENT USN
                </span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#22d3ee', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                  {registrationSuccessData.usn}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  DEPARTMENT
                </span>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                  {registrationSuccessData.department}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  SEMESTER / YEAR
                </span>
                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#e2e8f0', marginTop: '2px' }}>
                  {registrationSuccessData.semester}
                </div>
              </div>

              <div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                  REGISTERED EMAIL
                </span>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#38bdf8', marginTop: '2px', wordBreak: 'break-all' }}>
                  {registrationSuccessData.email}
                </div>
              </div>
            </div>

            {/* Instructions for Competition Day */}
            <div style={{
              background: 'rgba(37, 99, 235, 0.1)',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              borderRadius: '10px',
              padding: '1.25rem',
              textAlign: 'left',
              marginBottom: '2rem',
              fontSize: '0.86rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
            }}>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.35rem' }}>
                Next Steps for Event Day:
              </strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                <li>Carry your physical <strong>College Identity Card</strong> for verification.</li>
                <li>Report at Shri Satyam College on <strong>{EVENT_CONFIG.event_date}</strong> at <strong>{EVENT_CONFIG.event_time}</strong>.</li>
                <li>Round 1 (Technical Aptitude) is conducted using pen and paper. Bring your own blue/black ballpoint pens.</li>
                <li>Students qualifying Round 1 will proceed to Round 2 (Coding) in the computer lab.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="btn btn-primary"
              style={{ padding: '0.85rem 2rem', fontWeight: 700 }}
            >
              <span>Register Another Student</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          /* ================= REGISTRATION FORM ================= */
          <div className="glass-card" style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: '2.5rem',
            border: '1px solid rgba(6, 182, 212, 0.35)',
            boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(6, 182, 212, 0.18)',
          }}>
            {/* Form Top Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              marginBottom: '1.75rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 800 }}>
                  Candidate Entry Form
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  All fields marked with (<span style={{ color: 'var(--neon-cyan-bright)' }}>*</span>) are mandatory.
                </p>
              </div>

              <div className="status-pill open">
                <span className="status-dot"></span>
                <span>FREE REGISTRATION</span>
              </div>
            </div>

            {/* Server Error Alert (Duplicate USN etc.) */}
            {serverError && (
              <div style={{
                padding: '1rem',
                borderRadius: '8px',
                background: 'rgba(244, 63, 94, 0.15)',
                border: '1px solid rgba(244, 63, 94, 0.4)',
                color: '#fecdd3',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '0.9rem',
              }}>
                <AlertCircle size={20} color="#fb7185" style={{ flexShrink: 0 }} />
                <span>{serverError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Field 1: Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="full_name">
                  1. Full Name (As per College Records)<span className="req">*</span>
                </label>
                <input
                  id="full_name"
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="e.g. Adarsh Patil"
                  className="form-input"
                  disabled={isSubmitting}
                />
                {errors.full_name && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    <span>{errors.full_name}</span>
                  </div>
                )}
              </div>

              {/* Field 2: USN / Roll Number */}
              <div className="form-group">
                <label className="form-label" htmlFor="usn">
                  2. USN / Roll Number<span className="req">*</span>
                </label>
                <input
                  id="usn"
                  type="text"
                  name="usn"
                  value={formData.usn}
                  onChange={handleChange}
                  placeholder="e.g. 3SB23CA014"
                  className="form-input"
                  style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                  disabled={isSubmitting}
                />
                <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '0.25rem' }}>
                  Note: USN is used to identify you and prevent duplicate submissions. Only one registration per USN.
                </div>
                {errors.usn && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    <span>{errors.usn}</span>
                  </div>
                )}
              </div>

              {/* Row: Department & Semester */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}>
                {/* Field 3: Department */}
                <div className="form-group">
                  <label className="form-label" htmlFor="department">
                    3. Department<span className="req">*</span>
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="form-select"
                    disabled={isSubmitting}
                  >
                    <option value="">-- Select Your Department --</option>
                    {departments.map((dept, i) => (
                      <option key={i} value={dept}>{dept}</option>
                    ))}
                  </select>
                  {errors.department && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      <span>{errors.department}</span>
                    </div>
                  )}
                </div>

                {/* Field 4: Current Year / Semester */}
                <div className="form-group">
                  <label className="form-label" htmlFor="semester">
                    4. Current Year / Semester<span className="req">*</span>
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="form-select"
                    disabled={isSubmitting}
                  >
                    <option value="">-- Select Current Semester --</option>
                    {semesters.map((sem, i) => (
                      <option key={i} value={sem}>{sem}</option>
                    ))}
                  </select>
                  {errors.semester && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      <span>{errors.semester}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Field 5: College Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  5. College Email Address<span className="req">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. adarsh.patil@shrisatyam.edu.in"
                  className="form-input"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>

              {/* Row: Mobile Number & Alternative Mobile */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}>
                {/* Field 6: Mobile Number */}
                <div className="form-group">
                  <label className="form-label" htmlFor="mobile_number">
                    6. Mobile Number (10 Digits)<span className="req">*</span>
                  </label>
                  <div style={{ display: 'flex' }}>
                    <span style={{
                      padding: '0.8rem 0.9rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRight: 'none',
                      borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)',
                      color: '#94a3b8',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      +91
                    </span>
                    <input
                      id="mobile_number"
                      type="tel"
                      name="mobile_number"
                      maxLength={10}
                      value={formData.mobile_number}
                      onChange={handleChange}
                      placeholder="9845012345"
                      className="form-input"
                      style={{ borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.mobile_number && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      <span>{errors.mobile_number}</span>
                    </div>
                  )}
                </div>

                {/* Field 7: Alternative Mobile Number (Optional) */}
                <div className="form-group">
                  <label className="form-label" htmlFor="alternative_mobile_number">
                    7. Alternative Mobile Number <span style={{ color: '#64748b', fontWeight: 400 }}>(Optional)</span>
                  </label>
                  <div style={{ display: 'flex' }}>
                    <span style={{
                      padding: '0.8rem 0.9rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRight: 'none',
                      borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)',
                      color: '#94a3b8',
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      +91
                    </span>
                    <input
                      id="alternative_mobile_number"
                      type="tel"
                      name="alternative_mobile_number"
                      maxLength={10}
                      value={formData.alternative_mobile_number}
                      onChange={handleChange}
                      placeholder="Secondary contact"
                      className="form-input"
                      style={{ borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.alternative_mobile_number && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      <span>{errors.alternative_mobile_number}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Submission Notice */}
              <div style={{
                margin: '1.25rem 0 1.75rem 0',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                fontSize: '0.8rem',
                color: '#94a3b8',
              }}>
                By submitting this form, I confirm that I am a bonafide student of Shri Satyam Degree College, Bidar, and agree to carry my college ID card on competition day.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Saving Registration to Database...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span>Complete Registration</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
