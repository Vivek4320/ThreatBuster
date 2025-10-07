import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-Driven Next-Generation Firewall | AICTE Cyber Security",
  description: "AI-powered Next-Generation Firewall for Dynamic Threat Detection and Zero Trust Implementation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
