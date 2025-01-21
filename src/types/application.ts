export interface PersonalDetails {
  fullName: string;
  email: string;
  phone: string;
  location: string;
}

export interface Role {
  role: string;
  skills: string[];
  subSkills: string[];
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