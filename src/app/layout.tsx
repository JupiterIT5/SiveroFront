import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { Jost } from "next/font/google";

import "./globals.scss";
import Header from "@/shared/ui/Layout/Header";
import Footer from "@/shared/ui/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
