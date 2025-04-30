import { Address } from "./Address";
import { ContactInfo } from "./ContactInfo";

export type School = {
  id: string;
  schoolName: string;
  address: Address;
  contactInfo: ContactInfo;
  establishment: Date;
  principal?: string;
  logo?: string;
  description: string;
  moto: string;
  createdAt: Date;
  updatedAt: Date;
};
