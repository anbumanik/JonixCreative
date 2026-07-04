import { ref, get, push, set } from 'firebase/database';
import { database } from './config';
import type { Testimonial, PortfolioProject, ContactFormData } from '@/lib/types';
import { FALLBACK_TESTIMONIALS, FALLBACK_PORTFOLIO } from '@/lib/constants';

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const snapshot = await get(ref(database, 'testimonials'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.values(data) as Testimonial[];
    }
    return FALLBACK_TESTIMONIALS;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return FALLBACK_TESTIMONIALS;
  }
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    const snapshot = await get(ref(database, 'portfolio'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data).map(([slug, val]) => ({
        ...(val as PortfolioProject),
        slug,
      }));
    }
    return FALLBACK_PORTFOLIO;
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    return FALLBACK_PORTFOLIO;
  }
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const contactRef = ref(database, 'contacts');
  const newContactRef = push(contactRef);
  await set(newContactRef, {
    ...data,
    timestamp: new Date().toISOString(),
  });
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  timestamp: string;
}

export async function getContacts(): Promise<ContactSubmission[]> {
  try {
    const snapshot = await get(ref(database, 'contacts'));
    if (snapshot.exists()) {
      const data = snapshot.val();
      const contacts = Object.entries(data).map(([id, val]) => ({
        ...(val as any),
        id,
      })) as ContactSubmission[];
      
      // Sort by timestamp descending (newest first)
      return contacts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }
    return [];
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
}

