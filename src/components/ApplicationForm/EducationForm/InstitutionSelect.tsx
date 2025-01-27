import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const academicInstitutions = [
  { value: "tau", label: "אוניברסיטת תל אביב" },
  { value: "huji", label: "האוניברסיטה העברית בירושלים" },
  { value: "bgu", label: "אוניברסיטת בן-גוריון בנגב" },
  { value: "technion", label: "הטכניון - מכון טכנולוגי לישראל" },
  { value: "haifa", label: "אוניברסיטת חיפה" },
  { value: "biu", label: "אוניברסיטת בר-אילן" },
  { value: "weizmann", label: "מכון ויצמן למדע" },
  { value: "openu", label: "האוניברסיטה הפתוחה" },
  { value: "idc", label: "המרכז הבינתחומי הרצליה" },
  { value: "colman", label: "המכללה למנהל" },
  { value: "sapir", label: "מכללת ספיר" },
  { value: "ruppin", label: "המרכז האקדמי רופין" },
  { value: "mta", label: "המכללה האקדמית של תל-אביב-יפו" },
  { value: "other", label: "אחר" },
];

interface InstitutionSelectProps {
  value: string;
  onChange: (value: string) => void;
  index: number;
}

export const InstitutionSelect = ({ value, onChange, index }: InstitutionSelectProps) => {
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const filteredInstitutions = React.useMemo(() => {
    return academicInstitutions.filter((institution) => {
      if (!searchValue) return true;
      return institution.label.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue]);

  return (
    <div className="space-y-2">
      <Label>מוסד לימודים</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-right"
            disabled={academicInstitutions.length === 0}
          >
            {value ? 
              academicInstitutions.find((institution) => institution.value === value)?.label 
              : academicInstitutions.length === 0 ? "ערך חסר-פנה למנהלן המערכת להוספה" : "בחר מוסד לימודים"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command dir="rtl" className="bg-slate-900">
            <CommandInput 
              placeholder="חפש מוסד לימודים..." 
              value={searchValue}
              onValueChange={setSearchValue}
              className="text-right bg-slate-800"
            />
            <CommandList className="bg-slate-900">
              <CommandGroup>
                {filteredInstitutions.length === 0 ? (
                  <CommandEmpty className="text-right text-slate-200">לא נמצאו תוצאות</CommandEmpty>
                ) : (
                  filteredInstitutions.map((institution) => (
                    <CommandItem
                      key={institution.value}
                      value={institution.value}
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
                          value === institution.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {institution.label}
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