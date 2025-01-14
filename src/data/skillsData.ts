export interface Skill {
  name: string;
  subSkills?: string[];
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
          { name: "SQL" },
          {
            name: "ויזואליזציה",
            subSkills: ["Tableau", "Power BI"],
          },
          {
            name: "ביג דאטה",
            subSkills: ["Hadoop", "Spark"],
          },
          { name: "מודלים חזויים" },
          { name: "ניקוי נתונים" },
          { name: "בדיקות A/B" },
        ],
      },
    ],
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
              "Python",
              "C",
              "C#",
              "C++",
              "Java",
              "CSS",
              "HTML",
              "JavaScript",
            ],
          },
          {
            name: "אלגוריתמים",
            subSkills: ["מיון", "חיפוש", "גרף אלגוריתמים"],
          },
          {
            name: "מתודולוגיות אג'יל",
            subSkills: ["סקראם", "קאנבן"],
          },
        ],
      },
    ],
  },
];