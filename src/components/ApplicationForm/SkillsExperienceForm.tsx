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
  const [selectedSubSkills, setSelectedSubSkills] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      ...formData,
      industry: selectedIndustry,
      role: selectedRole,
      skills: selectedSkills,
      subSkills: selectedSubSkills,
    });
    onNext();
  };

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill);
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubSkillSelect = (subSkill: string) => {
    if (!selectedSubSkills.includes(subSkill)) {
      setSelectedSubSkills([...selectedSubSkills, subSkill]);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    if (selectedSkill === skill) {
      setSelectedSkill("");
    }
    // Remove associated subskills when removing a skill
    const skillData = selectedRoleData?.skills.find((s) => s.name === skill);
    if (skillData?.subSkills) {
      setSelectedSubSkills(selectedSubSkills.filter(
        (ss) => !skillData.subSkills?.includes(ss)
      ));
    }
  };

  const handleRemoveSubSkill = (subSkill: string) => {
    setSelectedSubSkills(selectedSubSkills.filter((ss) => ss !== subSkill));
  };

  const selectedIndustryData = industriesData.find(
    (ind) => ind.name === selectedIndustry
  );
  const selectedRoleData = selectedIndustryData?.roles.find(
    (role) => role.title === selectedRole
  );

  // Get all available subskills from selected skills
  const availableSubSkills = selectedSkills
    .map((skillName) => {
      const skill = selectedRoleData?.skills.find((s) => s.name === skillName);
      return skill?.subSkills || [];
    })
    .flat();

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
              setSelectedSubSkills([]);
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
                setSelectedSubSkills([]);
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
                  {selectedSkills.map((skillName) => (
                    <Badge 
                      key={skillName} 
                      variant="secondary" 
                      className="text-sm"
                    >
                      {skillName}
                      <button
                        type="button"
                        className="mr-2 hover:text-destructive"
                        onClick={() => handleRemoveSkill(skillName)}
                      >
                        ✕
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {availableSubSkills.length > 0 && (
              <div className="space-y-2">
                <Label>כישורי משנה</Label>
                <Select
                  value=""
                  onValueChange={handleSubSkillSelect}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="בחר כישור משנה" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSubSkills.map((subSkill) => (
                      <SelectItem
                        key={subSkill}
                        value={subSkill}
                        disabled={selectedSubSkills.includes(subSkill)}
                      >
                        {subSkill}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedSubSkills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedSubSkills.map((subSkill) => (
                      <Badge
                        key={subSkill}
                        variant="outline"
                        className="text-sm"
                      >
                        {subSkill}
                        <button
                          type="button"
                          className="mr-2 hover:text-destructive"
                          onClick={() => handleRemoveSubSkill(subSkill)}
                        >
                          ✕
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
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