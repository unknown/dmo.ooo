import { Inter } from "next/font/google";

import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

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
    siteName: "David Mo",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
