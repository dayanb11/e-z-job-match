import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Education } from "@/types/application";
import { EducationEntry } from "./EducationForm/EducationEntry";

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

  const handleChange = (index: number, field: keyof Education, value: string) => {
    const updatedEducations = [...(formData.educations || [])];
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    };
    setFormData({ ...formData, educations: updatedEducations });
  };

  const addEducation = () => {
    const newEducation = {
      education: "",
      certifications: "",
      institution: "",
      additionalInfo: "",
    };
    setFormData({
      ...formData,
      educations: [...(formData.educations || []), newEducation],
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducations = [...(formData.educations || [])];
    updatedEducations.splice(index, 1);
    setFormData({ ...formData, educations: updatedEducations });
  };

  React.useEffect(() => {
    if (!formData.educations || !formData.educations.length) {
      setFormData({
        ...formData,
        educations: [
          {
            education: "",
            certifications: "",
            institution: "",
            additionalInfo: "",
          },
        ],
      });
    }
  }, []);

  return (
    <Card className="p-6 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {(formData.educations || []).map((edu: Education, index: number) => (
          <EducationEntry
            key={index}
            education={edu}
            index={index}
            onRemove={removeEducation}
            onChange={handleChange}
            isRemovable={index > 0}
          />
        ))}

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={addEducation}
        >
          <Plus className="ml-2" />
          הוסף השכלה
        </Button>

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