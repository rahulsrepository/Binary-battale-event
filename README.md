# BINARY BATTLE 2026 – Student Registration Portal
### Shri Satyam Degree College, Bidar
*Affiliated to Bidar University, Recognized by Govt. of Karnataka*

> **"Think. Code. Conquer."**  
> *"Think logically. Code creatively. Compete fearlessly."*  
> *"Your logic is your weapon. Your code is your power."*  
> *"Every expert was once a beginner."*

---

## ⚡ Overview

**BINARY BATTLE** is the official technical aptitude and coding competition website for **Shri Satyam Degree College, Bidar**.

- **Official Contact Email:** `placement@shrisatyam.in`
- **Competition Format:** Both **Round 1 (Technical Aptitude)** and **Round 2 (Coding Round)** are conducted **physically and offline** on-campus at Shri Satyam Degree College. Certificates are distributed physically by the college.
- **Backend Architecture:** Direct integration with **Supabase Database (`registrations` table)** with strict Row Level Security (RLS) policies and PostgreSQL UNIQUE constraint on student USN.
- **Admin Management:** All registrations are viewed, searched, filtered, sorted, and exported directly through your secure **Supabase Dashboard**. No admin code or credentials exist in the client website.

---

## 🛠️ Step-by-Step Supabase Setup Guide

Follow these 4 simple steps to connect the website directly to your Supabase project:

### Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign in or create a free account.
2. Click **"New project"**.
3. Choose an organization, enter a name (e.g. `binary-battle-2026`), choose a database password, and select your preferred region (e.g. *South Asia - Mumbai*).
4. Wait a few moments for Supabase to provision your database.

---

### Step 2: Create the `registrations` Table and Security Policies
1. In your Supabase Project Dashboard, click on **SQL Editor** in the left sidebar.
2. Click **"New query"**.
3. Open the [`supabase_schema.sql`](file:///c:/Users/account%202/OneDrive/Desktop/Binay_Battale/supabase_schema.sql) file from this repository, copy all the SQL code, and paste it into the query window:

```sql
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

-- 2. Add database-level UNIQUE constraint on USN (Case-Insensitive)
CREATE UNIQUE INDEX IF NOT EXISTS idx_registrations_unique_usn 
ON public.registrations (UPPER(TRIM(usn)));

-- Additional indexes for fast searching in Supabase Dashboard
CREATE INDEX IF NOT EXISTS idx_registrations_department ON public.registrations(department);
CREATE INDEX IF NOT EXISTS idx_registrations_semester ON public.registrations(semester);
CREATE INDEX IF NOT EXISTS idx_registrations_registration_date ON public.registrations(registration_date DESC);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policy: Allow public anonymous insertion only
CREATE POLICY "Allow public registration insert"
ON public.registrations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);
```

4. Click **"Run"** (or press Ctrl + Enter).
5. You will see `Success. No rows returned`. Your table and security policies are now active!

> 🔒 **Why this is secure:**  
> By only enabling `INSERT` for public users and **not** adding `SELECT`, `UPDATE`, or `DELETE` policies, public visitors can submit their own registrations, but cannot read, browse, modify, or delete other candidates' data. Only you (the project owner logged into Supabase) can view and manage all student data.

---

### Step 3: Connect Website to Supabase (`.env`)
1. In your Supabase Project Dashboard, click **Project Settings** (gear icon in the bottom left) -> **API**.
2. Locate the following two values under **Project API keys**:
   - **Project URL** (e.g. `https://xyzcompany.supabase.co`)
   - **`anon` `public` key** (starts with `eyJ...`)
   *(⚠️ Do NEVER use or expose the `service_role` secret key!)*
3. In your project root folder, copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Paste your values into `.env`:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
5. Restart your dev server (`npm run dev`) if running.

---

### Step 4: Test Registrations & Manage in Supabase Dashboard

#### Testing from Website:
1. Open `http://localhost:5173/` in your browser.
2. Scroll to the **Candidate Entry Form**.
3. Fill in candidate details:
   - Full Name: `Adarsh Patil`
   - USN: `3SB23CA014`
   - Department: `BCA (Bachelor of Computer Applications)`
   - Current Semester: `5th Semester (3rd Year)`
   - College Email: `adarsh.patil@shrisatyam.edu.in`
   - Mobile Number: `9845012345`
4. Click **"Complete Registration"**.
5. You will see the celebration confetti and the on-screen confirmation card confirming the USN and details.
6. **Test Duplicate Prevention:** Click *"Register Another Student"* and try submitting with the same USN (`3SB23CA014`). The website will immediately block it and display:
   `"A student with USN '3SB23CA014' has already registered. Each student can register only once."`

#### Viewing & Managing Records in Supabase Dashboard:
1. In your Supabase project, click on **Table Editor** in the left sidebar.
2. Select the `registrations` table.
3. You can now:
   - **View all registered students** in real time.
   - **Search:** Use the search bar to find students by name, USN, or email.
   - **Filter:** Click *Filter* to filter by department (e.g. `department = 'BCA...'`) or semester.
   - **Sort:** Click any column header (e.g. `registration_date` or `usn`) to sort ascending/descending.
   - **Export to CSV:** Click the **"Export data"** button at the top right of the table editor to download a complete spreadsheet of registered students for your college records!

---

## 🎨 Technology & Architecture

- **Frontend:** React 18 + Vite (Clean modern vanilla CSS, responsive design, Lucide icons, canvas-confetti).
- **Branding:** Official Shri Satyam College crest, Kannada title (*ಶ್ರೀ ಸತ್ಯಂ ಪದವಿ ಮಹಾವಿದ್ಯಾಲಯ, ಬೀದರ*), deep navy theme (`#101B3F`), neon cyan, electric blue, and purple accents.
- **Client Supabase Library:** `@supabase/supabase-js`.
