"use client";
import { createContext, useState, ReactNode } from "react";

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  website: string;
}

interface RegistrationData {
  name: string;
  address: Address;
  contactInfo: ContactInfo;
  principal: string;
  logo: string;
  description: string;
  moto: string;
}

interface RegistrationContextProps {
  formData: RegistrationData;
  setFormData: (data: RegistrationData) => void;
  step: number;
  setStep: (step: number) => void;
}

export const SchoolRegistrationContext = createContext<
  RegistrationContextProps | undefined
>(undefined);

export const SchoolRegistrationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    contactInfo: {
      phone: "",
      email: "",
      website: "",
    },
    principal: "",
    logo: "",
    description: "",
    moto: "",
  });

  const [step, setStep] = useState(1);
  return (
    <SchoolRegistrationContext.Provider
      value={{ formData, setFormData, step, setStep }}
    >
      {children}
    </SchoolRegistrationContext.Provider>
  );
};
