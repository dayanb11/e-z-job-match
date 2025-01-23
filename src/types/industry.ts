export interface Industry {
  name: string;
  roles: {
    title: string;
    skills: {
      name: string;
      subSkills: string[];
    }[];
  }[];
}