import { Check } from "lucide-react";
import { CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Industry } from "@/types/industry";

interface IndustryListItemProps {
  industry: Industry;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

const IndustryListItem = ({ industry, isSelected, onSelect }: IndustryListItemProps) => (
  <CommandItem
    key={industry.name}
    value={industry.name}
    onSelect={onSelect}
    className="text-right"
  >
    <Check
      className={cn(
        "mr-2 h-4 w-4",
        isSelected ? "opacity-100" : "opacity-0"
      )}
    />
    {industry.name}
  </CommandItem>
);

interface IndustryListProps {
  industries: Industry[];
  selectedIndustry: string;
  onSelect: (value: string) => void;
}

export const IndustryList = ({ industries, selectedIndustry, onSelect }: IndustryListProps) => (
  <>
    <CommandEmpty className="text-right">לא נמצאו תוצאות</CommandEmpty>
    <CommandGroup className="max-h-[300px] overflow-auto">
      {industries.map((industry) => (
        industry?.name ? (
          <IndustryListItem
            key={industry.name}
            industry={industry}
            isSelected={selectedIndustry === industry.name}
            onSelect={onSelect}
          />
        ) : null
      ))}
    </CommandGroup>
  </>
);