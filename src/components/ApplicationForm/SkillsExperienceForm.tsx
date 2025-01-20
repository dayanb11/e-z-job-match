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

interface RoleData {
  role: string;
  skills: string[];
  subSkills: string[];
}

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
  const [roleEntries, setRoleEntries] = useState([
    {
      id: 0,
      selectedRole: "",
      selectedSkills: [] as string[],
      selectedSubSkills: [] as string[],
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validRoles = roleEntries
      .filter((entry) => entry.selectedRole && entry.selectedSkills.length > 0)
      .map((entry) => ({
        role: entry.selectedRole,
        skills: entry.selectedSkills,
        subSkills: entry.selectedSubSkills,
      }));

    if (validRoles.length > 0) {
      setFormData({
        ...formData,
        industry: selectedIndustry,
        roles: validRoles,
      });
      onNext();
    }
  };

  const handleAddRole = () => {
    setRoleEntries([
      ...roleEntries,
      {
        id: roleEntries.length,
        selectedRole: "",
        selectedSkills: [],
        selectedSubSkills: [],
      },
    ]);
  };

  const handleRoleSelect = (value: string, index: number) => {
    const updatedEntries = [...roleEntries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      selectedRole: value,
      selectedSkills: [],
      selectedSubSkills: [],
    };
    setRoleEntries(updatedEntries);
  };

  const handleSkillSelect = (skill: string, index: number) => {
    const updatedEntries = [...roleEntries];
    if (!updatedEntries[index].selectedSkills.includes(skill)) {
      updatedEntries[index] = {
        ...updatedEntries[index],
        selectedSkills: [...updatedEntries[index].selectedSkills, skill],
      };
      setRoleEntries(updatedEntries);
    }
  };

  const handleSubSkillSelect = (subSkill: string, index: number) => {
    const updatedEntries = [...roleEntries];
    if (!updatedEntries[index].selectedSubSkills.includes(subSkill)) {
      updatedEntries[index] = {
        ...updatedEntries[index],
        selectedSubSkills: [...updatedEntries[index].selectedSubSkills, subSkill],
      };
      setRoleEntries(updatedEntries);
    }
  };

  const handleRemoveSkill = (skill: string, index: number) => {
    const updatedEntries = [...roleEntries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      selectedSkills: updatedEntries[index].selectedSkills.filter(
        (s) => s !== skill
      ),
    };
    setRoleEntries(updatedEntries);
  };

  const handleRemoveSubSkill = (subSkill: string, index: number) => {
    const updatedEntries = [...roleEntries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      selectedSubSkills: updatedEntries[index].selectedSubSkills.filter(
        (ss) => ss !== subSkill
      ),
    };
    setRoleEntries(updatedEntries);
  };

  const handleRemoveRole = (indexToRemove: number) => {
    setRoleEntries(roleEntries.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Card className="p-6 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <div className="space-y-2">
          <Label>תעשייה</Label>
          <Select
            value={selectedIndustry}
            onValueChange={(value) => {
              setSelectedIndustry(value);
              setRoleEntries([
                {
                  id: 0,
                  selectedRole: "",
                  selectedSkills: [],
                  selectedSubSkills: [],
                },
              ]);
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

        {selectedIndustry &&
          roleEntries.map((entry, index) => {
            const selectedIndustryData = industriesData.find(
              (ind) => ind.name === selectedIndustry
            );
            const selectedRoleData = selectedIndustryData?.roles.find(
              (role) => role.title === entry.selectedRole
            );

            const availableSubSkills = entry.selectedSkills
              .map((skillName) => {
                const skill = selectedRoleData?.skills.find(
                  (s) => s.name === skillName
                );
                return skill?.subSkills || [];
              })
              .flat();

            return (
              <div key={entry.id} className="space-y-4 border p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">תפקיד {index + 1}</h3>
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveRole(index)}
                    >
                      הסר תפקיד
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>תפקיד</Label>
                  <Select
                    value={entry.selectedRole}
                    onValueChange={(value) => handleRoleSelect(value, index)}
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

                {entry.selectedRole && (
                  <>
                    <div className="space-y-2">
                      <Label>כישורים</Label>
                      <Select
                        value=""
                        onValueChange={(value) => handleSkillSelect(value, index)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="בחר כישור" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedRoleData?.skills.map((skill) => (
                            <SelectItem
                              key={skill.name}
                              value={skill.name}
                              disabled={entry.selectedSkills.includes(skill.name)}
                            >
                              {skill.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      {entry.selectedSkills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {entry.selectedSkills.map((skillName) => (
                            <Badge
                              key={skillName}
                              variant="secondary"
                              className="text-sm"
                            >
                              {skillName}
                              <button
                                type="button"
                                className="mr-2 hover:text-destructive"
                                onClick={() => handleRemoveSkill(skillName, index)}
                              >
                                ✕
                              </button>
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {availableSubSkills.length > 0 && (
                      <div className="space-y-2">
                        <Label>כישורי משנה</Label>
                        <Select
                          value=""
                          onValueChange={(value) =>
                            handleSubSkillSelect(value, index)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="בחר כישור משנה" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableSubSkills.map((subSkill) => (
                              <SelectItem
                                key={subSkill}
                                value={subSkill}
                                disabled={entry.selectedSubSkills.includes(
                                  subSkill
                                )}
                              >
                                {subSkill}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {entry.selectedSubSkills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {entry.selectedSubSkills.map((subSkill) => (
                              <Badge
                                key={subSkill}
                                variant="outline"
                                className="text-sm"
                              >
                                {subSkill}
                                <button
                                  type="button"
                                  className="mr-2 hover:text-destructive"
                                  onClick={() =>
                                    handleRemoveSubSkill(subSkill, index)
                                  }
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
              </div>
            );
          })}

        {selectedIndustry && (
          <Button
            type="button"
            variant="outline"
            onClick={handleAddRole}
            className="w-full"
          >
            הוסף תפקיד
          </Button>
        )}

        <div className="flex gap-4">
          <Button type="button" variant="outline" onClick={onBack} className="flex-1">
            חזור
          </Button>
          <Button
            type="submit"
            className="flex-1"
            disabled={!selectedIndustry || roleEntries.length === 0}
          >
            המשך
          </Button>
        </div>
      </form>
    </Card>
  );
};