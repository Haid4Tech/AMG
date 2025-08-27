import Footer from "@/components/navigation/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div>{children}</div>
      <Footer />
    </main>
  );
}
