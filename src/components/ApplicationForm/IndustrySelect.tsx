import { Button } from "@/components/ui/button";
import { Command } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { industriesData } from "@/data/skillsData";
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

  // Filter industries based on search value
  const filteredIndustries = industriesData.filter((industry) => {
    if (!searchValue) return true;
    return industry.name.toLowerCase().includes(searchValue.toLowerCase());
  });

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
            <IndustryList 
              industries={filteredIndustries}
              selectedIndustry={selectedIndustry}
              onSelect={(value) => {
                onIndustryChange(value);
                setOpen(false);
                setSearchValue("");
              }}
            />
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};