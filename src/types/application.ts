export interface PersonalDetails {
  fullName: string;
  email: string;
  phone: string;
  location: string;
}

export interface SkillWithLevel {
  name: string;
  level: number;
}

export interface Role {
  role: string;
  skills: SkillWithLevel[];
  subSkills: SkillWithLevel[];
}

export interface Education {
  education: string;
  certifications: string;
  institution: string;
  additionalInfo: string;
}

export interface Application {
  id?: string;
  personalDetails: PersonalDetails;
  industry: string;
  roles: Role[];
  educations: Education[];
  createdAt?: string;
}