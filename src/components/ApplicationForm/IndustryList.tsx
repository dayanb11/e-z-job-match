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
  
  return (
    <>
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
    </>
  );
};