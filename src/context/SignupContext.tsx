"use client";
import React, { createContext, useState, ReactNode } from "react";

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "admin" | "teacher" | "student" | "parent" | "staff";
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: Address;
  profileImage?: string;
  active: boolean;
}

interface SignupContextProps {
  formData: SignupData;
  setFormData: (data: SignupData) => void;
  step: number;
  setStep: (step: number) => void;
}

export const SignupContext = createContext<SignupContextProps | undefined>(
  undefined
);

export const SignupProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    profileImage: "",
    active: true,
  });

  const [step, setStep] = useState(1);

  return (
    <SignupContext.Provider value={{ formData, setFormData, step, setStep }}>
      {children}
    </SignupContext.Provider>
  );
};
