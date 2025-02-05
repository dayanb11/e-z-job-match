
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

    // Process each application
    for (const application of applications || []) {
      console.log(`Processing application for ${application.personal_details.fullName}`);
      
      // Here you can add your application processing logic
      // For example: sending emails, updating external systems, etc.
      
      // Update the application status to processed
      const { error: updateError } = await supabaseClient
        .from('applications')
        .update({ status: 'processed' })
        .eq('id', application.id);

      if (updateError) {
        console.error(`Error updating application ${application.id}:`, updateError);
        continue;
      }

      console.log(`Successfully processed application ${application.id}`);
    }

    return new Response(
      JSON.stringify({ 
        message: 'Applications processed successfully',
        processed: applications?.length || 0 
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
