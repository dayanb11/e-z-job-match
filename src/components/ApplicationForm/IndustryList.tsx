import { Check } from "lucide-react";
import { CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Industry } from "@/types/industry";

interface IndustryListProps {
  industries: Industry[];
  selectedIndustry: string;
  onSelect: (value: string) => void;
}

export const IndustryList = ({ industries, selectedIndustry, onSelect }: IndustryListProps) => {
  if (!industries.length) {
    return <CommandEmpty className="text-right">לא נמצאו תוצאות</CommandEmpty>;
  }

  return (
    <CommandGroup className="max-h-[300px] overflow-auto">
      {industries.map((industry) => (
        <CommandItem
          key={industry.name}
          value={industry.name}
          onSelect={onSelect}
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
  );
};