import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ApplicationForm } from "@/components/ApplicationForm/ApplicationForm";
import { useState } from "react";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <ApplicationForm />;
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="border-[#D3E4FD] border-2 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-5xl font-bold text-gray-900">
                E.Z Job Match
              </h1>
              <img 
                src="/lovable-uploads/d7f2a238-1d01-4215-ad5d-0c4b3b96b1e1.png" 
                alt="Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-xl text-gray-600">
              מהפכה בעולם הגיוס
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-3 rounded-md text-lg"
            >
              הרשמת מועמד
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#0f172a] text-[#0f172a] px-8 py-3 rounded-md text-lg hover:bg-gray-50"
            >
              הרשמת חברה
            </Button>
          </div>
        </div>

        {/* Problem & Solution Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="border-[#D3E4FD] border-2 rounded-lg p-4">
            <h2 className="text-xl font-bold text-red-500 mb-2">הבעיה</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              תהליכי הגיוס הקיימים אינם יעילים ויוצרים עלויות גבוהות וגיבורי משאבים למעסיקים עקב גיוסים לא מתאימים מצד אחד וטיפול בקרב מחפשי העבודה מצד שני
            </p>
          </div>
          <div className="border-[#D3E4FD] border-2 rounded-lg p-4">
            <h2 className="text-xl font-bold text-green-500 mb-2">הפתרון</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              E.Z Job Match משנה את עולם הגיוס על ידי התמקדות בכישורים במקום בתיאורי משרות מסורתיים
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border-[#D3E4FD] border-2 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">התמקדות בכישורים</h3>
            <p className="text-gray-600 text-sm">
              התמקדות בכישורים ולא בתוארי תפקידים, מאפשרת התאמה מדויקת בין מועמדים למעסיקים
            </p>
          </div>
          
          <div className="border-[#D3E4FD] border-2 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">מבחנים מותאמים אישית</h3>
            <p className="text-gray-600 text-sm">
              מעסיקים יכולים להעריך את יכולותיהם של מועמדים בצורה מדויקת על ידי מבחנים טכניים והצגה עצמית
            </p>
          </div>
          
          <div className="border-[#D3E4FD] border-2 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">שקיפות מלאה</h3>
            <p className="text-gray-600 text-sm">
              המערכת מציעה תהליך ברור ומובנה שמפחית טעויות ואי-הבנות בין הצדדים
            </p>
          </div>
          
          <div className="border-[#D3E4FD] border-2 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">חוויית משתמש</h3>
            <p className="text-gray-600 text-sm">
              ממשק חברה ללא שדות טקסט חופשי תהליך נוח ויעיל הן למועמדים והן למעסיקים
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;