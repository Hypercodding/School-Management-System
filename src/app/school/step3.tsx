"use client";

import React, { useContext } from "react";
import { useFormik } from "formik";
import { step3Validation } from "../../utils/schoolValidations";
import { SchoolRegistrationContext } from "../../context/SchoolRegistrationContext";

const Step3 = () => {
  const schoolRegistrationCtx = useContext(SchoolRegistrationContext);
  if (!schoolRegistrationCtx)
    throw new Error("Registration Context must be used within Provider");

  const { formData, setFormData, setStep } = schoolRegistrationCtx;
  // const router = useRouter();

  const formik = useFormik({
    initialValues: {
      street: formData.address?.street,
      city: formData.address?.city,
      state: formData.address?.state,
      zipCode: formData.address?.zipCode,
      country: formData.address?.country,
    },
    validationSchema: step3Validation,
    onSubmit: (values) => {
      const updatedFormData = { ...formData, address: values };
      setFormData(updatedFormData);
      console.log("Form submitted with values", values);

      setStep(4);
    },
  });

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Step 3: Address Details
      </h2>
      <div className="w-80">
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Street */}
          <div>
            <label className="block text-sm font-medium">Street</label>
            <input
              type="text"
              name="street"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.street}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="State"
            />
            {formik.touched.street && formik.errors.street && (
              <p className="text-red-500 text-sm">{formik.errors.street}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="City"
            />
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-sm">{formik.errors.city}</p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="State"
            />
            {formik.touched.state && formik.errors.state && (
              <p className="text-red-500 text-sm">{formik.errors.state}</p>
            )}
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zipCode}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Code"
            />
            {formik.touched.zipCode && formik.errors.zipCode && (
              <p className="text-red-500 text-sm">{formik.errors.zipCode}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Country"
            />
            {formik.touched.country && formik.errors.country && (
              <p className="text-red-500 text-sm ">{formik.errors.country}</p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
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
};

export default Step3;
