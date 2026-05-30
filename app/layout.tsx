import type { Metadata } from 'next';
import './globals.css';
import { Inter, Bebas_Neue } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
  weight: '400'
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
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} overflow-x-hidden`}>
      <body className={`antialiased bg-[#050508] text-white overflow-x-hidden ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
