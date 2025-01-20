import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EducationCertificationsFormProps {
  onSubmit: () => void;
  onBack: () => void;
  formData: any;
  setFormData: (data: any) => void;
}

const academicDegrees = [
  { value: "ba", label: "תואר ראשון" },
  { value: "ma", label: "תואר שני" },
  { value: "phd", label: "דוקטורט" },
  { value: "diploma", label: "תעודה" },
  { value: "other", label: "אחר" },
];

export const EducationCertificationsForm = ({
  onSubmit,
  onBack,
  formData,
  setFormData,
}: EducationCertificationsFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDegreeChange = (value: string) => {
    setFormData({ ...formData, education: value });
  };

  return (
    <Card className="p-6 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="education">השכלה אקדמית</Label>
          <Select
            value={formData.education || ""}
            onValueChange={handleDegreeChange}
          >
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

        <div className="space-y-2">
          <Label htmlFor="certifications">תעודות והסמכות</Label>
          <Textarea
            id="certifications"
            name="certifications"
            value={formData.certifications || ""}
            onChange={handleChange}
            className="min-h-[100px] rtl"
            dir="rtl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="additionalInfo">מידע נוסף</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo || ""}
            onChange={handleChange}
            className="min-h-[100px] rtl"
            dir="rtl"
          />
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            חזור
          </Button>
          <Button type="submit" className="flex-1">
            שלח
          </Button>
        </div>
      </form>
    </Card>
  );
};