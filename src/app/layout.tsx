import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ReactNode } from "react";
import { NavigationBar } from "@/components/navigation-bar/navigation-bar.component";
import { Footer } from "@/components/footer/footer.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Summit - We bring sustainable and scalable solutions to your doorstep.",
  description: "We bring sustainable and scalable solutions to your doorstep.",
  applicationName: "Summit",
  authors: [{ name: "Summit", url: "https://summit-chi.vercel.app/" }],
  generator: "Summit",
  keywords: "summit, system integration",
  openGraph: {
    type: "website",
    url: "https://summit-chi.vercel.app/",
    title:
      "Summit - We bring sustainable and scalable solutions to your doorstep.",
    description:
      "We bring sustainable and scalable solutions to your doorstep.",
    siteName: "Summit",
    images: [
      {
        url: "https://thumb2.photo.mybox.naver.com/3472535967276863304?type=m1280_1280_2&nocache=4001160303",
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
