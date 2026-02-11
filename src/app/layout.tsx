


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Care.xyz - Reliable Care Services",
  description: "Baby sitting and elderly care service platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        
        <Navbar />
        
        
        {children}
        
    
        <Footer />
      </body>
    </html>
  );
}