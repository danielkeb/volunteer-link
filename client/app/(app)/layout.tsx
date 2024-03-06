import Header from "@/components/global/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* A header common to most pages */}
      <Header />

      {/* Main content */}
      <main className="bg-bg-200 py-6">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
