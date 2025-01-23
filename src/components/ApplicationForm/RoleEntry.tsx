import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SkillsSelect } from "./SkillsSelect";
import { SubSkillsSelect } from "./SubSkillsSelect";
import { Role } from "@/data/skillsData";

interface RoleEntryProps {
  index: number;
  entry: {
    id: number;
    selectedRole: string;
    selectedSkills: { name: string; level: number }[];
    selectedSubSkills: { name: string; level: number }[];
  };
  availableRoles: Role[];
  onRoleSelect: (value: string) => void;
  onSkillSelect: (skill: string) => void;
  onSubSkillSelect: (subSkill: string) => void;
  onRemoveSkill: (skill: string) => void;
  onRemoveSubSkill: (subSkill: string) => void;
  onRemoveRole: () => void;
  onSkillLevelChange: (skillName: string, level: number) => void;
  onSubSkillLevelChange: (subSkillName: string, level: number) => void;
  isRemovable: boolean;
}

export const RoleEntry = ({
  index,
  entry,
  availableRoles,
  onRoleSelect,
  onSkillSelect,
  onSubSkillSelect,
  onRemoveSkill,
  onRemoveSubSkill,
  onRemoveRole,
  onSkillLevelChange,
  onSubSkillLevelChange,
  isRemovable,
}: RoleEntryProps) => {
  const selectedRoleData = availableRoles.find(
    (role) => role.title === entry.selectedRole
  );

  const availableSubSkills = entry.selectedSkills
    .map((skill) => {
      const skillData = selectedRoleData?.skills.find(
        (s) => s.name === skill.name
      );
      return skillData?.subSkills || [];
    })
    .flat();

  return (
    <div className="space-y-4 border p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">תפקיד {index + 1}</h3>
        {isRemovable && (
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={onRemoveRole}
          >
            הסר תפקיד
          </Button>
        )}
      </div>

      <div className="space-y-2">
        <Label>תפקיד</Label>
        <Select value={entry.selectedRole} onValueChange={onRoleSelect}>
          <SelectTrigger>
            <SelectValue placeholder="בחר תפקיד" />
          </SelectTrigger>
          <SelectContent>
            {availableRoles.map((role) => (
              <SelectItem key={role.title} value={role.title}>
                {role.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {entry.selectedRole && (
        <>
          <SkillsSelect
            availableSkills={selectedRoleData?.skills || []}
            selectedSkills={entry.selectedSkills}
            onSkillSelect={onSkillSelect}
            onRemoveSkill={onRemoveSkill}
            onSkillLevelChange={onSkillLevelChange}
          />

          <SubSkillsSelect
            availableSubSkills={availableSubSkills}
            selectedSubSkills={entry.selectedSubSkills}
            onSubSkillSelect={onSubSkillSelect}
            onRemoveSubSkill={onRemoveSubSkill}
            onSubSkillLevelChange={onSubSkillLevelChange}
          />
        </>
      )}
    </div>
  );
};