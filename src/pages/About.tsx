import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">פיתוח אתרים בעברית</h1>
        
        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">מה זה פיתוח אתרים בעברית?</h2>
            <p className="text-gray-600">
              פיתוח אתרים בעברית הוא תחום מרתק המשלב בין טכנולוגיה לשפה. זהו תהליך של יצירת אתרי אינטרנט המותאמים במיוחד לקהל דובר העברית, תוך התחשבות במאפיינים הייחודיים של השפה העברית ובצרכים התרבותיים של המשתמשים הישראלים.
            </p>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">למה זה חשוב?</h2>
            <p className="text-gray-600 mb-4">
              חשיבות פיתוח אתרים בעברית נובעת ממספר גורמים מרכזיים:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>נגישות למשתמשים דוברי עברית</li>
              <li>התאמה תרבותית לשוק הישראלי</li>
              <li>שיפור חווית המשתמש</li>
              <li>קידום אתרים בשוק המקומי</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">אתגרים בפיתוח אתרים בעברית</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>תמיכה בכיווניות טקסט מימין לשמאל (RTL)</li>
              <li>שילוב תוכן דו-לשוני (עברית ואנגלית)</li>
              <li>התאמת ממשק המשתמש לשפה העברית</li>
              <li>אופטימיזציה למנועי חיפוש בעברית</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">פתרונות ושיטות עבודה</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>שימוש בטכנולוגיות מודרניות התומכות ב-RTL</li>
              <li>יישום שיטות עיצוב מותאמות לעברית</li>
              <li>פיתוח תבניות ייעודיות לתוכן בעברית</li>
              <li>שימוש בכלי SEO מותאמים לשוק הישראלי</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">טיפים לפיתוח מוצלח</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
              <li>תכנון מקדים של מבנה האתר</li>
              <li>בדיקת תאימות בדפדפנים שונים</li>
              <li>שימוש בפונטים מותאמים לעברית</li>
              <li>בדיקות משתמשים עם קהל יעד ישראלי</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-white border-2 border-gray-200 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">סיכום</h2>
            <p className="text-gray-600">
              פיתוח אתרים בעברית הוא תחום מתפתח המצריך מומחיות ייחודית. באמצעות הבנה מעמיקה של הצרכים הייחודיים של השוק הישראלי ושימוש בטכנולוגיות מתקדמות, ניתן ליצור אתרים מצוינים המשרתים את הקהל הישראלי בצורה הטובה ביותר.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;