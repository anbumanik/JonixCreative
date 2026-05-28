import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JonixCreative — Cinematic Video Editing for Creators & Brands',
  description:
    'Professional video editing services for creators, brands, and businesses. Instagram Reels, YouTube, Corporate Videos, Podcast Editing, Motion Graphics, Color Grading and more.',
  keywords:
    'video editing, instagram reels, youtube editing, corporate video, podcast editing, motion graphics, color grading, JonixCreative',
  authors: [{ name: 'JonixCreative' }],
  openGraph: {
    title: 'JonixCreative — Cinematic Video Editing',
    description:
      'Transforming raw footage into cinematic stories. Professional video editing for creators, brands, and businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JonixCreative',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JonixCreative — Cinematic Video Editing',
    description:
      'Professional video editing services for creators, brands, and businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#050508] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
