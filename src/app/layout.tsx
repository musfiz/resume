import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "devicon/devicon.min.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mustafizur Rahman — Senior Software Engineer",
  description: "Senior Software Engineer with 10+ years of experience architecting high-scale enterprise applications, microservices, and modern web platforms.",
  keywords: ["Mustafizur Rahman", "Senior Software Engineer", "Full Stack Developer", "BJIT", "React", "Next.js", "Node.js", "Laravel", "Microservices"],
  authors: [{ name: "Mustafizur Rahman", url: "https://musfiz.com" }],
  openGraph: {
    title: "Mustafizur Rahman — Senior Software Engineer",
    description: "Senior Software Engineer with 10+ years of experience architecting high-scale enterprise applications, microservices, and modern web platforms.",
    url: "https://musfiz.com",
    siteName: "Mustafizur Rahman Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`} suppressHydrationWarning>
      <body className="font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-400 bg-slate-50 dark:bg-[#0b0f17] text-slate-900 dark:text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
