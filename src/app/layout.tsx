import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ReactNode } from "react";
import { NavigationBar } from "@/components/navigation-bar/navigation-bar.component";
import { Footer } from "@/components/footer/footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SI Solutions",
  description: "SI Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
