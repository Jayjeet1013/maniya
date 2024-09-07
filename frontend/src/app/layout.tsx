import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header2 from "../components/layout/Navbar";
import Footer3 from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maniya Bot",
  description: "A decentralized Message Dapp Bot ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header2 />
        {children}
        <Analytics />
        <Footer3 />
      </body>
    </html>
  );
}
