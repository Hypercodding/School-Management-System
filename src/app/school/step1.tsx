"use client";

import { useContext } from "react";
import { SchoolRegistrationContext } from "../../context/SchoolRegistrationContext";
import { useFormik } from "formik";
import { step1Validation } from "../../utils/schoolValidations";

export default function Step1() {
  const schoolRegistrationCtx = useContext(SchoolRegistrationContext);
  if (!schoolRegistrationCtx)
    throw new Error("Registration Context must be within the provider");

  const { setStep, formData, setFormData } = schoolRegistrationCtx;

  const formik = useFormik({
    initialValues: {
      name: formData.name,
      description: formData.description,
      moto: formData.moto,
      principal: formData.principal,
    },
    validationSchema: step1Validation,
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      setStep(2);
      console.log("Form submitted with values:", values);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Step 1: School Information
      </h2>
      <div className="w-80">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium ml-2">
              School Name
            </label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="School Name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">
              Description
            </label>
            <textarea
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Write a short description"
            />
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm">
                {formik.errors.description}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">
              School Motto
            </label>
            <input
              type="text"
              name="moto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.moto}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Inspire, Learn, Lead"
            />
            {formik.touched.moto && formik.errors.moto && (
              <p className="text-red-500 text-sm">{formik.errors.moto}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">
              Principal Name
            </label>
            <input
              type="text"
              name="principal"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.principal}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Mr. Hammad"
            />
            {formik.touched.principal && formik.errors.principal && (
              <p className="text-red-500 text-sm">{formik.errors.principal}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-black cursor-pointer disabled:bg-blue-300"
          >
            {formik.isSubmitting ? "Submitting..." : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
}
