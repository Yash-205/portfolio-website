import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yash Agarwal — Full-Stack & GenAI Developer",
  description: "Full-stack developer building scalable applications with integrated GenAI systems, specializing in React, Node.js, LLMs, and agent workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${syne.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
