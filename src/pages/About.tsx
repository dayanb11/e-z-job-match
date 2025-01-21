import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">E.Z Job Match - משנים את עולם הגיוס</h1>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">הבעיה</h2>
          <p className="text-gray-600 mb-6">
            תהליכי הגיוס הקיימים אינם יעילים ויוצרים עלויות גבוהות ובזבוז משאבים למעסיקים עקב גיוסים לא מתאימים מחד ותסכול בקרב מחפשי העבודה מאידך.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">אתרי הדרושים המסורתיים:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
                <li>מציגים ממשקים מסורבלים שמקשים על תהליך ההתאמה ושואבים זמן יקר מהמעסיקים ומהמועמדים.</li>
                <li>משרות רבות בכפילויות משום שחברות השמה שונות מפרסמות את אותן המשרות.</li>
                <li>התמקדות בתיאורי משרות במקום בכישורים, מה שמוביל לאי-הבנות בין מעסיקים למועמדים.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">מערכות ATS:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
                <li>תסכול בקרב מחפשי עבודה בשל דחיות ממערכות ATS (Applicant tracking system)</li>
                <li>חוסר משוב ברור וצורך להתאים את קורות החיים למשרות רבות.</li>
                <li>הסתמכות על מערכות מבוססות מילות מפתח, שאינן מצליחות לזהות את הפוטנציאל האמיתי של מועמדים וצרכי מעסיקים.</li>
                <li>חוסר יכולת של מעסיקים לבחון מועמדים בצורה מותאמת אישית על סמך כישוריהם בפועל.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">לינקדאין:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mr-4">
                <li>הרשת מציגה התאמות פרופילים של מועמדים ומשרות דרושים על פי התיעדוף המסחרי שלה כמו יצירת טראפיק ומוניטיזציה ולאו דווקא על פי ההתאמה הטובה ביותר.</li>
                <li>תיאורי התפקידים משתנים באופן משמעותי בין ארגונים ותעשיות, מה שגורם לאי-הבנות וחוסר בהירות.</li>
                <li>צורך ביצירת תוכן רב לא רלוונטי אשר לוקח זמן וכסף להפיקו.</li>
                <li>חוסר שקיפות ואמינות לגבי יכולותיהם והכישורים שהמועמדים מציגים.</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">הפתרון</h2>
          <p className="text-gray-600 mb-6">
            E.Z Job Match משנה את עולם הגיוס על ידי התמקדות בכישורים במקום בתיאורי משרות מסורתיים.
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-600 mr-4">
            <li>
              <span className="font-semibold">התמקדות בכישורים ולא בכותרות תפקידים:</span>
              {" "}הפלטפורמה מסייעת לגשר על פערי הגדרה בין ארגונים ומאפשרת התאמה מדויקת בין מועמדים למעסיקים.
            </li>
            <li>
              <span className="font-semibold">מבחנים מותאמים אישית:</span>
              {" "}מעסיקים יכולים להעריך את יכולותיהם של מועמדים בצורה מדויקת על ידי מבחנים וסרטוני הצגה עצמית, במקום להסתמך על תיאורים בקורות החיים.
            </li>
            <li>
              <span className="font-semibold">שקיפות מלאה:</span>
              {" "}המערכת מציעה תהליך ברור ומובנה שמפחית טעויות ואי-הבנות בין הצדדים.
            </li>
            <li>
              <span className="font-semibold">חוויית משתמש:</span>
              {" "}ממשק מובנה ללא שדות טקסט חופשי מבטיח תהליך נוח ויעיל הן למועמדים והן למעסיקים.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;