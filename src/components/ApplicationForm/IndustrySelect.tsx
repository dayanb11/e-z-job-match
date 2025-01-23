import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { industriesData } from "@/data/skillsData";

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

  // Filter industries based on search, with proper null checks
  const filteredIndustries = industries.filter((industry) => {
    if (!searchValue || !industry?.name) return true;
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
          <Command>
            <CommandInput 
              placeholder="חפש תעשייה..." 
              value={searchValue}
              onValueChange={setSearchValue}
              className="text-right"
            />
            <CommandEmpty className="text-right">לא נמצאו תוצאות</CommandEmpty>
            <CommandGroup className="max-h-[200px] overflow-y-auto">
              {filteredIndustries.length > 0 ? (
                filteredIndustries.map((industry) => (
                  <CommandItem
                    key={industry.name}
                    value={industry.name}
                    onSelect={(currentValue) => {
                      onIndustryChange(currentValue);
                      setOpen(false);
                      setSearchValue("");
                    }}
                    className="text-right"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedIndustry === industry.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {industry.name}
                  </CommandItem>
                ))
              ) : (
                <CommandItem value="" className="text-right text-muted-foreground">
                  אין תעשיות זמינות
                </CommandItem>
              )}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};