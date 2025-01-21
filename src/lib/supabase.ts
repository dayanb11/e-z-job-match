import { createClient } from '@supabase/supabase-js';
import { Application } from '@/types/application';

const supabaseUrl = 'https://itqtanrugikuttzjtgaj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cXRhbnJ1Z2lrdXR0emp0Z2FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NDI0MzcsImV4cCI6MjA1MzAxODQzN30.I3JcwbE-ouGFH0Ucuzi0txItyIh5CXAoappT71gjhQM';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Test function to verify the connection and table structure
export const testSupabaseConnection = async () => {
  try {
    // Test data
    const testData = {
      personal_details: {
        fullName: "ישראל ישראלי",
        email: "test@example.com",
        phone: "0501234567",
        location: "תל אביב"
      },
      industry: "הייטק",
      roles: [{
        role: "מפתח תוכנה",
        skills: ["JavaScript", "React"],
        subSkills: ["TypeScript", "Node.js"]
      }],
      educations: [{
        education: "תואר ראשון",
        certifications: "מדעי המחשב",
        institution: "אוניברסיטת תל אביב",
        additionalInfo: "סיום בהצטיינות"
      }]
    };

    // Try to insert test data
    const { data, error } = await supabase
      .from('applications')
      .insert(testData)
      .select()
      .single();

    if (error) {
      console.error('Error inserting test data:', error);
      throw error;
    }

    console.log('Test data saved successfully:', data);
    return data;
  } catch (error) {
    console.error('Test connection failed:', error);
    throw error;
  }
};

export const saveApplication = async (application: Omit<Application, 'id' | 'createdAt'>) => {
  try {
    const { data, error } = await supabase
      .from('applications')
      .insert({
        personal_details: application.personalDetails,
        industry: application.industry,
        roles: application.roles,
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