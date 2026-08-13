

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import ThemeTransition from "@/components/shared/theme-transition";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import ScrollToTop from "@/components/shared/scroll-to-top";
export const metadata: Metadata = {
  title: {
    default: "Zubair Zafar | Full-Stack Developer",
    template: "%s | Zubair Zafar",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable SaaS products. Open to remote and relocation opportunities.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "SaaS Developer",
    "Pakistan Developer",
  ],
  authors: [{ name: "Zubair Zafar" }],
  creator: "Zubair Zafar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zubairzafar.dev",
    siteName: "Zubair Zafar Portfolio",
    title: "Zubair Zafar | Full-Stack Developer",
    description:
      "Building scalable SaaS products that solve real problems. 2+ years of experience with React, Next.js, TypeScript, and Node.js.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zubair Zafar - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zubair Zafar | Full-Stack Developer",
    description:
      "Building scalable SaaS products that solve real problems.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Baad mein add karna
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}  // ✅ Yeh false karo!
        >
          <ThemeTransition />  {/* ✅ Yeh add karo */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTop />
                   </ThemeProvider>
      </body>
    </html>
  );
}