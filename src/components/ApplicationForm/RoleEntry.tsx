import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Role } from "@/types/industry";
import { RoleSelector } from "./RoleSelector";
import { RoleSkillsManager } from "./RoleSkillsManager";

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
        <RoleSelector
          selectedRole={entry.selectedRole}
          availableRoles={availableRoles}
          onRoleSelect={onRoleSelect}
        />
      </div>

      {entry.selectedRole && (
        <RoleSkillsManager
          selectedRoleData={selectedRoleData}
          selectedSkills={entry.selectedSkills}
          selectedSubSkills={entry.selectedSubSkills}
          onSkillSelect={onSkillSelect}
          onSubSkillSelect={onSubSkillSelect}
          onRemoveSkill={onRemoveSkill}
          onRemoveSubSkill={onRemoveSubSkill}
          onSkillLevelChange={onSkillLevelChange}
          onSubSkillLevelChange={onSubSkillLevelChange}
        />
      )}
    </div>
  );
};