import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brilworks – Portfolio & Demos",
  description:
    "Explore Brilworks' portfolio of web apps, browser extensions, and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        {children}
        <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Brilworks. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
