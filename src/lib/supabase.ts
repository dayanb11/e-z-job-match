import { createClient } from '@supabase/supabase-js';
import { Application } from '@/types/application';

const supabaseUrl = 'https://itqtanrugikuttzjtgaj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cXRhbnJ1Z2lrdXR0emp0Z2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDI0MzcsImV4cCI6MjA1MzAxODQzN30.I3JcwbE-ouGFH0Ucuzi0txItyIh5CXAoappT71gjhQM';

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveApplication = async (application: Omit<Application, 'id' | 'createdAt'>) => {
  try {
    console.log('Form data before submission:', application);
    
    const { data, error } = await supabase
      .from('applications')
      .insert({
        personal_details: application.personalDetails,
        industry: application.industry,
        roles: application.roles.map(role => ({
          role: role.role,
          skills: role.skills.map(skill => ({
            name: skill.name,
            level: skill.level
          })),
          subSkills: role.subSkills.map(subSkill => ({
            name: subSkill.name,
            level: subSkill.level
          }))
        })),
        educations: application.educations
      })
      .select()
      .single();

    if (error) {
      console.error('Error saving application:', error);
      throw error;
    }

    console.log('Application saved successfully:', data);
    return data;
  } catch (error) {
    console.error('Error in saveApplication:', error);
    throw error;
  }
};