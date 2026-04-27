import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bad Bella Films | Character-Driven Film Production Company",
  description:
    "Bad Bella Films is a character-driven film and television company developing a slate of original stories rooted in grit, identity, and emotional truth.",

  metadataBase: new URL("https://badbellafilms.com"),

  openGraph: {
    title: "Bad Bella Films",
    description:
      "A slate of character-driven films and series built on emotion, identity, and truth.",
    url: "https://badbellafilms.com",
    siteName: "Bad Bella Films",
    images: [
      {
        url: "https://badbellafilms.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bad Bella Films",
    description:
      "A slate of character-driven films and series built on emotion, identity, and truth.",
    images: ["https://badbellafilms.com/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}