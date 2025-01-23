import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { industriesData } from "@/data/skillsData";
import { IndustryList } from "../Industries/IndustryList";
import { IndustrySearch } from "../Industries/IndustrySearch";
import { Industry } from "@/types/industry";

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

  // Ensure we have a valid array of industries
  const industries = Array.isArray(industriesData) ? industriesData : [];

  // Filter industries based on search
  const filteredIndustries = industries.filter((industry): industry is Industry => {
    if (!searchValue) return true;
    if (!industry?.name) return false;
    return industry.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleSelect = (currentValue: string) => {
    onIndustryChange(currentValue);
    setOpen(false);
    setSearchValue("");
  };

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
          >
            {selectedIndustry || "בחר תעשייה"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command dir="rtl" shouldFilter={false}>
            <IndustrySearch 
              value={searchValue}
              onChange={setSearchValue}
            />
            <CommandEmpty className="text-right">לא נמצאו תוצאות</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto">
              <IndustryList 
                industries={filteredIndustries}
                selectedIndustry={selectedIndustry}
                onSelect={handleSelect}
              />
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};