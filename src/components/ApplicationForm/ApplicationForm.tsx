import React, { useState, useEffect } from "react";
import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { SkillsExperienceForm } from "./SkillsExperienceForm";
import { EducationCertificationsForm } from "./EducationCertificationsForm";
import { useToast } from "@/components/ui/use-toast";
import { saveApplication, testSupabaseConnection } from "@/lib/supabase";
import { Application } from "@/types/application";

export const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<Application>>({
    personalDetails: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
    },
  });
  const { toast } = useToast();

  useEffect(() => {
    // Test the connection when component mounts
    const testConnection = async () => {
      try {
        await testSupabaseConnection();
        toast({
          title: "בדיקת החיבור הצליחה",
          description: "הנתונים נשמרו בהצלחה",
        });
      } catch (error) {
        console.error('Connection test failed:', error);
        toast({
          title: "שגיאה בבדיקת החיבור",
          description: "אנא בדוק את הקונסול לפרטים נוספים",
          variant: "destructive",
        });
      }
    };

    testConnection();
  }, [toast]);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      console.log('Form data before submission:', formData);
      
      const application = {
        personalDetails: {
          fullName: formData.personalDetails?.fullName || "",
          email: formData.personalDetails?.email || "",
          phone: formData.personalDetails?.phone || "",
          location: formData.personalDetails?.location || "",
        },
        industry: formData.industry || "",
        roles: formData.roles || [],
        educations: formData.educations || [],
      };

      await saveApplication(application);
      
      toast({
        title: "הטופס נשלח בהצלחה",
        description: "הנתונים נשמרו במערכת",
      });
    } catch (error) {
      console.error('Error saving application:', error);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">E.Z Job Match App</h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === step ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {step === 1 && (
          <PersonalDetailsForm
            onNext={handleNext}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <SkillsExperienceForm
            onNext={handleNext}
            onBack={handleBack}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 3 && (
          <EducationCertificationsForm
            onSubmit={handleSubmit}
            onBack={handleBack}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </div>
  );
};
