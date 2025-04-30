import "./globals.css";
import { Telex } from "next/font/google";
import { SignupProvider } from "../context/SignupContext";

// import Navbar from "@/components/layout/Navbar";

const telex = Telex({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>
      <body>
        <main className={telex.className}>
          <SignupProvider>{children}</SignupProvider>
        </main>
      </body>
    </html>
  );
}
