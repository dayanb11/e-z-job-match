import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface SkillsExperienceFormProps {
  onNext: () => void;
  onBack: () => void;
  formData: any;
  setFormData: (data: any) => void;
}

export const SkillsExperienceForm = ({
  onNext,
  onBack,
  formData,
  setFormData,
}: SkillsExperienceFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
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
          <Label htmlFor="skills">כישורים מקצועיים</Label>
          <Textarea
            id="skills"
            name="skills"
            required
            value={formData.skills || ""}
            onChange={handleChange}
            className="min-h-[100px] rtl"
            dir="rtl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience">ניסיון תעסוקתי</Label>
          <Textarea
            id="experience"
            name="experience"
            required
            value={formData.experience || ""}
            onChange={handleChange}
            className="min-h-[100px] rtl"
            dir="rtl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="languages">שפות</Label>
          <Input
            id="languages"
            name="languages"
            required
            value={formData.languages || ""}
            onChange={handleChange}
            className="rtl"
            dir="rtl"
          />
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            חזור
          </Button>
          <Button type="submit" className="flex-1">
            המשך
          </Button>
        </div>
      </form>
    </Card>
  );
};