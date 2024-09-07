import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header2 from "@/components/layout/Navbar";
import Footer3 from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Maniya Bot",
  description: "Maniya bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header2/>
        {children}
        <Footer3/>
      </body>
    </html>
  );
}
