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
  const [selectedSkill, setSelectedSkill] = useState("");
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
    setSelectedSkill(skill);
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    if (selectedSkill === skill) {
      setSelectedSkill("");
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
            onValueChange={(value) => {
              setSelectedIndustry(value);
              setSelectedRole("");
              setSelectedSkill("");
              setSelectedSkills([]);
            }}
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
              onValueChange={(value) => {
                setSelectedRole(value);
                setSelectedSkill("");
                setSelectedSkills([]);
              }}
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
          <>
            <div className="space-y-2">
              <Label>כישורים</Label>
              <Select
                value={selectedSkill}
                onValueChange={handleSkillSelect}
              >
                <SelectTrigger>
                  <SelectValue placeholder="בחר כישור" />
                </SelectTrigger>
                <SelectContent>
                  {selectedRoleData?.skills.map((skill) => (
                    <SelectItem 
                      key={skill.name} 
                      value={skill.name}
                      disabled={selectedSkills.includes(skill.name)}
                    >
                      {skill.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedSkills.length > 0 && (
              <div className="space-y-2">
                <Label>כישורים נבחרים</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedSkills.map((skillName) => {
                    const skill = selectedRoleData?.skills.find(
                      (s) => s.name === skillName
                    );
                    return (
                      <div key={skillName} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-sm">
                            {skillName}
                            <button
                              type="button"
                              className="ml-2 hover:text-destructive"
                              onClick={() => handleRemoveSkill(skillName)}
                            >
                              ✕
                            </button>
                          </Badge>
                        </div>
                        {skill?.subSkills && (
                          <div className="flex flex-wrap gap-2 pr-4">
                            {skill.subSkills.map((subSkill) => (
                              <Badge key={subSkill} variant="outline">
                                {subSkill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
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