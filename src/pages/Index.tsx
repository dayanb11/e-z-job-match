import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ApplicationForm } from "@/components/ApplicationForm/ApplicationForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return <ApplicationForm />;
  }

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-4">
          <div className="border-[#D3E4FD] border-2 rounded-lg p-3 mb-2">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-4xl font-bold text-gray-900">
                E.Z Job Match
              </h1>
              <img 
                src="/lovable-uploads/d7f2a238-1d01-4215-ad5d-0c4b3b96b1e1.png" 
                alt="Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-lg text-gray-600">
              מהפכה בעולם הגיוס
            </p>
          </div>
          <div className="flex justify-center gap-[0.5cm] mb-2">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-md text-base"
            >
              הרשמת מועמד
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#0f172a] text-[#0f172a] px-6 py-2 rounded-md text-base hover:bg-gray-50"
            >
              הרשמת חברה
            </Button>
            <Link to="/dashboard">
              <Button
                variant="outline"
                className="border-2 border-[#0f172a] text-[#0f172a] px-6 py-2 rounded-md text-base hover:bg-gray-50"
              >
                דשבורד מועמדים
              </Button>
            </Link>
          </div>
        </div>

        {/* Problem & Solution Section */}
        <div className="grid md:grid-cols-2 gap-2 mb-2">
          <div className="border-[#D3E4FD] border-2 rounded-lg p-2">
            <h2 className="text-lg font-bold text-red-500 mb-1">הבעיה</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              תהליכי הגיוס הקיימים אינם יעילים ויוצרים עלויות גבוהות וגיבורי משאבים למעסיקים עקב גיוסים לא מתאימים מצד אחד וטיפול בקרב מחפשי העבודה מצד שני
            </p>
          </div>
          <div className="border-[#D3E4FD] border-2 rounded-lg p-2">
            <h2 className="text-lg font-bold text-green-500 mb-1">הפתרון</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              E.Z Job Match משנה את עולם הגיוס על ידי התמקדות בכישורים במקום בתיאורי משרות מסורתיים
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-2">
          <div className="border-[#D3E4FD] border-2 rounded-lg p-2">
            <h3 className="text-base font-bold text-gray-900 mb-1">התמקדות בכישורים</h3>
            <p className="text-xs text-gray-600">
              התמקדות בכישורים ולא בתוארי תפקידים, מאפשרת התאמה מדויקת בין מועמדים למעסיקים
            </p>
          </div>
          
          <div className="border-[#D3E4FD] border-2 rounded-lg p-2">
            <h3 className="text-base font-bold text-gray-900 mb-1">מבחנים מותאמים אישית</h3>
            <p className="text-xs text-gray-600">
              מעסיקים יכולים להעריך את יכולותיהם של מועמדים בצורה מדויקת על ידי מבחנים טכניים והצגה עצמית
            </p>
          </div>
          
          <div className="border-[#D3E4FD] border-2 rounded-lg p-2">
            <h3 className="text-base font-bold text-gray-900 mb-1">שקיפות מלאה</h3>
            <p className="text-xs text-gray-600">
              המערכת מציעה תהליך ברור ומובנה שמפחית טעויות ואי-הבנות בין הצדדים
            </p>
          </div>
          
          <div className="border-[#D3E4FD] border-2 rounded-lg p-2">
            <h3 className="text-base font-bold text-gray-900 mb-1">חוויית משתמש</h3>
            <p className="text-xs text-gray-600">
              ממשק חברה ללא שדות טקסט חופשי תהליך נוח ויעיל הן למועמדים והן למעסיקים
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;