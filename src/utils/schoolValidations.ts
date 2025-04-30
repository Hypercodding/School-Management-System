import * as Yup from "yup";

export const step1Validation = Yup.object({
  name: Yup.string().min(3, "Too short!").required("School Name is required"),
  description: Yup.string()
    .min(5, "Too short!")
    .required("Description is required"),
  moto: Yup.string().min(2, "Too short!").required("Moto is required"),
  principal: Yup.string().required("Principal is required"),
});

export const step4Validation = Yup.object({
  logo: Yup.string().url("Invalid URL").optional(),
});

export const step2Validation = Yup.object({
  phone: Yup.string()
    .min(6, "At least 6 characters")
    .required("Phone number is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  website: Yup.string()
    .url("Enter a valid URL")
    .required("Website is required"),
});

export const step3Validation = Yup.object({
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  country: Yup.string().required("Country is required"),
});
