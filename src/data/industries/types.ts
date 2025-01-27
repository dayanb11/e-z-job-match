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