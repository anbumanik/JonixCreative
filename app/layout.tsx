import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'JonixCreative — Cinematic Video Editing for Creators & Brands',
  description:
    'Professional video editing services for creators, brands, and businesses. Instagram Reels, YouTube, Corporate Videos, Podcast Editing, Motion Graphics, Color Grading and more. Based in Dindigul, Tamil Nadu, India — serving clients worldwide.',
  keywords:
    'video editing service, cinematic video editing, instagram reels editing, youtube video editor, corporate video production, podcast editing, motion graphics, color grading DaVinci Resolve, JonixCreative, Jonix Kumar, video editor India, freelance video editor',
  authors: [{ name: 'JonixCreative' }],
  openGraph: {
    title: 'JonixCreative — Cinematic Video Editing',
    description:
      'Transforming raw footage into cinematic stories. Professional video editing for creators, brands, and businesses worldwide.',
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
      name: 'What video editing services does JonixCreative offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JonixCreative offers Instagram Reels & TikTok editing, YouTube video editing, corporate brand films, podcast editing, motion graphics, cinematic color grading, YouTube Shorts, and commercial ad editing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to edit a video?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Short-form content like Instagram Reels takes 24–48 hours. Long-form YouTube videos or corporate films take 3–5 business days. Rush delivery is available on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pricing for your video editing services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing is project-based depending on edit type, video length, and complexity. Contact us for a custom quote — no hidden fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What software do you use for video editing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use Adobe Premiere Pro, After Effects, DaVinci Resolve, Adobe Audition, and Photoshop for professional-quality deliverables.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer revisions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every project includes at least two rounds of free revisions to ensure you are 100% satisfied.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! JonixCreative works with clients worldwide across the US, UK, UAE, Australia, and Southeast Asia. All collaboration is handled online.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with JonixCreative?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fill out the contact form, message us on WhatsApp, or email us. Share your project brief and deadline — we will respond within hours with a custom quote.',
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
