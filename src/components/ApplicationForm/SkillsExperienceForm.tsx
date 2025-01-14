import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { industriesData } from "@/data/skillsData";
import { Check, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      ...formData,
      industry: selectedIndustry,
      role: selectedRole,
      skills: selectedSkills,
    });
    onNext();
  };

  const handleSkillSelect = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const selectedIndustryData = industriesData.find(
    (ind) => ind.name === selectedIndustry
  );
  const selectedRoleData = selectedIndustryData?.roles.find(
    (role) => role.title === selectedRole
  );

  return (
    <Card className="p-6 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <div className="space-y-2">
          <Label>תעשייה</Label>
          <Select
            value={selectedIndustry}
            onValueChange={setSelectedIndustry}
          >
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

        {selectedIndustry && (
          <div className="space-y-2">
            <Label>תפקיד</Label>
            <Select
              value={selectedRole}
              onValueChange={setSelectedRole}
            >
              <SelectTrigger>
                <SelectValue placeholder="בחר תפקיד" />
              </SelectTrigger>
              <SelectContent>
                {selectedIndustryData?.roles.map((role) => (
                  <SelectItem key={role.title} value={role.title}>
                    {role.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {selectedRole && (
          <div className="space-y-4">
            <Label>כישורים</Label>
            <div className="grid grid-cols-2 gap-4">
              {selectedRoleData?.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <Button
                    type="button"
                    variant={selectedSkills.includes(skill.name) ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleSkillSelect(skill.name)}
                  >
                    {selectedSkills.includes(skill.name) ? (
                      <Check className="mr-2 h-4 w-4" />
                    ) : (
                      <Plus className="mr-2 h-4 w-4" />
                    )}
                    {skill.name}
                  </Button>
                  {skill.subSkills && selectedSkills.includes(skill.name) && (
                    <div className="flex flex-wrap gap-2 pr-4">
                      {skill.subSkills.map((subSkill) => (
                        <Badge key={subSkill} variant="secondary">
                          {subSkill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            חזור
          </Button>
          <Button 
            type="submit" 
            className="flex-1"
            disabled={!selectedIndustry || !selectedRole || selectedSkills.length === 0}
          >
            המשך
          </Button>
        </div>
      </form>
    </Card>
  );
};