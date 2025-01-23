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
            אתגרים בפיתוח אתרים בעברית
          </h1>
          <p className="text-xl text-gray-600">
            פתרונות מעשיים לאתגרים נפוצים
          </p>
        </div>

        <div className="space-y-8">
          {/* אתגר 1 */}
          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              כיווניות טקסט (RTL/LTR)
            </h2>
            <p className="text-gray-700 mb-4">
              אחד האתגרים המרכזיים בפיתוח אתרים בעברית הוא ניהול כיווניות הטקסט. בעוד שהעברית נכתבת מימין לשמאל (RTL), תוכן באנגלית ומספרים נכתבים משמאל לימין (LTR).
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>שילוב תוכן דו-כיווני בממשק המשתמש</li>
              <li>התאמת תפריטים וניווט לכיווניות RTL</li>
              <li>טיפול בקלט משתמש בשפות שונות</li>
            </ul>
          </Card>

          {/* אתגר 2 */}
          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              עיצוב ופריסה
            </h2>
            <p className="text-gray-700 mb-4">
              התאמת העיצוב לכיווניות RTL מצריכה תשומת לב מיוחדת לפרטים כמו מיקום אלמנטים, שוליים ומרווחים.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>התאמת Grid ו-Flexbox לתצוגת RTL</li>
              <li>מיקום נכון של אייקונים וכפתורים</li>
              <li>טיפול בגלישת טקסט ושבירת שורות</li>
            </ul>
          </Card>

          {/* אתגר 3 */}
          <Card className="p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              תמיכה בדפדפנים
            </h2>
            <p className="text-gray-700 mb-4">
              חשוב לוודא תמיכה עקבית בתכונות RTL בדפדפנים שונים ולטפל בהבדלים ביניהם.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>בדיקת תאימות בדפדפנים שונים</li>
              <li>טיפול בבאגים ספציפיים לדפדפן</li>
              <li>שימוש ב-CSS ו-JavaScript תומך RTL</li>
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