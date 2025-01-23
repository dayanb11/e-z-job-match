import { CommandInput } from "@/components/ui/command";

interface IndustrySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const IndustrySearch = ({ value, onChange }: IndustrySearchProps) => (
  <CommandInput 
    placeholder="חפש תעשייה..." 
    value={value}
    onValueChange={onChange}
    className="text-right"
  />
);