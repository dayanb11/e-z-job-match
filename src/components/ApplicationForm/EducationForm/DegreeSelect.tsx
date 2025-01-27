import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const academicDegrees = [
  { value: "ba", label: "תואר ראשון" },
  { value: "ma", label: "תואר שני" },
  { value: "phd", label: "דוקטורט" },
  { value: "diploma", label: "תעודה" },
  { value: "other", label: "אחר" },
];

interface DegreeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const DegreeSelect = ({ value, onChange }: DegreeSelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredDegrees = academicDegrees.filter((degree) => {
    if (!searchValue) return true;
    return degree.label.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="space-y-2">
      <Label>השכלה אקדמית</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-right"
            disabled={academicDegrees.length === 0}
          >
            {value ? 
              academicDegrees.find((degree) => degree.value === value)?.label 
              : "בחר תואר"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command dir="rtl" className="bg-slate-900">
            <CommandInput 
              placeholder="חפש תואר..." 
              value={searchValue}
              onValueChange={setSearchValue}
              className="text-right bg-slate-800"
            />
            <CommandList className="bg-slate-900">
              <CommandGroup>
                {filteredDegrees.length === 0 ? (
                  <CommandEmpty className="text-right text-slate-200">לא נמצאו תוצאות</CommandEmpty>
                ) : (
                  filteredDegrees.map((degree) => (
                    <CommandItem
                      key={degree.value}
                      value={degree.value}
                      onSelect={(selectedValue) => {
                        onChange(selectedValue);
                        setOpen(false);
                        setSearchValue("");
                      }}
                      className="text-right text-slate-200 hover:bg-slate-800"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === degree.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {degree.label}
                    </CommandItem>
                  ))
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};