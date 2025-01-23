import { CommandEmpty, CommandGroup } from "@/components/ui/command";
import { Industry } from "@/types/industry";
import { IndustryListItem } from "./IndustryListItem";

interface IndustryListProps {
  industries: Industry[];
  selectedIndustry: string;
  onSelect: (value: string) => void;
}

export const IndustryList = ({ industries, selectedIndustry, onSelect }: IndustryListProps) => {
  if (!industries?.length) {
    return <CommandEmpty className="text-right">לא נמצאו תוצאות</CommandEmpty>;
  }

  return (
    <CommandGroup className="max-h-[300px] overflow-auto">
      {industries.map((industry) => (
        <IndustryListItem
          key={industry.name}
          industry={industry}
          isSelected={selectedIndustry === industry.name}
          onSelect={onSelect}
        />
      ))}
    </CommandGroup>
  );
};