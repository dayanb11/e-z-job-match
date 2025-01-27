import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getLevelText = (level: number) => {
    if (level <= 33) return "בסיסי";
    if (level <= 66) return "טוב";
    return "מצוין";
  };

  // Filter skills based on search value
  const filteredSkills = availableSkills.filter((skill) => {
    if (!skill?.name || !searchValue) return true;
    return skill.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="space-y-2">
      <Label>כישורים</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-right"
          >
            בחר כישור
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command dir="rtl" className="bg-slate-900">
            <CommandInput 
              placeholder="חפש כישור..." 
              value={searchValue}
              onValueChange={setSearchValue}
              className="text-right bg-slate-800"
            />
            <CommandList className="bg-slate-900">
              <CommandGroup>
                {filteredSkills.length === 0 ? (
                  <CommandEmpty className="text-right text-slate-200">לא נמצאו תוצאות</CommandEmpty>
                ) : (
                  filteredSkills.map((skill) => (
                    skill?.name && (
                      <CommandItem
                        key={skill.name}
                        value={skill.name}
                        onSelect={(currentValue) => {
                          onSkillSelect(currentValue);
                          setOpen(false);
                          setSearchValue("");
                        }}
                        className="text-right text-slate-200 hover:bg-slate-800"
                        disabled={selectedSkills.some(s => s.name === skill.name)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedSkills.some(s => s.name === skill.name) ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {skill.name}
                      </CommandItem>
                    )
                  ))
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

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