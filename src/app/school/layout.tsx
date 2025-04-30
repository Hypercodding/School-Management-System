import { SchoolRegistrationProvider } from "../../context/SchoolRegistrationContext";

export default function SchooolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SchoolRegistrationProvider>{children}</SchoolRegistrationProvider>;
}
