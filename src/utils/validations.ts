import * as Yup from "yup";

export const step1Validation = Yup.object({
  username: Yup.string().min(3, "Too short!").required("Username is required"),
  firstName: Yup.string()
    .min(2, "Too short!")
    .required("First name is required"),
  lastName: Yup.string().min(2, "Too short!").required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10,15}$/, "Phone number must be valid")
    .required("Phone number is required"),
});

export const step4Validation = Yup.object({
  profileImage: Yup.string().url("Invalid URL").optional(),
});

export const step2Validation = Yup.object({
  password: Yup.string().min(6, "At least 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  role: Yup.string().required("Role is required"),
});

export const step3Validation = Yup.object({
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  country: Yup.string().required("Country is required"),
});
