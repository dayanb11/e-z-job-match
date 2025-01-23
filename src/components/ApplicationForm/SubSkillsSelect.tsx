import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

interface SubSkillsSelectProps {
  availableSubSkills: string[];
  selectedSubSkills: { name: string; level: number }[];
  onSubSkillSelect: (subSkill: string) => void;
  onRemoveSubSkill: (subSkill: string) => void;
  onSubSkillLevelChange: (subSkillName: string, level: number) => void;
}

export const SubSkillsSelect = ({
  availableSubSkills,
  selectedSubSkills,
  onSubSkillSelect,
  onRemoveSubSkill,
  onSubSkillLevelChange,
}: SubSkillsSelectProps) => {
  if (availableSubSkills.length === 0) return null;

  const getLevelText = (level: number) => {
    if (level <= 33) return "בסיסי";
    if (level <= 66) return "טוב";
    return "מצוין";
  };

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
              disabled={selectedSubSkills.some(s => s.name === subSkill)}
            >
              {subSkill}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedSubSkills.length > 0 && (
        <div className="space-y-4 mt-4">
          {selectedSubSkills.map((subSkill) => (
            <div key={subSkill.name} className="space-y-2 border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="text-sm">
                  {subSkill.name}
                  <button
                    type="button"
                    className="mr-2 hover:text-destructive"
                    onClick={() => onRemoveSubSkill(subSkill.name)}
                  >
                    ✕
                  </button>
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {getLevelText(subSkill.level)}
                </span>
              </div>
              <Slider
                defaultValue={[subSkill.level]}
                max={100}
                step={1}
                className="w-full"
                onValueChange={(value) => onSubSkillLevelChange(subSkill.name, value[0])}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};