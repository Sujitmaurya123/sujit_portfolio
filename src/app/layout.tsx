
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import FooterSection from "../components/Footer-section";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

const siteUrl = "https://your-domain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sujit Kumar | Full Stack Developer & AI Agent Developer",
    template: "%s | Sujit Kumar",
  },

  description:
    "Explore Sujit Kumar's portfolio showcasing full-stack development, AI agent development, scalable web applications, and production-ready AI-powered solutions.",

  applicationName: "Sujit Kumar Portfolio",

  keywords: [
    "Sujit Kumar",
    "Sujit Kumar Portfolio",
    "Full Stack Developer",
    "AI Agent Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "AI Voice Agent Developer",
    "Web Application Development",
    "Freelance Developer",
  ],

  authors: [
    {
      name: "Sujit Kumar",
      url: siteUrl,
    },
  ],

  creator: "Sujit Kumar",
  publisher: "Sujit Kumar",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sujit Kumar Portfolio",
    title: "Sujit Kumar | Full Stack Developer & AI Agent Developer",
    description:
      "Building scalable digital products, AI-powered systems, and production-ready applications for startups and enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sujit Kumar - Full Stack Developer and AI Agent Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sujit Kumar | Full Stack Developer & AI Agent Developer",
    description:
      "Full-stack development, AI agents, and scalable production-ready digital solutions.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable)}
    >
      <body
        className={cn(
          jetbrainsMono.variable,
          "min-h-screen bg-black antialiased"
        )}
      >
        <Header />

        <main>{children}</main>

        <FooterSection />
      </body>
    </html>
  );
}
