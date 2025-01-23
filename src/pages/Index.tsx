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
            פיתוח אתרים בעברית
          </h1>
          <p className="text-xl text-gray-600">
            מדריך מקיף לפיתוח אתרים בשפה העברית
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              מה זה פיתוח אתרים בעברית?
            </h2>
            <p className="text-gray-700 mb-4">
              פיתוח אתרים בעברית הוא תחום מרתק המשלב בין טכנולוגיה לשפה. זהו תהליך של יצירת אתרי אינטרנט המותאמים במיוחד לקהל דובר העברית, תוך התחשבות במאפיינים הייחודיים של השפה העברית ובצרכים התרבותיים של המשתמשים הישראלים.
            </p>
          </Card>

          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              למה זה חשוב?
            </h2>
            <p className="text-gray-700 mb-4">
              חשיבות פיתוח אתרים בעברית נובעת ממספר גורמים מרכזיים:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>נגישות למשתמשים דוברי עברית</li>
              <li>התאמה תרבותית לשוק הישראלי</li>
              <li>שיפור חווית המשתמש</li>
              <li>קידום אתרים בשוק המקומי</li>
            </ul>
          </Card>

          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              אתגרים בפיתוח אתרים בעברית
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>תמיכה בכיווניות טקסט מימין לשמאל (RTL)</li>
              <li>שילוב תוכן דו-לשוני (עברית ואנגלית)</li>
              <li>התאמת ממשק המשתמש לשפה העברית</li>
              <li>אופטימיזציה למנועי חיפוש בעברית</li>
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