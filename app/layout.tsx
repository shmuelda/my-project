import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shmuel Daniel | Director of Engineering",
  description: "Director of Engineering with 15+ years leading large teams of 100+ engineers. Expert in AI transformation, SDLC modernization, and building scalable systems across AWS and distributed architectures.",
  keywords: ["Shmuel Daniel", "Director of Engineering", "Engineering Leadership", "AI Transformation", "SDLC Modernization", "Cloud Architecture", "Engineering Strategy"],
  authors: [{ name: "Shmuel Daniel", url: "https://shmuel-daniel.com" }],
  icons: {
    icon: [
      { url: "/round-avatar.svg", type: "image/svg+xml" },
    ],
    apple: "/round-avatar.svg",
  },
  openGraph: {
    title: "Shmuel Daniel | Director of Engineering",
    description: "Director of Engineering with 15+ years of leadership experience. Expert in AI transformation and engineering strategy.",
    type: "website",
    url: "https://shmuel-daniel.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shmuel Daniel | Director of Engineering",
    description: "Director of Engineering with 15+ years leading large teams and driving AI transformation.",
    creator: "@shmueldaniel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}