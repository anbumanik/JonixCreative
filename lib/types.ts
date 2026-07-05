export interface Testimonial {
  id?: string;
  name: string;
  company: string;
  role: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: 'Montages' | 'Short-Form Videos' | 'Long-Form Videos';
  thumbnail: string;
  videoUrl: string;
  description: string;
  clientFeedback: string;
  tools: string[];
  duration: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  timestamp?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
