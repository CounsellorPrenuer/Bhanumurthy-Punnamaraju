/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SanityImageRef {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  domain: string;
  logo: SanityImageRef;
  primaryColor?: string;
  secondaryColor?: string;
  contactInfo: {
    email: string;
    phone: string;
    whatsapp?: string;
    address?: string;
    location?: string;
  };
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
  primaryCta: {
    title: string;
    link: string;
  };
  footer: {
    brandDescription: string;
    copyright: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export interface HomePageData {
  hero: {
    badge?: string;
    heading: string;
    subheading: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    stats?: { label: string; value: string }[];
  };
  introduction: {
    title: string;
    description: string;
  };
  valuePropositions: {
    _key: string;
    title: string;
    description: string;
  }[];
}

export interface FounderData {
  name: string;
  title: string;
  brandName: string;
  photo: SanityImageRef;
  bio: string;
  philosophy: string;
  experienceYears: string;
  keyHighlights: string[];
  credentials: string[];
}

export interface ServiceItem {
  _id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon?: string;
  order: number;
  targetAudience?: string;
  features?: string[];
}

export interface PlanItem {
  _key: string;
  planName: string;
  type: 'STANDARD' | 'PREMIUM';
  price: string;
  duration?: string;
  sessions?: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  excludedFeatures?: string[];
}

export interface MentoriaPackageItem {
  _id: string;
  title: string;
  category: '8-9 STUDENTS' | '10-12 STUDENTS' | 'COLLEGE GRADUATES' | 'WORKING PROFESSIONALS';
  order: number;
  image?: SanityImageRef;
  description: string;
  plans: PlanItem[];
}

export interface CustomPackageItem {
  _id: string;
  title: string;
  price: string;
  description: string;
  order: number;
  category?: string;
}

export interface TestimonialItem {
  _id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  order: number;
  featured?: boolean;
  photo?: SanityImageRef;
}
