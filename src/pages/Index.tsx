import { ApplicationForm } from "@/components/ApplicationForm/ApplicationForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <ApplicationForm />;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <img 
            src="/lovable-uploads/d7f2a238-1d01-4215-ad5d-0c4b3b96b1e1.png" 
            alt="JOBmatch Logo" 
            className="h-16 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            JOBmatch - המקום שלך למציאת עבודה בהייטק
          </h1>
          <p className="text-xl text-gray-600">
            מצא את המשרה המושלמת עבורך
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              למה JOBmatch?
            </h2>
            <p className="text-gray-700 mb-4">
              אנחנו מחברים בין מועמדים איכותיים לבין החברות המובילות בתעשייה, תוך התאמה מדויקת של כישורים וציפיות.
            </p>
          </Card>

          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              איך זה עובד?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>מלא את טופס ההרשמה המקיף שלנו</li>
              <li>המערכת שלנו תנתח את הכישורים והניסיון שלך</li>
              <li>נחבר אותך למשרות שמתאימות בדיוק לפרופיל שלך</li>
              <li>נלווה אותך לאורך כל תהליך הגיוס</li>
            </ul>
          </Card>

          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              היתרונות שלנו
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>התאמה מדויקת למשרות רלוונטיות</li>
              <li>חיסכון בזמן בחיפוש העבודה</li>
              <li>ליווי אישי לאורך כל התהליך</li>
              <li>גישה למשרות בחברות המובילות במשק</li>
            </ul>
          </Card>

          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-lg"
            >
              רישום מועמד
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;