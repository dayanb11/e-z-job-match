import { SkillsSelect } from "./SkillsSelect";
import { SubSkillsSelect } from "./SubSkillsSelect";
import { Role } from "@/types/industry";

interface RoleSkillsManagerProps {
  selectedRoleData: Role | undefined;
  selectedSkills: { name: string; level: number }[];
  selectedSubSkills: { name: string; level: number }[];
  onSkillSelect: (skill: string) => void;
  onSubSkillSelect: (subSkill: string) => void;
  onRemoveSkill: (skill: string) => void;
  onRemoveSubSkill: (subSkill: string) => void;
  onSkillLevelChange: (skillName: string, level: number) => void;
  onSubSkillLevelChange: (subSkillName: string, level: number) => void;
}

export const RoleSkillsManager = ({
  selectedRoleData,
  selectedSkills,
  selectedSubSkills,
  onSkillSelect,
  onSubSkillSelect,
  onRemoveSkill,
  onRemoveSubSkill,
  onSkillLevelChange,
  onSubSkillLevelChange,
}: RoleSkillsManagerProps) => {
  const availableSubSkills = selectedSkills
    .map((skill) => {
      const skillData = selectedRoleData?.skills.find(
        (s) => s.name === skill.name
      );
      return skillData?.subSkills || [];
    })
    .flat();

  return (
    <>
      <SkillsSelect
        availableSkills={selectedRoleData?.skills || []}
        selectedSkills={selectedSkills}
        onSkillSelect={onSkillSelect}
        onRemoveSkill={onRemoveSkill}
        onSkillLevelChange={onSkillLevelChange}
      />

      <SubSkillsSelect
        availableSubSkills={availableSubSkills}
        selectedSubSkills={selectedSubSkills}
        onSubSkillSelect={onSubSkillSelect}
        onRemoveSubSkill={onRemoveSubSkill}
        onSubSkillLevelChange={onSubSkillLevelChange}
      />
    </>
  );
};
