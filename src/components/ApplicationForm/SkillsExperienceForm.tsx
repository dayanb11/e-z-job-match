import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { industriesData } from "@/data/skillsData";
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

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value);
    // Reset all role entries when industry changes
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
                  if (!updatedEntries[index].selectedSkills.includes(skill)) {
                    updatedEntries[index] = {
                      ...updatedEntries[index],
                      selectedSkills: [...updatedEntries[index].selectedSkills, skill],
                    };
                    setRoleEntries(updatedEntries);
                  }
                }}
                onSubSkillSelect={(subSkill) => {
                  const updatedEntries = [...roleEntries];
                  if (!updatedEntries[index].selectedSubSkills.includes(subSkill)) {
                    updatedEntries[index] = {
                      ...updatedEntries[index],
                      selectedSubSkills: [
                        ...updatedEntries[index].selectedSubSkills,
                        subSkill,
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
                      (s) => s !== skill
                    ),
                    // Clear subskills when removing a skill
                    selectedSubSkills: [],
                  };
                  setRoleEntries(updatedEntries);
                }}
                onRemoveSubSkill={(subSkill) => {
                  const updatedEntries = [...roleEntries];
                  updatedEntries[index] = {
                    ...updatedEntries[index],
                    selectedSubSkills: updatedEntries[index].selectedSubSkills.filter(
                      (ss) => ss !== subSkill
                    ),
                  };
                  setRoleEntries(updatedEntries);
                }}
                onRemoveRole={() => {
                  setRoleEntries(roleEntries.filter((_, i) => i !== index));
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