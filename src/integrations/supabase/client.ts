// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://itqtanrugikuttzjtgaj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cXRhbnJ1Z2lrdXR0emp0Z2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDI0MzcsImV4cCI6MjA1MzAxODQzN30.I3JcwbE-ouGFH0Ucuzi0txItyIh5CXAoappT71gjhQM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);