import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">פיתוח אתרים בעברית</h1>
        
        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">מבוא</h2>
            <p className="text-gray-600">
              פיתוח אתרים בעברית מציב אתגרים ייחודיים בפני מפתחים. האתגר העיקרי הוא התמיכה בכיווניות טקסט דו-כיוונית (RTL/LTR) והצורך להתאים את הממשק המשתמש לשפה העברית.
            </p>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">אתגרים בפיתוח אתרים בעברית</h2>
            <p className="text-gray-600 mb-4">
              פיתוח אתרים בעברית מציב מספר אתגרים משמעותיים:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>תמיכה בכיווניות טקסט דו-כיוונית (RTL/LTR)</li>
              <li>התאמת ממשקי משתמש לשפה העברית</li>
              <li>טיפול בתוכן מעורב עברית-אנגלית</li>
              <li>יישור טקסט ואלמנטים לימין</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">פתרונות מרכזיים</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>שימוש בתכונות CSS מודרניות לתמיכה ב-RTL</li>
              <li>התאמת תבניות עיצוב לתמיכה בעברית</li>
              <li>שימוש בספריות וכלים התומכים בעברית</li>
              <li>אופטימיזציה לחוויית משתמש בעברית</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">יתרונות הפתרון</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>תמיכה מלאה בעברית ובאנגלית</li>
              <li>ממשק משתמש אינטואיטיבי</li>
              <li>ביצועים מהירים ויעילים</li>
              <li>תאימות מלאה למכשירים שונים</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">סיכום</h2>
            <p className="text-gray-600">
              פיתוח אתרים בעברית דורש התייחסות מיוחדת לאתגרים הייחודיים של השפה. באמצעות שימוש בטכנולוגיות ופתרונות מתאימים, ניתן ליצור חווית משתמש מעולה עבור דוברי עברית.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;