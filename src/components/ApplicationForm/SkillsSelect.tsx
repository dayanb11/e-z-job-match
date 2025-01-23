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

interface SkillsSelectProps {
  availableSkills: { name: string; subSkills: string[] }[];
  selectedSkills: { name: string; level: number }[];
  onSkillSelect: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
  onSkillLevelChange: (skillName: string, level: number) => void;
}

export const SkillsSelect = ({
  availableSkills,
  selectedSkills,
  onSkillSelect,
  onRemoveSkill,
  onSkillLevelChange,
}: SkillsSelectProps) => {
  const getLevelText = (level: number) => {
    if (level <= 33) return "בסיסי";
    if (level <= 66) return "טוב";
    return "מצוין";
  };

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
              disabled={selectedSkills.some(s => s.name === skill.name)}
            >
              {skill.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedSkills.length > 0 && (
        <div className="space-y-4 mt-4">
          {selectedSkills.map((skill) => (
            <div key={skill.name} className="space-y-2 border p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <Badge variant="secondary" className="text-sm">
                  {skill.name}
                  <button
                    type="button"
                    className="mr-2 hover:text-destructive"
                    onClick={() => onRemoveSkill(skill.name)}
                  >
                    ✕
                  </button>
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {getLevelText(skill.level)}
                </span>
              </div>
              <Slider
                defaultValue={[skill.level]}
                max={100}
                step={1}
                className="w-full"
                onValueChange={(value) => onSkillLevelChange(skill.name, value[0])}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};