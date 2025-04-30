"use client";

import { useContext } from "react";
import { useFormik } from "formik";
import { step2Validation } from "../../utils/schoolValidations";
import { SchoolRegistrationContext } from "../../context/SchoolRegistrationContext";

function Step2() {
  const schoolRegistrationCtx = useContext(SchoolRegistrationContext);
  if (!schoolRegistrationCtx)
    throw new Error("Registration Context must be used within Provider");

  const { formData, setFormData, setStep } = schoolRegistrationCtx;

  const formik = useFormik({
    initialValues: {
      phone: formData.contactInfo?.phone,
      email: formData.contactInfo?.email,
      website: formData.contactInfo?.website,
    },
    validationSchema: step2Validation,
    onSubmit: (values) => {
      const updatedFormData = { ...formData, contactInfo: values };
      setFormData(updatedFormData);
      console.log("Form submitted with values", values);
      setStep(3);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Step 2: Account Details
      </h2>
      <div className="w-80">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium ml-2">Phone</label>
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Phone Number"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm">{formik.errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">Email</label>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">Website</label>
            <input
              type="text"
              name="website"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.website}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Website"
            />
            {formik.touched.website && formik.errors.website && (
              <p className="text-red-500 text-sm">{formik.errors.website}</p>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Step2;
