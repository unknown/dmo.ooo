import "../styles/globals.css";

import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { twMerge } from "tailwind-merge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={twMerge(
          "bg-background min-h-screen font-sans antialiased",
          inter.variable,
          spaceGrotesk.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
