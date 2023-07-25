import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://dmo.ooo"),
  title: "David Mo",
  description: "Computer science student at New York University",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dmo.ooo",
    title: "David Mo",
    description: "Computer science student at New York University",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="bg-background min-h-screen font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
