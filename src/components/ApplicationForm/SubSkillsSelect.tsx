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
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  if (availableSubSkills.length === 0) return null;

  const getLevelText = (level: number) => {
    if (level <= 33) return "בסיסי";
    if (level <= 66) return "טוב";
    return "מצוין";
  };

  // Filter subskills based on search value
  const filteredSubSkills = availableSubSkills.filter((subSkill) => {
    if (!subSkill || !searchValue) return true;
    return subSkill.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="space-y-2">
      <Label>כישורי משנה</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-right"
          >
            בחר כישור משנה
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command dir="rtl" className="bg-slate-900">
            <CommandInput 
              placeholder="חפש כישור משנה..." 
              value={searchValue}
              onValueChange={setSearchValue}
              className="text-right bg-slate-800"
            />
            <CommandList className="bg-slate-900">
              <CommandGroup>
                {filteredSubSkills.length === 0 ? (
                  <CommandEmpty className="text-right text-slate-200">לא נמצאו תוצאות</CommandEmpty>
                ) : (
                  filteredSubSkills.map((subSkill) => (
                    subSkill && (
                      <CommandItem
                        key={subSkill}
                        value={subSkill}
                        onSelect={(currentValue) => {
                          onSubSkillSelect(currentValue);
                          setOpen(false);
                          setSearchValue("");
                        }}
                        className="text-right text-slate-200 hover:bg-slate-800"
                        disabled={selectedSubSkills.some(s => s.name === subSkill)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            selectedSubSkills.some(s => s.name === subSkill) ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {subSkill}
                      </CommandItem>
                    )
                  ))
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

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