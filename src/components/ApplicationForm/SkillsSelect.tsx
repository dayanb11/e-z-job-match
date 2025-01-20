import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface SkillsSelectProps {
  availableSkills: { name: string; subSkills: string[] }[];
  selectedSkills: string[];
  onSkillSelect: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
}

export const SkillsSelect = ({
  availableSkills,
  selectedSkills,
  onSkillSelect,
  onRemoveSkill,
}: SkillsSelectProps) => {
  return (
    <div className="space-y-2">
      <Label>כישורים</Label>
      <Select value="" onValueChange={onSkillSelect}>
        <SelectTrigger>
          <SelectValue placeholder="בחר כישור" />
        </SelectTrigger>
        <SelectContent>
          {availableSkills.map((skill) => (
            <SelectItem
              key={skill.name}
              value={skill.name}
              disabled={selectedSkills.includes(skill.name)}
            >
              {skill.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedSkills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSkills.map((skillName) => (
            <Badge key={skillName} variant="secondary" className="text-sm">
              {skillName}
              <button
                type="button"
                className="mr-2 hover:text-destructive"
                onClick={() => onRemoveSkill(skillName)}
              >
                ✕
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};