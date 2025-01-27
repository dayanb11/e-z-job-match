export interface Industry {
  name: string;
  roles: Role[];
}

export interface Role {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  subSkills: string[];
}