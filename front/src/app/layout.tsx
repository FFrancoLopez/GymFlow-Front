import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";
import ExcludedWrapper from "@/components/ExcluededWrapper/ExcludedWrapper";
import {AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymFlow",
  description: "Generated by create next app",
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
        <AuthProvider>
          <NavBar />
          {children}
          <ExcludedWrapper>
            <Footer />
          </ExcludedWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
