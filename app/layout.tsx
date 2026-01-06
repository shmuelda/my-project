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
  title: "Daniel.AI | AI Engineer & Developer",
  description: "Showcasing AI expertise and innovative solutions. Passionate about building intelligent systems and pushing the boundaries of artificial intelligence.",
  keywords: ["Daniel", "Daniel.AI", "AI Engineer", "Machine Learning", "Artificial Intelligence", "Developer", "AI Portfolio"],
  authors: [{ name: "Daniel", url: "https://daniel-ai.com" }],
  icons: {
    icon: [
      { url: "/round-avatar.svg", type: "image/svg+xml" },
    ],
    apple: "/round-avatar.svg",
  },
  openGraph: {
    title: "Daniel.AI | AI Engineer & Developer",
    description: "Showcasing AI expertise and innovative solutions. Building intelligent systems for the future.",
    type: "website",
    url: "https://daniel-ai.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel.AI | AI Engineer & Developer",
    description: "Showcasing AI expertise and innovative solutions.",
    creator: "@daniel",
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