export interface Skill {
  name: string;
  subSkills: string[];
}

export interface Role {
  title: string;
  skills: Skill[];
}

export interface Industry {
  name: string;
  roles: Role[];
}

export const industriesData: Industry[] = [
  {
    name: "AI",
    roles: [],
  },
  {
    name: "אבטחה, שמירה וביטחון",
    roles: [],
  },
  {
    name: "אבטחת איכות QA",
    roles: [],
  },
  {
    name: "אבטחת מידע וסייבר",
    roles: [],
  },
  {
    name: "אדמיניסטרציה",
    roles: [],
  },
  {
    name: "אומנות, בידור ומדיה",
    roles: [],
  },
  {
    name: "אופטיקה",
    roles: [],
  },
  {
    name: "אופנה וטקסטיל",
    roles: [],
  },
  {
    name: "אחזקה ואנשי מקצוע",
    roles: [],
  },
  {
    name: "אינטרנט ודיגיטל",
    roles: [],
  },
  {
    name: "ביוטכנולוגיה",
    roles: [],
  },
  {
    name: "ביטוח",
    roles: [],
  },
  {
    name: "בכירים",
    roles: [],
  },
  {
    name: "בניין, בינוי ותשתיות",
    roles: [],
  },
  {
    name: "בתי קפה, מסעדות ואירועים",
    roles: [],
  },
  {
    name: "דאטה",
    roles: [
      {
        title: "מדען נתונים",
        skills: [
          {
            name: "סטטיסטיקה",
            subSkills: ["הסתברות", "בדיקות השערות"],
          },
          {
            name: "ספריות נתונים",
            subSkills: ["Pandas", "NumPy"],
          },
          {
            name: "כלי למידת מכונה",
            subSkills: ["TensorFlow", "PyTorch"],
          },
          {
            name: "פייתון/R",
            subSkills: [],
          },
          {
            name: "SQL",
            subSkills: [],
          },
          {
            name: "ויזואליזציה",
            subSkills: ["Tableau", "Power BI"],
          },
          {
            name: "ביג דאטה",
            subSkills: ["Hadoop", "Spark"],
          },
          {
            name: "מודלים חזויים",
            subSkills: [],
          },
          {
            name: "ניקוי נתונים",
            subSkills: [],
          },
          {
            name: "בדיקות A/B",
            subSkills: [],
          },
        ],
      },
    ],
  },
  {
    name: "הוראה, חינוך והדרכה",
    roles: [],
  },
  {
    name: "הנדסה",
    roles: [],
  },
  {
    name: "התנדבות",
    roles: [],
  },
  {
    name: "חומרה",
    roles: [],
  },
  {
    name: "חשמל ואלקטרוניקה",
    roles: [],
  },
  {
    name: "יבוא יצוא",
    roles: [],
  },
  {
    name: "יופי, טיפוח וספא",
    roles: [],
  },
  {
    name: "יזמות",
    roles: [],
  },
  {
    name: "ייצור ותעשייה",
    roles: [],
  },
  {
    name: "כללי וללא ניסיון",
    roles: [],
  },
  {
    name: "כספים וכלכלה",
    roles: [],
  },
  {
    name: "מדעי החברה",
    roles: [],
  },
  {
    name: "מדעי החיים, טבע וחקלאות",
    roles: [],
  },
  {
    name: "מדעים מדוייקים",
    roles: [],
  },
  {
    name: "מוצר",
    roles: [],
  },
  {
    name: "מחסנאות",
    roles: [],
  },
  {
    name: "מחשבים ורשתות",
    roles: [],
  },
  {
    name: "מכירות",
    roles: [],
  },
  {
    name: "מערכות מידע",
    roles: [],
  },
  {
    name: "מקצועות דת",
    roles: [],
  },
  {
    name: "משאבי אנוש",
    roles: [],
  },
  {
    name: "משפטים",
    roles: [],
  },
  {
    name: "נדל\"ן",
    roles: [],
  },
  {
    name: "נהגים שליחים והפצה",
    roles: [],
  },
  {
    name: "ניהול ביניים",
    roles: [],
  },
  {
    name: "ניתוח מערכות",
    roles: [],
  },
  {
    name: "סטודנטים",
    roles: [],
  },
  {
    name: "ספורט, כושר ואורח חיים",
    roles: [],
  },
  {
    name: "עבודה בחו\"ל",
    roles: [],
  },
  {
    name: "עבודה ראשונה",
    roles: [],
  },
  {
    name: "עיצוב",
    roles: [],
  },
  {
    name: "עריכה, תוכן וספרות",
    roles: [],
  },
  {
    name: "פרסום שיווק ויחסי ציבור",
    roles: [],
  },
  {
    name: "קמעונאות",
    roles: [],
  },
  {
    name: "רכב ומכונאות",
    roles: [],
  },
  {
    name: "רכש ולוגיסטיקה",
    roles: [],
  },
  {
    name: "רפואה ופארמה",
    roles: [],
  },
  {
    name: "רפואה משלימה",
    roles: [],
  },
  {
    name: "שירות לקוחות",
    roles: [],
  },
  {
    name: "תוכנה",
    roles: [
      {
        title: "מהנדס תוכנה",
        skills: [
          {
            name: "שפות תכנות",
            subSkills: [
              "פייתון",
              "C",
              "C#",
              "C++",
              "Java",
              "CSS",
              "HTML",
              "JavaScript",
              "MTM",
              "Objective C",
              "PHP",
              "Selenium",
              "Xcode",
            ],
          },
          {
            name: "מערכות מבוזרות",
            subSkills: [],
          },
          {
            name: "קוד נקי",
            subSkills: [],
          },
          {
            name: "אלגוריתמים",
            subSkills: ["מיון", "חיפוש", "אלגוריתמי גרפים"],
          },
          {
            name: "מתודולוגיות אג'יל",
            subSkills: ["סקראם", "קאנבן"],
          },
          {
            name: "ידע בבסיסי נתונים",
            subSkills: ["SQL", "NoSQL"],
          },
          {
            name: "RESTful APIs",
            subSkills: [],
          },
          {
            name: "בדיקות תוכנה",
            subSkills: ["בדיקות יחידה", "בדיקות אינטגרציה"],
          },
          {
            name: "פיתוח ענן",
            subSkills: ["תשתיות ענן", "פונקציות ללא שרת"],
          },
          {
            name: "ניפוי שגיאות",
            subSkills: [],
          },
        ],
      },
      {
        title: "אנליסט QA ידני",
        skills: [
          {
            name: "קריאת מסמכי אפיון",
            subSkills: [],
          },
          {
            name: "עבודת צוות",
            subSkills: [],
          },
          {
            name: "מטודולוגיות בקרה",
            subSkills: ["בקרת איכות יסודית", "בקרת שלבי עבודה"],
          },
        ],
      },
      {
        title: "אנליסט QA אוטומטי",
        skills: [
          {
            name: "שיטות אוטומציה",
            subSkills: [],
          },
          {
            name: "ניהול תהליכים מקבילים",
            subSkills: [],
          },
        ],
      },
      {
        title: "מנהל מוצר",
        skills: [
          {
            name: "תכנון מפת דרכים",
            subSkills: [],
          },
          {
            name: "ניתוח שוק",
            subSkills: ["מחקר מתחרים", "סקרי משתמשים"],
          },
          {
            name: "תקשורת צוותית",
            subSkills: [],
          },
          {
            name: "יצירת מסמך דרישות מוצר",
            subSkills: [],
          },
          {
            name: "ניהול מחזור חיים",
            subSkills: ["השקה", "עדכונים", "תכנון סיום"],
          },
          {
            name: "אג'יל/סקראם",
            subSkills: [],
          },
          {
            name: "UX/UI בסיסי",
            subSkills: [],
          },
          {
            name: "כלי ניהול פרויקטים",
            subSkills: ["Jira", "Trello"],
          },
          {
            name: "חשיבה אסטרטגית",
            subSkills: [],
          },
          {
            name: "ניתוח KPI",
            subSkills: ["שמירה על משתמשים", "מדדי המרה"],
          },
        ],
      },
      {
        title: "מהנדס DevOps",
        skills: [
          {
            name: "כלי תשתית",
            subSkills: ["Ansible", "Terraform"],
          },
          {
            name: "צינורות CI/CD",
            subSkills: [],
          },
          {
            name: "פלטפורמות ענן",
            subSkills: ["AWS", "Azure", "GCP"],
          },
          {
            name: "בקרת גרסאות",
            subSkills: ["Git", "Jenkins"],
          },
          {
            name: "סקריפטים",
            subSkills: ["Bash", "פייתון"],
          },
          {
            name: "אוטומציה של תהליכים",
            subSkills: [],
          },
          {
            name: "כלי ניטור",
            subSkills: ["Prometheus", "Grafana"],
          },
          {
            name: "מכולות",
            subSkills: ["Docker", "Kubernetes"],
          },
          {
            name: "אבטחה",
            subSkills: [],
          },
          {
            name: "שיפור ביצועים",
            subSkills: [],
          },
        ],
      },
      {
        title: "אנליסט סייבר",
        skills: [
          {
            name: "פרוטוקולי אבטחה",
            subSkills: ["TLS", "SSL"],
          },
          {
            name: "זיהוי איומים",
            subSkills: [],
          },
          {
            name: "הקשחת מערכות",
            subSkills: [],
          },
          {
            name: "כלי SIEM",
            subSkills: ["Splunk", "QRadar"],
          },
          {
            name: "ניתוח לוגים",
            subSkills: [],
          },
          {
            name: "תקני תאימות",
            subSkills: ["ISO 27001", "GDPR"],
          },
          {
            name: "חומות אש",
            subSkills: [],
          },
          {
            name: "סריקות פגיעויות",
            subSkills: [],
          },
          {
            name: "רשתות מאובטחות",
            subSkills: ["VPN", "IPS/IDS"],
          },
          {
            name: "מדיניות אבטחה",
            subSkills: [],
          },
        ],
      },
    ],
  },
  {
    name: "תיירות ומלונאות",
    roles: [],
  },
  {
    name: "תעופה וימאות",
    roles: [],
  },
];