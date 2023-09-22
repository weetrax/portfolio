import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppLayout, Main } from "@/components/Layouts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <AppLayout>
          <Navbar />
          <Main>{children}</Main>
          <Footer />
        </AppLayout>
      </body>
    </html>
  );
}
