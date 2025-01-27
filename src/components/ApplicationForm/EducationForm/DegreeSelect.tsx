import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const academicDegrees = [
  { value: "ba", label: "תואר ראשון" },
  { value: "ma", label: "תואר שני" },
  { value: "phd", label: "דוקטורט" },
  { value: "diploma", label: "תעודה" },
  { value: "other", label: "אחר" },
];

interface DegreeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const DegreeSelect = ({ value, onChange }: DegreeSelectProps) => {
  return (
    <div className="space-y-2">
      <Label>השכלה אקדמית</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full rtl text-right">
          <SelectValue placeholder="בחר תואר" />
        </SelectTrigger>
        <SelectContent>
          {academicDegrees.map((degree) => (
            <SelectItem
              key={degree.value}
              value={degree.value}
              className="text-right"
            >
              {degree.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};