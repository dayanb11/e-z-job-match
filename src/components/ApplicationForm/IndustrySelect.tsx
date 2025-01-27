import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { industriesData } from '@/data/industries';
import { IndustryList } from "./IndustryList";
import { IndustrySearch } from "./IndustrySearch";

interface IndustrySelectProps {
  selectedIndustry: string;
  onIndustryChange: (value: string) => void;
}

export const IndustrySelect = ({
  selectedIndustry,
  onIndustryChange,
}: IndustrySelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Ensure we have a valid array to work with
  const industries = Array.isArray(industriesData) ? industriesData : [];
  
  // Filter industries based on search value
  const filteredIndustries = industries.filter((industry) => {
    if (!industry?.name || !searchValue) return true;
    return industry.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const displayValue = selectedIndustry || (industries.length === 0 ? "ערך חסר-פנה למנהלן המערכת להוספה" : "בחר תעשייה");

  return (
    <div className="space-y-2">
      <Label>תעשייה</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-right"
            disabled={industries.length === 0}
          >
            {displayValue}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command dir="rtl" className="bg-slate-900">
            <IndustrySearch 
              value={searchValue}
              onChange={setSearchValue}
              className="bg-slate-800"
            />
            <CommandList className="bg-slate-900">
              <CommandGroup>
                {filteredIndustries.length === 0 ? (
                  <CommandEmpty className="text-right text-slate-200">לא נמצאו תוצאות</CommandEmpty>
                ) : (
                  <IndustryList 
                    industries={filteredIndustries}
                    selectedIndustry={selectedIndustry}
                    onSelect={onIndustryChange}
                  />
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};