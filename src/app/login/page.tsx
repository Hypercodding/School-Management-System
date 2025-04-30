"use client";

import Button from "@/components/layout/Button";
// import Navbar from "@/components/layout/Navbar";
import { Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      // TODO: Implement your login logic here
      console.log("Form submitted:", values);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Login successful!");
      //   resetForm();
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex min-h-screen">
        {/* Left side with image */}
        <div className="hidden lg:block relative w-full">
          <Image
            src="/school.jpg"
            alt="School Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side with login form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md mb-6">
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/education.png"
                alt="Education Icon"
                width={80}
                height={80}
                className="mb-8 relative"
              />
              <h1 className="text-2xl font-bold">Nice to see you again</h1>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 ml-2"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`mt-1 block w-full rounded-sm bg-gray-200 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 ${errors.email && touched.email ? "border-red-500" : ""
                        }`}
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <div className="text-red-500 text-sm mt-1 ml-2">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 ml-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className={`mt-1 block w-full rounded-sm bg-gray-200 border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-2 pr-10 ${errors.password && touched.password
                          ? "border-red-500"
                          : ""
                          }`}
                        placeholder="Enter password"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPassword(!showPassword);
                        }}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 mt-1"
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-sm mt-1 ml-2">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  {/* Remember Me Checkbox */}
                  <div className="flex justify-between items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <Field
                        type="checkbox"
                        name="rememberMe"
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      <span className="ms-3 text-sm font-medium text-gray-700">
                        Remember me
                      </span>
                    </label>
                    <Link
                      href="/"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Button
                    name={
                      isSubmitting ? (
                        <i className="fa fa-spinner fa-spin"></i>
                      ) : (
                        "Sign in"
                      )
                    }
                    color="bg-black"
                    textColor="text-white w-full text-lg"
                    disabled={isSubmitting}
                  />
                </Form>
              )}
            </Formik>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="absolute px-3 font-medium text-gray-900  bg-white">
                or
              </span>
            </div>
            <Link
              href="/signup"
              className="flex justify-center text-sm text-black hover:underline hover:text-blue-600"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
