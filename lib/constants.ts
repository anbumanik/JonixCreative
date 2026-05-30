import type { Testimonial, PortfolioProject } from './types';

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    company: 'BrightBrand Agency',
    role: 'Marketing Director',
    review:
      'JonixCreative completely transformed our brand video. The cinematic quality and attention to detail was beyond what we expected. Our engagement rates tripled after the launch!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 't2',
    name: 'James Rodriguez',
    company: 'TechFlow Studios',
    role: 'CEO & Founder',
    review:
      "Working with JonixCreative was effortless. They understood our vision instantly and delivered a corporate video that perfectly captured our company's essence. Highly recommended!",
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 't3',
    name: 'Aisha Patel',
    company: 'Luxe Lifestyle Co.',
    role: 'Content Creator',
    review:
      'My Instagram reels went from 500 to 50K views after their edits. The color grading, transitions, and pacing are just chef\'s kiss. Will never go back to anyone else!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 't4',
    name: 'Marcus Chen',
    company: 'Podcast Nation',
    role: 'Podcast Host',
    review:
      'The podcast editing quality from JonixCreative is exceptional. They removed all the dead air, added perfect intros/outros, and the audio quality is crystal clear. Love it!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
  },
  {
    id: 't5',
    name: 'Fatima Al-Hassan',
    company: 'Global Retail Group',
    role: 'Brand Manager',
    review:
      'Our commercial ad campaign was a huge success thanks to JonixCreative. Professional, fast delivery, and the motion graphics were absolutely stunning. 10/10!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
];

export const FALLBACK_PORTFOLIO: PortfolioProject[] = [
  {
    slug: 'brand-reel-brightbrand',
    title: 'BrightBrand Agency Showreel',
    category: 'Reels',
    thumbnail: '/images/portfolio_thumb1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'A dynamic 30-second Instagram reel showcasing BrightBrand\'s portfolio of work with fast cuts, modern transitions, and electric color grading.',
    clientFeedback: 'Exceeded all expectations. Went viral within 24 hours!',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    duration: '0:30',
  },
  {
    slug: 'techflow-corporate-video',
    title: 'TechFlow Corporate Story',
    category: 'Corporate',
    thumbnail: '/images/portfolio_thumb2.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'A premium 3-minute corporate brand video for TechFlow Studios, featuring interviews, B-roll footage, and motion graphics to tell their company story.',
    clientFeedback: 'Our investors loved it. Perfectly captured our vision.',
    tools: ['Premiere Pro', 'After Effects', 'Motion'],
    duration: '3:20',
  },
  {
    slug: 'luxe-commercial-ad',
    title: 'Luxe Lifestyle Commercial',
    category: 'Commercial Ads',
    thumbnail: '/images/portfolio_thumb3.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'A 60-second luxury commercial ad for Luxe Lifestyle Co. featuring dramatic lighting, slow-motion shots, and cinematic color grading.',
    clientFeedback: 'The most beautiful ad we\'ve ever had. Sales went up 40%!',
    tools: ['DaVinci Resolve', 'After Effects', 'Premiere Pro'],
    duration: '1:00',
  },
  {
    slug: 'youtube-tech-review',
    title: 'Tech Review YouTube Series',
    category: 'YouTube',
    thumbnail: '/images/portfolio_thumb1.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Full YouTube channel management including editing, thumbnails, and chapter markers for a tech review channel. Helped grow from 1K to 50K subscribers.',
    clientFeedback: 'Subscriber growth has been insane. Best investment ever!',
    tools: ['Premiere Pro', 'Photoshop', 'After Effects'],
    duration: '12:45',
  },
  {
    slug: 'podcast-nation-edit',
    title: 'Podcast Nation — Season 2',
    category: 'Podcast Editing',
    thumbnail: '/images/portfolio_thumb2.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'Full audio and video podcast editing for 12 episodes of Podcast Nation. Includes intro, outro, chapter markers, and social media clips.',
    clientFeedback: 'Crystal clear audio and amazing video quality every episode.',
    tools: ['Adobe Audition', 'Premiere Pro', 'Audacity'],
    duration: '45:00',
  },
  {
    slug: 'global-retail-reel',
    title: 'Global Retail Product Reel',
    category: 'Reels',
    thumbnail: '/images/portfolio_thumb3.png',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description:
      'A series of 5 product reels for Global Retail Group\'s new product launch, each optimized for Instagram and TikTok.',
    clientFeedback: 'Each reel got over 100K views. Incredible work!',
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro'],
    duration: '0:15',
  },
];

export const SERVICES = [
  {
    id: 'reels',
    title: 'Instagram Reels Editing',
    description:
      'Captivating short-form content optimized for maximum reach and engagement on Instagram and TikTok.',
    icon: 'Film',
  },
  {
    id: 'youtube',
    title: 'YouTube Video Editing',
    description:
      'Professional long-form YouTube content with chapters, B-roll, color grading, and SEO-optimized thumbnails.',
    icon: 'Youtube',
  },
  {
    id: 'corporate',
    title: 'Corporate Video Editing',
    description:
      'Polished corporate films, brand stories, and internal communications that reflect your company\'s professionalism.',
    icon: 'Briefcase',
  },
  {
    id: 'podcast',
    title: 'Podcast Editing',
    description:
      'Clean audio editing, noise removal, intro/outro integration, and video podcast production for all platforms.',
    icon: 'Mic',
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    description:
      'Stunning animated graphics, lower thirds, intros, and kinetic typography that elevate your brand identity.',
    icon: 'Sparkles',
  },
  {
    id: 'color',
    title: 'Color Grading',
    description:
      'Cinematic color grading and color correction using DaVinci Resolve to give your footage a premium look and feel.',
    icon: 'Palette',
  },
  {
    id: 'shorts',
    title: 'Shorts Editing',
    description:
      'YouTube Shorts and vertical video editing optimized for algorithm performance and viewer retention.',
    icon: 'Zap',
  },
  {
    id: 'commercial',
    title: 'Commercial Ads Editing',
    description:
      'High-impact commercial advertisements for TV, digital platforms, and social media that drive conversions.',
    icon: 'Tv',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: 500, label: 'Projects Completed', suffix: '+' },
  { value: 200, label: 'Happy Clients', suffix: '+' },
  { value: 5, label: 'Years Experience', suffix: '+' },
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/917402096762',
  instagram: 'https://instagram.com/jonixcreative',
  youtube: 'https://youtube.com/@jonixcreative',
  linkedin: 'https://linkedin.com/company/jonixcreative',
};

export const CONTACT_INFO = {
  phone: '+91 74020 96762',
  email: 'anbumanik22@gmail.com',
  location: 'Kodairoad, Dindigul, Tamilnadu',
};
