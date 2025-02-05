
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

    console.log('Starting to process pending applications...');

    // Get all pending applications
    const { data: applications, error: fetchError } = await supabaseClient
      .from('applications')
      .select('*')
      .eq('status', 'pending');

    if (fetchError) {
      throw fetchError;
    }

    console.log(`Found ${applications?.length || 0} pending applications`);

    let processedCount = 0;

    // Process each application by creating a new record
    for (const application of applications || []) {
      console.log(`Creating new processed record for ${application.personal_details.fullName}`);
      
      // Create a new record with status='processed'
      const { error: insertError } = await supabaseClient
        .from('applications')
        .insert({
          personal_details: application.personal_details,
          industry: application.industry,
          roles: application.roles,
          educations: application.educations,
          status: 'processed'
        });

      if (insertError) {
        console.error(`Error creating processed record for application ${application.id}:`, insertError);
        continue;
      }

      processedCount++;
      console.log(`Successfully created processed record for application ${application.id}`);
    }

    return new Response(
      JSON.stringify({ 
        message: 'New processed applications created successfully',
        processed: processedCount
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error processing applications:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
