import { CommandInput } from "@/components/ui/command";

interface IndustrySearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const IndustrySearch = ({ value, onChange, className }: IndustrySearchProps) => (
  <CommandInput 
    placeholder="חפש תעשייה..." 
    value={value}
    onValueChange={onChange}
    className={`text-right ${className || ''}`}
  />
);