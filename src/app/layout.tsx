import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ReactNode } from "react";
import { NavigationBar } from "@/components/navigation-bar/navigation-bar.component";
import { Footer } from "@/components/footer/footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "summit - We bring sustainable and scalable solutions to your doorstep.",
  description: "We bring sustainable and scalable solutions to your doorstep.",
  applicationName: "summit",
  authors: [{ name: "summit", url: "https://summit-chi.vercel.app/" }],
  generator: "summit",
  keywords: "summit, system integration",
  openGraph: {
    type: "website",
    url: "https://summit-chi.vercel.app/",
    title:
      "summit - We bring sustainable and scalable solutions to your doorstep.",
    description:
      "We bring sustainable and scalable solutions to your doorstep.",
    siteName: "summit",
    images: [
      {
        url: "https://images.ctfassets.net/avosu5u8t1wd/21sBbw55LlJyv3eu3yOxwx/899be022a4c056df87af8b1c86e05f34/summit-og-main.png",
      },
    ],
  },
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
