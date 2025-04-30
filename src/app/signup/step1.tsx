"use client";

import { useContext } from "react";
import { SignupContext } from "../../context/SignupContext";
import { useFormik } from "formik";
import { step1Validation } from "../../utils/validations";

function Step1() {
  const signupCtx = useContext(SignupContext);
  if (!signupCtx)
    throw new Error("SignupContext must be used within SignupProvider");
  const { formData, setFormData, setStep } = signupCtx;

  //   console.log("Current step:", signupCtx.step);
  //   console.log("Current form data:", formData);

  const formik = useFormik({
    initialValues: {
      username: formData.username,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    },
    validationSchema: step1Validation,
    onSubmit: (values) => {
      //   console.log("Form submitted with values:", values);
      //   console.log("Current step before update:", signupCtx.step);
      setFormData({ ...formData, ...values });
      setStep(2);
      console.log("Form submitted with values:", values);

      //   console.log("Step updated to:", signupCtx.step);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submit event triggered");
    formik.handleSubmit(e);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Step 1: Personal Information
      </h2>
      <div className="w-80">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium ml-2">User Name</label>
            <input
              type="text"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="w-full p-2  rounded-lg bg-gray-200"
              placeholder="hmd123"
            />
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="w-full p-2 rounded-lg bg-gray-200 "
              placeholder="Hammad"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="w-full p-2 rounded-lg bg-gray-200 "
              placeholder="Nawaz"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
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
              className="w-full p-2 rounded-lg bg-gray-200 "
              placeholder="user@gmail.com"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium ml-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              className="w-full p-2 rounded-lg bg-gray-200 "
              placeholder="+92000000000"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </p>
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

export default Step1;
