import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Wahib | Portfolio",
  description:
    "Final Year Software Engineering Student at COMSATS | MERN & Next.js Developer | PayloadCMS Enthusiast.",
  keywords: ["Portfolio", "Software Engineer", "Next.js", "MERN", "PayloadCMS"],
  authors: [{ name: "Muhammad Wahib" }],
  metadataBase: new URL("https://yourdomain.com"), // change to your real domain
  openGraph: {
    title: "Muhammad Wahib | Portfolio",
    description:
      "Software Engineer | MERN & Next.js Developer | PayloadCMS Enthusiast.",
    url: "https://yourdomain.com",
    siteName: "Muhammad Wahib Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Wahib Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Wahib | Portfolio",
    description:
      "Software Engineer | MERN & Next.js Developer | PayloadCMS Enthusiast.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/og-image.ico",
    shortcut: "/og-image.png",
    apple: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
