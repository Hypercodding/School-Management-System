"use client";
import FormStepper from "@/components/FormStepper";
import { SchoolRegistrationContext } from "../../context/SchoolRegistrationContext";
import { useContext } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

export default function Page() {
  const SchoolRegistrationCtx = useContext(SchoolRegistrationContext);
  if (!SchoolRegistrationCtx) throw new Error("Registration Error");

  const { step, setStep, formData } = SchoolRegistrationCtx;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg sm:p-8">
        <FormStepper
          steps={[1, 2, 3, 4]}
          step={step}
          setStep={setStep}
          formData={formData}
          isStepCompleted={(stepNumber, data) => {
            switch (stepNumber) {
              case 1:
                return !!(data.name && data.principal);
              case 2:
                return !!(data.contactInfo.email && data.contactInfo.phone);
              case 3:
                return !!(data.address?.street && data.address?.city);
              case 4:
                return !!(data.principal && data.logo);
              default:
                return false;
            }
          }}
        />
        <div className="mt-6">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </div>
      </div>
    </div>
  );
}
