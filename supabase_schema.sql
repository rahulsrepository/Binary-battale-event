-- ==============================================================================
-- BINARY BATTLE 2026 - Supabase SQL Schema
-- Shri Satyam Degree College, Bidar
-- Official Contact: placement@shrisatyam.in
-- ==============================================================================

-- 1. Create registrations table
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  usn TEXT NOT NULL,
  department TEXT NOT NULL,
  semester TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  alternative_mobile_number TEXT,
  registration_date TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Add Database-Level UNIQUE Constraint on USN
-- We create a unique index on UPPER(TRIM(usn)) to ensure case-insensitive duplicate prevention
-- Even if multiple students register simultaneously, the database rejects duplicates at ACID level
CREATE UNIQUE INDEX IF NOT EXISTS idx_registrations_unique_usn 
ON public.registrations (UPPER(TRIM(usn)));

-- Additional indexes for fast searching and filtering in Supabase Dashboard
CREATE INDEX IF NOT EXISTS idx_registrations_department ON public.registrations(department);
CREATE INDEX IF NOT EXISTS idx_registrations_semester ON public.registrations(semester);
CREATE INDEX IF NOT EXISTS idx_registrations_registration_date ON public.registrations(registration_date DESC);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Restrict API access to public registration inserts only
REVOKE ALL PRIVILEGES ON TABLE public.registrations FROM anon, authenticated;
GRANT INSERT ON TABLE public.registrations TO anon;

-- 4. RLS Security Policies
-- Drop any previous policies to avoid conflicts
DROP POLICY IF EXISTS "Allow public registration insert" ON public.registrations;
DROP POLICY IF EXISTS "Public can view own registration" ON public.registrations;
DROP POLICY IF EXISTS "Public can register" ON public.registrations;

-- POLICY: Allow public (anon) users to INSERT their registration
CREATE POLICY "Allow public registration insert"
ON public.registrations
FOR INSERT
TO anon
WITH CHECK (true);

-- NOTE ON PRIVACY & SECURITY:
-- By NOT creating any public SELECT, UPDATE, or DELETE policy:
-- 1. Students can ONLY submit registrations.
-- 2. Students CANNOT read, modify, or delete other students' records or see the table.
-- 3. You (the organizer) manage, view, search, filter, sort, and export all registrations
--    directly from your secure Supabase Dashboard (Table Editor).
