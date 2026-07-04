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
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Sfd%20Montage.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Sfd%20Montage.mp4',
    description:
      'A dynamic 30-second Instagram reel showcasing BrightBrand\'s portfolio of work with fast cuts, modern transitions, and electric color grading.',
    clientFeedback: 'Exceeded all expectations. Went viral within 24 hours!',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    duration: '0:30',
  },
  {
    slug: 'brand-reel-dsw',
    title: 'DSW Montage',
    category: 'Reels',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Dsw.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Dsw.mp4',
    description: 'A dynamic montage reel with beautiful transitions.',
    clientFeedback: 'Amazing work!',
    tools: ['Premiere Pro', 'After Effects'],
    duration: '0:15',
  },
  {
    slug: 'kayathar-teaser',
    title: 'Kayathar Teaser',
    category: 'YouTube',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Kayathar%20Teaser.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Kayathar%20Teaser.mp4',
    description: 'An exciting teaser video capturing the best moments.',
    clientFeedback: 'Brilliant editing and pacing!',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    duration: '0:45',
  },
  {
    slug: 'ml06-2-montage',
    title: 'ML06 Montage',
    category: 'Reels',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Ml06%202.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Ml06%202.mp4',
    description: 'An engaging montage perfect for social media.',
    clientFeedback: 'Loved the fast-paced edits!',
    tools: ['Premiere Pro', 'After Effects'],
    duration: '0:20',
  },
  {
    slug: 'huntington-jewelry',
    title: 'Huntington Jewelry',
    category: 'Corporate',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Huntingtonjewelry.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Huntingtonjewelry.mp4',
    description: 'Elegant showcase for Huntington Jewelry.',
    clientFeedback: 'Stunning visuals!',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    duration: '0:30',
  },
  {
    slug: 'pn02',
    title: 'PN02 Reel',
    category: 'Reels',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Pn02.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Pn02.mp4',
    description: 'Dynamic and fast-paced reel editing.',
    clientFeedback: 'Great energy!',
    tools: ['Premiere Pro', 'After Effects'],
    duration: '0:15',
  },
  {
    slug: 'aus2',
    title: 'AUS2 Highlights',
    category: 'YouTube',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Aus2.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Aus2.mp4',
    description: 'Captivating highlights and smooth transitions.',
    clientFeedback: 'Perfect edit for our channel.',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    duration: '0:45',
  },
  {
    slug: 'text-port',
    title: 'Text Port Showcase',
    category: 'YouTube',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Text%20Port.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Text%20Port.mp4',
    description: 'A stylish typography and text animation showcase.',
    clientFeedback: 'Incredible motion graphics!',
    tools: ['After Effects'],
    duration: '0:25',
  },
  {
    slug: 'uni02-1',
    title: 'Uni02 Highlight',
    category: 'Corporate',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Uni02%201.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Uni02%201.mp4',
    description: 'A professional and clean corporate highlight reel.',
    clientFeedback: 'Exactly what we needed.',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    duration: '0:40',
  },
  {
    slug: 'pn04',
    title: 'PN04 Reel',
    category: 'Reels',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Pn04.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Pn04.mp4',
    description: 'A captivating short-form reel for social media.',
    clientFeedback: 'Highly engaging content!',
    tools: ['Premiere Pro', 'After Effects'],
    duration: '0:15',
  },
  {
    slug: 'pr01',
    title: 'PR01 Promo',
    category: 'Reels',
    thumbnail: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Pr01.mp4',
    videoUrl: 'https://ik.imagekit.io/g1241mexj/project%20images/joan/Pr01.mp4',
    description: 'An eye-catching promotional video.',
    clientFeedback: 'Superb quality!',
    tools: ['Premiere Pro'],
    duration: '0:20',
  },
];

export const SERVICES = [
  {
    id: 'reels',
    title: 'Instagram Reels Editing',
    description:
      'High-energy, scroll-stopping short-form content crafted for maximum reach, engagement, and virality on Instagram and TikTok. We edit Reels that don\'t just get views — they get results.',
    icon: 'Film',
  },
  {
    id: 'youtube',
    title: 'YouTube Video Editing',
    description:
      'Professional long-form YouTube content with seamless cuts, dynamic B-roll, cinematic color grading, and engaging pacing — built to grow your channel and keep viewers watching till the end.',
    icon: 'Youtube',
  },
  {
    id: 'corporate',
    title: 'Corporate Video Editing',
    description:
      'Polished, professional corporate films, brand stories, and business presentations that reflect the credibility, vision, and professionalism of your company — leaving a powerful impression on every viewer.',
    icon: 'Briefcase',
  },
  {
    id: 'montages',
    title: 'Montages',
    description:
      'Beautifully crafted montages that bring your best moments to life — whether it\'s a brand highlight reel, event recap, or personal story, we turn your footage into an emotionally compelling visual journey.',
    icon: 'Sparkles',
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What video editing services does Jonix Creative offer?',
    answer:
      'Jonix Creative offers a comprehensive range of video editing services including Instagram Reels Editing, YouTube Video Editing, Corporate Video Editing, Podcast Editing, Montages, and fully Captioned & Subtitle Editing — all crafted with precision and creativity to bring your vision to life.',
  },
  {
    id: 'faq-2',
    question: 'How long does it take to edit a video?',
    answer:
      'We pride ourselves on fast, reliable delivery. Most projects are completed within 24 hours. For larger or more complex projects, the timeline may vary — but one thing we never compromise on is your deadline. We always deliver on time, every time.',
  },
  {
    id: 'faq-3',
    question: 'What is the pricing for your video editing services?',
    answer:
      "Our pricing is flexible and tailored to the scope of each project. We offer reasonable, value-packed packages designed to suit every budget — from individual creators to growing businesses. Once you explore our packages, we're confident you'll find them worth every penny.",
  },
  {
    id: 'faq-4',
    question: 'Do you offer revisions? How many revision rounds are included?',
    answer:
      "Absolutely. We offer revisions with every project — because your satisfaction is our priority. At Jonix Creative, we work smart and edit right so that most clients are fully satisfied within minimal revision rounds. We don't stop until you love the result.",
  },
  {
    id: 'faq-5',
    question: 'Do you work with clients outside India?',
    answer:
      'Yes! Jonix Creative proudly works with clients across the globe. No matter where you are in the world, we are ready to bring your vision to life with the same dedication and quality we deliver to every client.',
  },
  {
    id: 'faq-6',
    question: 'How do I get started with Jonix Creative?',
    answer:
      "Getting started is simple! Just reach out to us on WhatsApp, share your project details, and we'll take it from there. Our team will guide you through the process smoothly — from your first message to your final delivered video.",
  },
  {
    id: 'faq-7',
    question: 'Why should I choose Jonix Creative over other editors?',
    answer:
      "Because at Jonix Creative, you don't just get an editor — you get a dedicated creative team that treats your project as their own. With 5+ years of experience, fast turnaround, minimal revisions, global reach, and a passion for storytelling — we don't just edit videos, we elevate them.",
  },
  {
    id: 'faq-8',
    question: 'How do I send my footage to Jonix Creative?',
    answer:
      'You can share your raw footage easily via Google Drive, WeTransfer.',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: 500, label: 'Projects Completed', suffix: '+' },
];

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/917402096762',
  instagram: 'https://instagram.com/jonixcreative',
  youtube: 'https://youtube.com/@jonixcreative',
  linkedin: 'https://linkedin.com/company/jonixcreative',
};

export const CONTACT_INFO = {
  phone: '+91 74020 96762',
  email: 'jonixcreative@gmail.com',
  location: 'Kodairoad, Dindigul, Tamilnadu',
};
