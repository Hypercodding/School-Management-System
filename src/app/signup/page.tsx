"use client";

import { useContext } from "react";
import { SignupContext } from "../../context/SignupContext";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import FormStepper from "@/components/FormStepper";

function Page() {
  const signupCtx = useContext(SignupContext);
  if (!signupCtx) throw new Error("SignupContext Error");

  // ✅ Extract `step`, `setStep`, and `formData` from context
  const { step, setStep, formData } = signupCtx;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg sm:p-8">
        {/* ✅ Now `setStep` and `formData` are available */}
        <FormStepper
          steps={[1, 2, 3]}
          step={step}
          setStep={setStep}
          formData={formData}
          isStepCompleted={(stepNumber, data) => {
            switch (stepNumber) {
              case 1:
                return !!(data.username && data.firstName);
              case 2:
                return !!data.password;
              case 3:
                return !!(data.address?.street && data.address?.city);
              default:
                return false;
            }
          }}
        />
        <div className="mt-6">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
        </div>
      </div>
    </div>
  );
}

export default Page;
