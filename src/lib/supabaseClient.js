import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if valid Supabase credentials are configured in .env
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  !supabaseUrl.includes('your-project-id')
);

// Initialize Supabase Client with public anon key (never expose service role key)
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Official Event & College Static Configuration
export const EVENT_CONFIG = {
  event_name: 'BINARY BATTLE 2026',
  tagline: 'Think. Code. Conquer.',
  college_name: 'Shri Satyam Degree College, Bidar',
  college_kannada: 'ಶ್ರೀ ಸತ್ಯಂ ಪದವಿ ಮಹಾವಿದ್ಯಾಲಯ, ಬೀದರ',
  college_address: 'Devi Colony, Opp. Gurudwara Gate, Bidar - 585401',
  college_affiliation: 'Affiliated to Bidar University, Bidar, Halhalli (K), Dist. Bidar - 585415, Recognized by Govt. of Karnataka',
  event_date: '2026-11-20',
  event_time: '09:30 AM IST',
  event_venue: 'Campus Auditorium & Advanced Computer Lab, Shri Satyam Degree College, Bidar',
  contact_person: 'Faculty Placement & Event Coordinator',
  contact_number: '+91 98452 71024',
  contact_email: 'placement@shrisatyam.in',
  department_options: [
    'BCA (Bachelor of Computer Applications)',
    'B.Sc (Computer Science)',
    'B.Sc (Electronics / Mathematics)',
    'B.Com (Computer Applications)',
    'BBA (Bachelor of Business Administration)',
    'BA (Computer Science)'
  ],
  semester_options: [
    '1st Semester (1st Year)',
    '2nd Semester (1st Year)',
    '3rd Semester (2nd Year)',
    '4th Semester (2nd Year)',
    '5th Semester (3rd Year)',
    '6th Semester (3rd Year)'
  ]
};

// ==============================================================================
// REGISTRATION SERVICE
// Directly integrates with Supabase 'registrations' table
// ==============================================================================

export const apiService = {
  /**
   * Register a student in Supabase
   * - Inserts full_name, usn, department, semester, email, mobile_number, alternative_mobile_number, registration_date
   * - No registration ID generated or used
   * - Database-level UNIQUE constraint on USN prevents duplicates
   */
  async registerStudent(studentData) {
    const formattedUsn = studentData.usn.trim().toUpperCase();

    const payload = {
      full_name: studentData.full_name.trim(),
      usn: formattedUsn,
      department: studentData.department,
      semester: studentData.semester,
      email: studentData.email.trim().toLowerCase(),
      mobile_number: studentData.mobile_number.trim(),
      alternative_mobile_number: studentData.alternative_mobile_number ? studentData.alternative_mobile_number.trim() : null,
      registration_date: new Date().toISOString()
    };

    // 1. Direct Supabase Cloud Insertion
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase
          .from('registrations')
          .insert([payload]);

        if (error) {
          // PostgreSQL Error Code 23505 = unique_violation
          if (error.code === '23505' || error.message?.toLowerCase().includes('unique') || error.message?.toLowerCase().includes('usn')) {
            return {
              data: null,
              error: {
                message: `A student with USN "${formattedUsn}" has already registered. Each student can register only once.`
              }
            };
          }
          throw error;
        }

        return { data: payload, error: null };
      } catch (err) {
        console.error('Supabase registration error:', err);
        return {
          data: null,
          error: {
            message: err.message || 'Failed to submit registration to database. Please try again.'
          }
        };
      }
    }

    // 2. Local Fallback (for testing in local development before adding .env keys)
    try {
      const localKey = 'supabase_registrations_mock';
      const existing = JSON.parse(localStorage.getItem(localKey) || '[]');
      
      // Enforce duplicate USN check
      const duplicate = existing.find(r => r.usn === formattedUsn);
      if (duplicate) {
        return {
          data: null,
          error: {
            message: `A student with USN "${formattedUsn}" has already registered. Each student can register only once.`
          }
        };
      }

      existing.push(payload);
      localStorage.setItem(localKey, JSON.stringify(existing));
      return { data: payload, error: null };
    } catch (e) {
      return {
        data: null,
        error: { message: 'Failed to process registration.' }
      };
    }
  }
};
