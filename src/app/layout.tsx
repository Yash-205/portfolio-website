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
  title: "Yash Agarwal — Data-Driven CS Student",
  description: "Data-driven CS student skilled in Data Analytics, Excel, and Machine Learning.",
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
