import type { Metadata } from "next";
import "./globals.css";
import AuthContext from "./lib/contexts/AuthContext";

export const metadata: Metadata = {
  title: "VolunteerLink",
  description: "Empowering communities thorough volunteering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>{children}</AuthContext>
      </body>
    </html>
  );
}
