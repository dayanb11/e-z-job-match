import { createClient } from '@supabase/supabase-js';
import { Application } from '@/types/application';

const supabaseUrl = 'https://YOUR_PROJECT_URL.supabase.co';
const supabaseKey = 'YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveApplication = async (application: Omit<Application, 'id' | 'createdAt'>) => {
  const { data, error } = await supabase
    .from('applications')
    .insert([application])
    .select()
    .single();

  if (error) throw error;
  return data;
};