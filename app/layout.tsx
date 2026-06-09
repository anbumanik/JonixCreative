import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'JonixCreative — Cinematic Video Editing for Creators & Brands',
  description:
    'Professional video editing services for creators, brands, and businesses. Instagram Reels, YouTube, Corporate Videos, Podcast Editing, Motion Graphics, Color Grading and more. Based in Dindigul, Tamil Nadu, India — serving clients worldwide.',
  keywords:
    'video editing service, cinematic video editing, instagram reels editing, youtube video editor, corporate video production, podcast editing, motion graphics, color grading DaVinci Resolve, JonixCreative, D. Joan Paul Kirubai, video editor India, freelance video editor',
  authors: [{ name: 'JonixCreative' }],
  openGraph: {
    title: 'JonixCreative — Cinematic Video Editing',
    description:
      'Turning vision into reality. Professional video editing for creators, brands, and businesses worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JonixCreative',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JonixCreative — Cinematic Video Editing',
    description:
      'Professional video editing services for creators, brands, and businesses. 500+ projects delivered. Get a free quote today.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What video editing services does Jonix Creative offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jonix Creative offers a comprehensive range of video editing services including Instagram Reels Editing, YouTube Video Editing, Corporate Video Editing, Podcast Editing, Montages, and fully Captioned & Subtitle Editing — all crafted with precision and creativity to bring your vision to life.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to edit a video?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We pride ourselves on fast, reliable delivery. Most projects are completed within 24 hours. For larger or more complex projects, the timeline may vary — but one thing we never compromise on is your deadline. We always deliver on time, every time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pricing for your video editing services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Our pricing is flexible and tailored to the scope of each project. We offer reasonable, value-packed packages designed to suit every budget — from individual creators to growing businesses. Once you explore our packages, we're confident you'll find them worth every penny.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer revisions? How many revision rounds are included?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. We offer revisions with every project — because your satisfaction is our priority. At Jonix Creative, we work smart and edit right so that most clients are fully satisfied within minimal revision rounds. We don't stop until you love the result.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Jonix Creative proudly works with clients across the globe. No matter where you are in the world, we are ready to bring your vision to life with the same dedication and quality we deliver to every client.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with Jonix Creative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Getting started is simple! Just reach out to us on WhatsApp, share your project details, and we'll take it from there. Our team will guide you through the process smoothly — from your first message to your final delivered video.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I choose Jonix Creative over other editors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Because at Jonix Creative, you don't just get an editor — you get a dedicated creative team that treats your project as their own. With 5+ years of experience, fast turnaround, minimal revisions, global reach, and a passion for storytelling — we don't just edit videos, we elevate them.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I send my footage to Jonix Creative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can share your raw footage easily via Google Drive, WeTransfer.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="antialiased bg-[#050508] text-white overflow-x-hidden font-inter">
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
        <div className="w-full overflow-x-hidden relative min-h-screen flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}
