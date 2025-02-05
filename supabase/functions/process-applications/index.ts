
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Creating a new dummy application record...');

    // Create a new dummy application record
    const dummyApplication = {
      personal_details: {
        fullName: "יעל כהן",
        email: "test@example.com",
        phone: "050-0000000",
        location: "תל אביב"
      },
      industry: "תוכנה",
      roles: [{
        role: "מפתח/ת Full Stack",
        skills: [
          { name: "React", level: 4 },
          { name: "Node.js", level: 3 }
        ],
        subSkills: [
          { name: "TypeScript", level: 4 },
          { name: "REST APIs", level: 3 }
        ]
      }],
      educations: [{
        education: "תואר ראשון",
        certifications: "מדעי המחשב",
        institution: "אוניברסיטת תל אביב",
        additionalInfo: "סיום בהצטיינות"
      }],
      status: 'pending'
    };

    const { error: insertError } = await supabaseClient
      .from('applications')
      .insert([dummyApplication]);

    if (insertError) {
      throw insertError;
    }

    console.log('Successfully created a new dummy application record');

    return new Response(
      JSON.stringify({ 
        message: 'New dummy application created successfully'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error creating dummy application:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
