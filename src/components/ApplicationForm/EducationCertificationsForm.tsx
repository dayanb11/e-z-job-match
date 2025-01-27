import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Education {
  education: string;
  certifications: string;
  institution: string;
  additionalInfo: string;
}

interface EducationCertificationsFormProps {
  onSubmit: () => void;
  onBack: () => void;
  formData: any;
  setFormData: (data: any) => void;
}

const academicDegrees = [
  { value: "ba", label: "תואר ראשון" },
  { value: "ma", label: "תואר שני" },
  { value: "phd", label: "דוקטורט" },
  { value: "diploma", label: "תעודה" },
  { value: "other", label: "אחר" },
];

const academicInstitutions = [
  { value: "tau", label: "אוניברסיטת תל אביב" },
  { value: "huji", label: "האוניברסיטה העברית בירושלים" },
  { value: "bgu", label: "אוניברסיטת בן-גוריון בנגב" },
  { value: "technion", label: "הטכניון - מכון טכנולוגי לישראל" },
  { value: "haifa", label: "אוניברסיטת חיפה" },
  { value: "biu", label: "אוניברסיטת בר-אילן" },
  { value: "weizmann", label: "מכון ויצמן למדע" },
  { value: "openu", label: "האוניברסיטה הפתוחה" },
  { value: "idc", label: "המרכז הבינתחומי הרצליה" },
  { value: "colman", label: "המכללה למנהל" },
  { value: "sapir", label: "מכללת ספיר" },
  { value: "ruppin", label: "המרכז האקדמי רופין" },
  { value: "mta", label: "המכללה האקדמית של תל-אביב-יפו" },
  { value: "other", label: "אחר" },
];

export const EducationCertificationsForm = ({
  onSubmit,
  onBack,
  formData,
  setFormData,
}: EducationCertificationsFormProps) => {
  const [searchValues, setSearchValues] = React.useState<{ [key: number]: string }>({});
  const [openInstitutions, setOpenInstitutions] = React.useState<{ [key: number]: boolean }>({});

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

  const getFilteredInstitutions = (index: number) => {
    const searchValue = searchValues[index] || '';
    return academicInstitutions.filter((institution) => {
      if (!searchValue) return true;
      return institution.label.toLowerCase().includes(searchValue.toLowerCase());
    });
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
          <div key={index} className="space-y-4 relative border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">השכלה {index + 1}</h3>
              {index > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeEducation(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`education-${index}`}>השכלה אקדמית</Label>
              <Select
                value={edu.education}
                onValueChange={(value) => handleChange(index, "education", value)}
              >
                <SelectTrigger className="w-full rtl text-right">
                  <SelectValue placeholder="בחר תואר" />
                </SelectTrigger>
                <SelectContent>
                  {academicDegrees.map((degree) => (
                    <SelectItem
                      key={degree.value}
                      value={degree.value}
                      className="text-right"
                    >
                      {degree.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`certifications-${index}`}>שם התואר</Label>
              <Textarea
                id={`certifications-${index}`}
                value={edu.certifications}
                onChange={(e) => handleChange(index, "certifications", e.target.value)}
                className="min-h-[100px] rtl"
                dir="rtl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`institution-${index}`}>מוסד לימודים</Label>
              <Popover 
                open={openInstitutions[index]} 
                onOpenChange={(open) => setOpenInstitutions({ ...openInstitutions, [index]: open })}
              >
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openInstitutions[index]}
                    className="w-full justify-between text-right"
                    disabled={academicInstitutions.length === 0}
                  >
                    {edu.institution ? 
                      academicInstitutions.find((institution) => institution.value === edu.institution)?.label 
                      : academicInstitutions.length === 0 ? "ערך חסר-פנה למנהלן המערכת להוספה" : "בחר מוסד לימודים"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command dir="rtl" className="bg-slate-900">
                    <CommandInput 
                      placeholder="חפש מוסד לימודים..." 
                      value={searchValues[index] || ''}
                      onValueChange={(value) => setSearchValues({ ...searchValues, [index]: value })}
                      className="text-right bg-slate-800"
                    />
                    <CommandList className="bg-slate-900">
                      <CommandGroup>
                        {getFilteredInstitutions(index).length === 0 ? (
                          <CommandEmpty className="text-right text-slate-200">לא נמצאו תוצאות</CommandEmpty>
                        ) : (
                          getFilteredInstitutions(index).map((institution) => (
                            <CommandItem
                              key={institution.value}
                              value={institution.value}
                              onSelect={(value) => {
                                handleChange(index, "institution", value);
                                setOpenInstitutions({ ...openInstitutions, [index]: false });
                                setSearchValues({ ...searchValues, [index]: '' });
                              }}
                              className="text-right text-slate-200 hover:bg-slate-800"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  edu.institution === institution.value ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {institution.label}
                            </CommandItem>
                          ))
                        )}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`additionalInfo-${index}`}>מידע נוסף</Label>
              <Textarea
                id={`additionalInfo-${index}`}
                value={edu.additionalInfo}
                onChange={(e) => handleChange(index, "additionalInfo", e.target.value)}
                className="min-h-[100px] rtl"
                dir="rtl"
              />
            </div>
          </div>
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
