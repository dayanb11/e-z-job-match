import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { InstitutionSelect } from "./InstitutionSelect";
import { DegreeSelect } from "./DegreeSelect";
import { Education } from "@/types/application";

interface EducationEntryProps {
  education: Education;
  index: number;
  onRemove: (index: number) => void;
  onChange: (index: number, field: keyof Education, value: string) => void;
  isRemovable: boolean;
}

export const EducationEntry = ({
  education,
  index,
  onRemove,
  onChange,
  isRemovable,
}: EducationEntryProps) => {
  return (
    <div className="space-y-4 relative border rounded-lg p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">השכלה {index + 1}</h3>
        {isRemovable && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onRemove(index)}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <DegreeSelect
        value={education.education}
        onChange={(value) => onChange(index, "education", value)}
      />

      <div className="space-y-2">
        <Label htmlFor={`certifications-${index}`}>שם התואר</Label>
        <Textarea
          id={`certifications-${index}`}
          value={education.certifications}
          onChange={(e) => onChange(index, "certifications", e.target.value)}
          className="min-h-[100px] rtl"
          dir="rtl"
        />
      </div>

      <InstitutionSelect
        value={education.institution}
        onChange={(value) => onChange(index, "institution", value)}
        index={index}
      />

      <div className="space-y-2">
        <Label htmlFor={`additionalInfo-${index}`}>מידע נוסף</Label>
        <Textarea
          id={`additionalInfo-${index}`}
          value={education.additionalInfo}
          onChange={(e) => onChange(index, "additionalInfo", e.target.value)}
          className="min-h-[100px] rtl"
          dir="rtl"
        />
      </div>
    </div>
  );
};