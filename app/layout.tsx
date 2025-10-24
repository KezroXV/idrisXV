import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/components/theme-wrapper";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio - Développeur Full Stack",
  description: "Portfolio de développeur Full Stack spécialisé en React, Next.js et TypeScript",
  keywords: ["développeur", "full stack", "react", "nextjs", "typescript", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} font-mono antialiased`}
      >
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
