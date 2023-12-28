import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
