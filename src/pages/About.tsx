import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3444] py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Hebrew Web Wonders</h1>
        
        <Card className="bg-[#2A303C] border-[#3F4758] mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#E5DEFF] mb-4">הבעיה</h2>
            <p className="text-gray-300 mb-6">
              פיתוח אתרים בעברית מציב אתגרים ייחודיים בפני מפתחים, במיוחד כאשר מדובר בממשק משתמש דו-כיווני (RTL/LTR).
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#D6BCFA] mb-3">אתגרי פיתוח בעברית:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mr-4">
                  <li>תמיכה בכיווניות טקסט דו-כיוונית (RTL/LTR)</li>
                  <li>יישור טקסט ואלמנטים לימין</li>
                  <li>התאמת ממשקי משתמש לשפה העברית</li>
                  <li>טיפול בתוכן מעורב עברית-אנגלית</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#D6BCFA] mb-3">אתגרים נוספים:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mr-4">
                  <li>התאמת תבניות עיצוב קיימות לתמיכה בעברית</li>
                  <li>שילוב ספריות וכלים שאינם תומכים באופן מלא בעברית</li>
                  <li>אופטימיזציה לחוויית משתמש בעברית</li>
                  <li>תאימות עם דפדפנים ומכשירים שונים</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-[#2A303C] border-[#3F4758]">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#E5DEFF] mb-4">הפתרון</h2>
            <p className="text-gray-300 mb-6">
              Hebrew Web Wonders מספק פתרונות מקיפים לפיתוח אתרים בעברית, תוך התמודדות עם האתגרים הייחודיים של השפה.
            </p>

            <ul className="list-disc list-inside space-y-4 text-gray-300 mr-4">
              <li>
                <span className="font-semibold text-[#D6BCFA]">תמיכה מלאה ב-RTL:</span>
                {" "}מערכת שמתוכננת מהיסוד לתמיכה בכיווניות טקסט דו-כיוונית.
              </li>
              <li>
                <span className="font-semibold text-[#D6BCFA]">ממשק משתמש מותאם:</span>
                {" "}עיצוב ותכנון המותאמים במיוחד לחוויית משתמש בעברית.
              </li>
              <li>
                <span className="font-semibold text-[#D6BCFA]">פתרונות מובנים:</span>
                {" "}כלים וספריות מותאמים לעבודה עם תוכן בעברית.
              </li>
              <li>
                <span className="font-semibold text-[#D6BCFA]">אופטימיזציה לביצועים:</span>
                {" "}שיפור מהירות הטעינה והביצועים עבור תוכן בעברית.
              </li>
              <li>
                <span className="font-semibold text-[#D6BCFA]">תמיכה בדפדפנים:</span>
                {" "}תאימות מלאה עם מגוון דפדפנים ומכשירים.
              </li>
              <li>
                <span className="font-semibold text-[#D6BCFA]">כלי פיתוח:</span>
                {" "}סט כלים מקיף לפיתוח אתרים בעברית.
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;