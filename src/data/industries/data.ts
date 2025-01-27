import { Industry } from './types';

export const dataIndustry: Industry = {
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
};