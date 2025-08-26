import Footer from "@/components/navigation/footer";
import MenuBar from "@/components/navigation/menu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="p-6 2xl:p-8 3xl:p-12">
          <MenuBar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
