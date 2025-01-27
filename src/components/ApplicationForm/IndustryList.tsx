import { CommandEmpty, CommandGroup } from "@/components/ui/command";
import { Industry } from "@/types/industry";
import { IndustryListItem } from "./IndustryListItem";

interface IndustryListProps {
  industries: Industry[];
  selectedIndustry: string;
  onSelect: (value: string) => void;
}

export const IndustryList = ({ industries, selectedIndustry, onSelect }: IndustryListProps) => {
  // Ensure industries is always an array
  const safeIndustries = Array.isArray(industries) ? industries : [];
  
  if (!safeIndustries?.length) {
    return <CommandEmpty className="text-right">לא נמצאו תוצאות</CommandEmpty>;
  }

  return (
    <CommandGroup className="max-h-[300px] overflow-auto">
      {safeIndustries.map((industry) => (
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
  );
};