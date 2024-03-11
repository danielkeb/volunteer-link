import Header from "@/components/global/Header";
import { Suspense } from "react";

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* A header common to most pages */}
 
     
          <Header />
   
      {/* Main content */}
      <main className="py-6">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
