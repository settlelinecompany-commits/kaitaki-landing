/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Unique identifier for each waitlist entry
      - `email` (text, unique, not null) - Email address of the person joining the waitlist
      - `created_at` (timestamptz) - Timestamp when the person joined the waitlist
  
  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for anonymous users to insert their email (write-only access)
    - No read access needed for users (admin only via direct database access)
  
  3. Important Notes
    - Email is unique to prevent duplicate signups
    - Anonymous users can only insert, not read existing entries
    - This ensures privacy and prevents email harvesting
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);