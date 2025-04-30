"use client";

import { useContext, useState, useEffect } from "react";
import { SchoolRegistrationContext } from "../../context/SchoolRegistrationContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Step4() {
  const schoolRegistrationCtx = useContext(SchoolRegistrationContext);
  if (!schoolRegistrationCtx)
    throw new Error("Registration Context must be used within Provider");

  const { formData, setStep } = schoolRegistrationCtx;

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (logoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(logoFile);
    }
  }, [logoFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }

      // Validate file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setError("File size should be less than 2MB");
        return;
      }

      setLogoFile(file);
      setError(null);
    }
  };

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!logoFile) {
      setError("Please upload a logo before submitting.");
      setLoading(false);
      return;
    }

    const submittedData: Record<string, string> = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (value && typeof value === "object") {
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          if (nestedValue) {
            submittedData[`${key}.${nestedKey}`] = nestedValue.toString();
          }
        });
      } else if (value) {
        submittedData[key] = value.toString();
      }
    });

    submittedData["logo"] = logoFile.name;

    console.log("✅ Final Submitted Data:", submittedData);
    alert(
      "🎉 Registration Completed!\n\n" + JSON.stringify(submittedData, null, 2)
    );
    router.push("/");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Step 4: Upload School Logo
      </h2>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            {logoPreview ? (
              <Image
                src={logoPreview}
                alt="Logo Preview"
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
          </div>

          <label className="cursor-pointer">
            <span className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              {logoFile ? "Change Logo" : "Upload Logo"}
            </span>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
        </div>

        <div className="flex justify-between space-x-4">
          <button
            type="button"
            onClick={() => setStep(3)}
            className="flex-1 bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading || !logoFile}
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Submitting..." : "Complete Registration"}
          </button>
        </div>
      </form>
    </div>
  );
}
