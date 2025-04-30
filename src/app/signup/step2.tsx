"use client";

import { useContext } from "react";
import { SignupContext } from "../../context/SignupContext";
import { useFormik } from "formik";
import { step2Validation } from "../../utils/validations";

function Step2() {
  const signupCtx = useContext(SignupContext);
  if (!signupCtx)
    throw new Error("SignupContext must be used within SignupProvider");

  const { formData, setFormData, setStep } = signupCtx;

  const formik = useFormik({
    initialValues: {
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      role: formData.role,
    },
    validationSchema: step2Validation,
    onSubmit: (values) => {
      setFormData({ ...formData, ...values });
      console.log("form submitted with values", values);

      setStep(3); // Move to Step 3
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
            <label className="block text-sm font-medium ml-2">Password</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Password"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className="w-full p-2 rounded-lg bg-gray-200"
              placeholder="Confirm Password"
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              name="role"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
              className="w-full p-2 rounded-lg bg-gray-200"
            >
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="staff">Staff</option>
            </select>
            {formik.touched.role && formik.errors.role && (
              <p className="text-red-500 text-sm">{formik.errors.role}</p>
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
