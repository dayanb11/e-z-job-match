
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Define valid industries - includes all industries from our data
const validIndustries = [
  "תוכנה", "דאטה", "AI", "אבטחה, שמירה וביטחון", "אבטחת איכות QA",
  "אבטחת מידע וסייבר", "אדמיניסטרציה", "אומנות, בידור ומדיה", "אופטיקה",
  "אופנה וטקסטיל", "אחזקה ואנשי מקצוע", "אינטרנט ודיגיטל", "ביוטכנולוגיה",
  "ביטוח", "בכירים", "בניין, בינוי ותשתיות", "בתי קפה, מסעדות ואירועים",
  "הוראה, חינוך והדרכה", "הנדסה", "התנדבות", "חומרה", "חשמל ואלקטרוניקה",
  "יבוא יצוא", "יופי, טיפוח וספא", "יזמות", "ייצור ותעשייה", "כללי וללא ניסיון",
  "כספים וכלכלה", "מדעי החברה", "מדעי החיים, טבע וחקלאות", "מדעים מדוייקים",
  "מוצר", "מחסנאות", "מחשבים ורשתות", "מכירות", "מערכות מידע", "מקצועות דת",
  "משאבי אנוש", "משפטים", 'נדל"ן', "נהגים שליחים והפצה", "ניהול ביניים",
  "ניתוח מערכות", "סטודנטים", "ספורט, כושר ואורח חיים", 'עבודה בחו"ל',
  "עבודה ראשונה", "עיצוב", "עריכה, תוכן וספרות", "פרסום שיווק ויחסי ציבור",
  "קמעונאות", "רכב ומכונאות", "רכש ולוגיסטיקה", "רפואה ופארמה", "רפואה משלימה",
  "שירות לקוחות", "תיירות ומלונאות", "תעופה וימאות", "אלקטרוניקה וחשמל",
  "אינטרנט", "אחזקה וניקיון", "טבע וחקלאות", 'בינוי, תשתיות ונדל"ן',
  "גרפיקה, עיצוב ואומנות", "מסעדנות, מזון ואירועים", "תעופה אווירונאוטיקה וימאות",
  "מחשוב רשתות ותוכנה", "חשבונאות וכספים", "שיווק ופרסום", "ניהול בכיר"
];

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body if it exists
    let requestData;
    if (req.method === 'POST') {
      try {
        requestData = await req.json();
      } catch (e) {
        console.error('Error parsing request body:', e);
      }
    }

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // If we have request data, validate the industry
    if (requestData?.industry) {
      if (!validIndustries.includes(requestData.industry)) {
        return new Response(
          JSON.stringify({ 
            error: 'ערך תעשייה לא חוקי. חייב להיות אחד מ: ' + validIndustries.join(', ') 
          }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 400
          }
        );
      }
      
      // Create application with validated data
      const { error: insertError } = await supabaseClient
        .from('applications')
        .insert([requestData]);

      if (insertError) {
        throw insertError;
      }

      return new Response(
        JSON.stringify({ message: 'Application created successfully' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    }

    console.log('Creating a new dummy application record...');

    // Create a new dummy application record
    const dummyApplication = {
      personal_details: {
        fullName: "יעל כהן",
        email: "test@example.com",
        phone: "050-0000000",
        location: "תל אביב"
      },
      industry: "תוכנה",  // תמיד משתמשים בערך תקין מרשימת התעשיות המוגדרת
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
    console.error('Error creating application:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
