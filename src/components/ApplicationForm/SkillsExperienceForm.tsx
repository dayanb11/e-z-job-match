import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { industriesData } from "@/data/industries";
import { IndustrySelect } from "./IndustrySelect";
import { RoleEntry } from "./RoleEntry";

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
      selectedSkills: [] as { name: string; level: number }[],
      selectedSubSkills: [] as { name: string; level: number }[],
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

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value);
    setRoleEntries([
      {
        id: 0,
        selectedRole: "",
        selectedSkills: [],
        selectedSubSkills: [],
      },
    ]);
  };

  const handleAddRole = () => {
    if (selectedIndustry) {
      setRoleEntries([
        ...roleEntries,
        {
          id: roleEntries.length,
          selectedRole: "",
          selectedSkills: [],
          selectedSubSkills: [],
        },
      ]);
    }
  };

  const selectedIndustryData = industriesData.find(
    (ind) => ind.name === selectedIndustry
  );

  return (
    <Card className="p-6 w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <IndustrySelect
          selectedIndustry={selectedIndustry}
          onIndustryChange={handleIndustryChange}
        />

        {selectedIndustry && (
          <div className="space-y-6">
            {roleEntries.map((entry, index) => (
              <RoleEntry
                key={entry.id}
                index={index}
                entry={entry}
                availableRoles={selectedIndustryData?.roles || []}
                isRemovable={index > 0}
                onRoleSelect={(value) => {
                  const updatedEntries = [...roleEntries];
                  updatedEntries[index] = {
                    ...updatedEntries[index],
                    selectedRole: value,
                    selectedSkills: [],
                    selectedSubSkills: [],
                  };
                  setRoleEntries(updatedEntries);
                }}
                onSkillSelect={(skill) => {
                  const updatedEntries = [...roleEntries];
                  if (!updatedEntries[index].selectedSkills.some(s => s.name === skill)) {
                    updatedEntries[index] = {
                      ...updatedEntries[index],
                      selectedSkills: [
                        ...updatedEntries[index].selectedSkills,
                        { name: skill, level: 50 }, // Default level
                      ],
                    };
                    setRoleEntries(updatedEntries);
                  }
                }}
                onSubSkillSelect={(subSkill) => {
                  const updatedEntries = [...roleEntries];
                  if (!updatedEntries[index].selectedSubSkills.some(s => s.name === subSkill)) {
                    updatedEntries[index] = {
                      ...updatedEntries[index],
                      selectedSubSkills: [
                        ...updatedEntries[index].selectedSubSkills,
                        { name: subSkill, level: 50 }, // Default level
                      ],
                    };
                    setRoleEntries(updatedEntries);
                  }
                }}
                onRemoveSkill={(skill) => {
                  const updatedEntries = [...roleEntries];
                  updatedEntries[index] = {
                    ...updatedEntries[index],
                    selectedSkills: updatedEntries[index].selectedSkills.filter(
                      (s) => s.name !== skill
                    ),
                    selectedSubSkills: [], // Clear subskills when removing a skill
                  };
                  setRoleEntries(updatedEntries);
                }}
                onRemoveSubSkill={(subSkill) => {
                  const updatedEntries = [...roleEntries];
                  updatedEntries[index] = {
                    ...updatedEntries[index],
                    selectedSubSkills: updatedEntries[index].selectedSubSkills.filter(
                      (ss) => ss.name !== subSkill
                    ),
                  };
                  setRoleEntries(updatedEntries);
                }}
                onRemoveRole={() => {
                  setRoleEntries(roleEntries.filter((_, i) => i !== index));
                }}
                onSkillLevelChange={(skillName, level) => {
                  const updatedEntries = [...roleEntries];
                  updatedEntries[index] = {
                    ...updatedEntries[index],
                    selectedSkills: updatedEntries[index].selectedSkills.map(
                      (skill) =>
                        skill.name === skillName
                          ? { ...skill, level }
                          : skill
                    ),
                  };
                  setRoleEntries(updatedEntries);
                }}
                onSubSkillLevelChange={(subSkillName, level) => {
                  const updatedEntries = [...roleEntries];
                  updatedEntries[index] = {
                    ...updatedEntries[index],
                    selectedSubSkills: updatedEntries[index].selectedSubSkills.map(
                      (subSkill) =>
                        subSkill.name === subSkillName
                          ? { ...subSkill, level }
                          : subSkill
                    ),
                  };
                  setRoleEntries(updatedEntries);
                }}
              />
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={handleAddRole}
              className="w-full"
            >
              הוסף תפקיד
            </Button>
          </div>
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