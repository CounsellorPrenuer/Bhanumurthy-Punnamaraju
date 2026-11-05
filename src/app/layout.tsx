import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteSettings } from "@/lib/sanity.fetch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings?.seo?.metaTitle || "Gamyasarthi | Bhanumurthy Punnamaraju - Career Counselling & Mentoring";
  const description =
    settings?.seo?.metaDescription ||
    "With 20+ years of experience, Bhanumurthy Punnamaraju guides students, graduates, and professionals toward clarity, purpose, and lasting success.";

  return {
    metadataBase: new URL("https://gamyasarthi.com"),
    title,
    description,
    keywords: [
      "Career Counselling",
      "Mentoria Packages",
      "Bhanumurthy Punnamaraju",
      "Gamyasarthi",
      "Stream Selection",
      "College Admissions",
      "Psychometric Assessment",
      "Career Guidance India"
    ],
    authors: [{ name: "Bhanumurthy Punnamaraju" }],
    creator: "Bhanumurthy Punnamaraju",
    openGraph: {
      title,
      description,
      url: "https://gamyasarthi.com",
      siteName: "Gamyasarthi",
      images: [
        {
          url: "/founder.jpeg",
          width: 1200,
          height: 1600,
          alt: "Bhanumurthy Punnamaraju - Senior Career Mentor",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/founder.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
