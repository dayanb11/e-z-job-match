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
            {selectedIndustry
              ? industriesData.find((industry) => industry.name === selectedIndustry)?.name
              : "בחר תעשייה"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command dir="rtl">
            <CommandInput placeholder="חפש תעשייה..." />
            <CommandEmpty>לא נמצאו תוצאות</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-auto">
              {industriesData.map((industry) => (
                <CommandItem
                  key={industry.name}
                  value={industry.name}
                  onSelect={(currentValue) => {
                    onIndustryChange(currentValue);
                    setOpen(false);
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
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};