import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { industriesData } from "@/data/skillsData";

interface IndustrySelectProps {
  selectedIndustry: string;
  onIndustryChange: (value: string) => void;
}

export const IndustrySelect = ({
  selectedIndustry,
  onIndustryChange,
}: IndustrySelectProps) => {
  return (
    <div className="space-y-2">
      <Label>תעשייה</Label>
      <Select value={selectedIndustry} onValueChange={onIndustryChange}>
        <SelectTrigger>
          <SelectValue placeholder="בחר תעשייה" />
        </SelectTrigger>
        <SelectContent>
          {industriesData.map((industry) => (
            <SelectItem key={industry.name} value={industry.name}>
              {industry.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};