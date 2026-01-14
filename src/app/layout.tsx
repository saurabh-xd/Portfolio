import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/common/theme-provider";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";

import { Space_Grotesk } from "next/font/google";
import OnekoCat from "@/components/common/oneko";

export const metadata: Metadata = {
  metadataBase: new URL("https://saurabh-garkoti.vercel.app"),

  title: "Saurabh",
  description: "Full-stack web Developer building modern web experiences",
  openGraph: {
    title: "Saurabh Garkoti",
    description: "Full-stack web Developer building modern web experiences",
    url: "https://saurabh-garkoti.vercel.app/",
    siteName: "Saurabh ",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Saurabh Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Saurabh Garkoti",
    description: "Full-stack web Developer building modern web experiences",
    images: ["/avatar.jpg"],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className}  antialiased bg-background dark:bg-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <OnekoCat />
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
