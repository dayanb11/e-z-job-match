import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface SubSkillsSelectProps {
  availableSubSkills: string[];
  selectedSubSkills: string[];
  onSubSkillSelect: (subSkill: string) => void;
  onRemoveSubSkill: (subSkill: string) => void;
}

export const SubSkillsSelect = ({
  availableSubSkills,
  selectedSubSkills,
  onSubSkillSelect,
  onRemoveSubSkill,
}: SubSkillsSelectProps) => {
  if (availableSubSkills.length === 0) return null;

  return (
    <div className="space-y-2">
      <Label>כישורי משנה</Label>
      <Select value="" onValueChange={onSubSkillSelect}>
        <SelectTrigger>
          <SelectValue placeholder="בחר כישור משנה" />
        </SelectTrigger>
        <SelectContent>
          {availableSubSkills.map((subSkill) => (
            <SelectItem
              key={subSkill}
              value={subSkill}
              disabled={selectedSubSkills.includes(subSkill)}
            >
              {subSkill}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedSubSkills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedSubSkills.map((subSkill) => (
            <Badge key={subSkill} variant="outline" className="text-sm">
              {subSkill}
              <button
                type="button"
                className="mr-2 hover:text-destructive"
                onClick={() => onRemoveSubSkill(subSkill)}
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