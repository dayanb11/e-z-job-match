import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Application } from "@/types/application";

interface PersonalDetailsFormProps {
  onNext: () => void;
  formData: Partial<Application>;
  setFormData: (data: Partial<Application>) => void;
}

export const PersonalDetailsForm = ({ onNext, formData, setFormData }: PersonalDetailsFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      personalDetails: {
        ...formData.personalDetails,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Card className="p-6 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">שם מלא</Label>
          <Input
            id="fullName"
            name="fullName"
            required
            value={formData.personalDetails?.fullName || ""}
            onChange={handleChange}
            className="rtl"
            dir="rtl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">דוא״ל</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.personalDetails?.email || ""}
            onChange={handleChange}
            className="rtl"
            dir="rtl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">טלפון</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.personalDetails?.phone || ""}
            onChange={handleChange}
            className="rtl"
            dir="rtl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">מיקום</Label>
          <Input
            id="location"
            name="location"
            required
            value={formData.personalDetails?.location || ""}
            onChange={handleChange}
            className="rtl"
            dir="rtl"
          />
        </div>

        <Button type="submit" className="w-full">
          המשך
        </Button>
      </form>
    </Card>
  );
};