import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const montserratAlternates = localFont({
  src: [
    {
      path: "../public/fonts/MontserratAlternates-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MontserratAlternates-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat-alternates",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2nd Louth Blackrock Sea Scouts | Scouting Ireland",
  description: "Official website of 2nd Louth Blackrock Sea Scouts. Seamanship, coastal navigation, outdoor camping, and youth leadership in Blackrock, Co. Louth, Ireland.",
  keywords: ["Sea Scouts", "2nd Louth", "Blackrock", "Scouting Ireland", "Sailing", "Kayaking", "Cooley", "Dundalk Bay"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="sea" data-mode="light" className="h-full antialiased">
      <body className={`${montserratAlternates.variable} ${montserratAlternates.className} min-h-full flex flex-col transition-colors duration-200`}>
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
