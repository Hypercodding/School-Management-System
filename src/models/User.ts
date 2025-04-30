import { Address } from "./Address";

export type User = {
  id?: string;
  schoolId?: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: string;
  phoneNumber: string;
  address: Address;
  profileImage?: string;
  active?: string;
  emailVarified?: boolean;
  varificationToken?: string; //for fronend design
  createdAt?: Date;
  updatedAt?: Date;
  lastLogin?: Date;
  resetPasswordToken?: string;
  resetPasswordExpires?: string;
};
