import { Check } from "lucide-react";
import { CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Industry } from "@/types/industry";

interface IndustryListItemProps {
  industry: Industry;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

export const IndustryListItem = ({ industry, isSelected, onSelect }: IndustryListItemProps) => (
  <CommandItem
    key={industry.name}
    value={industry.name}
    onSelect={onSelect}
    className="text-right text-slate-200 hover:bg-slate-800"
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