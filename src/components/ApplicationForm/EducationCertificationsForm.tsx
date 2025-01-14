import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface EducationCertificationsFormProps {
  onSubmit: () => void;
  onBack: () => void;
  formData: any;
  setFormData: (data: any) => void;
}

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Card className="p-6 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="education">השכלה אקדמית</Label>
          <Textarea
            id="education"
            name="education"
            required
            value={formData.education || ""}
            onChange={handleChange}
            className="min-h-[100px] rtl"
            dir="rtl"
          />
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