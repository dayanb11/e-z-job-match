import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SkillsSelect } from "./SkillsSelect";
import { SubSkillsSelect } from "./SubSkillsSelect";
import { Role } from "@/data/skillsData";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
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
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between text-right"
            >
              {entry.selectedRole || "בחר תפקיד"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Command dir="rtl" shouldFilter={true}>
              <CommandInput placeholder="חפש תפקיד..." />
              <CommandEmpty>לא נמצאו תוצאות</CommandEmpty>
              <CommandGroup className="max-h-[300px] overflow-auto">
                {availableRoles.map((role) => (
                  <CommandItem
                    key={role.title}
                    value={role.title}
                    onSelect={(currentValue) => {
                      onRoleSelect(currentValue);
                      setOpen(false);
                    }}
                    className="text-right"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        entry.selectedRole === role.title ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {role.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
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