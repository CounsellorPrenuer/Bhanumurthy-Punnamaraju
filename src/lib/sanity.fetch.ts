import { client } from './sanity.client';
import {
  siteSettingsQuery,
  homePageQuery,
  founderQuery,
  servicesQuery,
  mentoriaPackagesQuery,
  customPackagesQuery,
  testimonialsQuery
} from './sanity.queries';
import {
  fallbackSiteSettings,
  fallbackHomePage,
  fallbackFounder,
  fallbackServices,
  fallbackPackages,
  fallbackCustomPackages,
  fallbackTestimonials
} from './sanity.defaults';
import {
  SiteSettings,
  HomePageData,
  FounderData,
  ServiceItem,
  MentoriaPackageItem,
  CustomPackageItem,
  TestimonialItem
} from '@/types/sanity';

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await client.fetch<SiteSettings>(siteSettingsQuery);
    return data || fallbackSiteSettings;
  } catch (error) {
    console.warn('Failed to fetch siteSettings from Sanity, using fallback:', error);
    return fallbackSiteSettings;
  }
}

export async function getHomePageData(): Promise<HomePageData> {
  try {
    const data = await client.fetch<HomePageData>(homePageQuery);
    return data || fallbackHomePage;
  } catch (error) {
    console.warn('Failed to fetch homePageData from Sanity, using fallback:', error);
    return fallbackHomePage;
  }
}

export async function getFounderData(): Promise<FounderData> {
  try {
    const data = await client.fetch<FounderData>(founderQuery);
    return data || fallbackFounder;
  } catch (error) {
    console.warn('Failed to fetch founderData from Sanity, using fallback:', error);
    return fallbackFounder;
  }
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const data = await client.fetch<ServiceItem[]>(servicesQuery);
    return data && data.length > 0 ? data : fallbackServices;
  } catch (error) {
    console.warn('Failed to fetch services from Sanity, using fallback:', error);
    return fallbackServices;
  }
}

export async function getMentoriaPackages(): Promise<MentoriaPackageItem[]> {
  try {
    const data = await client.fetch<MentoriaPackageItem[]>(mentoriaPackagesQuery);
    return data && data.length > 0 ? data : fallbackPackages;
  } catch (error) {
    console.warn('Failed to fetch mentoriaPackages from Sanity, using fallback:', error);
    return fallbackPackages;
  }
}

export async function getCustomPackages(): Promise<CustomPackageItem[]> {
  try {
    const data = await client.fetch<CustomPackageItem[]>(customPackagesQuery);
    return data && data.length > 0 ? data : fallbackCustomPackages;
  } catch (error) {
    console.warn('Failed to fetch customPackages from Sanity, using fallback:', error);
    return fallbackCustomPackages;
  }
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  try {
    const data = await client.fetch<TestimonialItem[]>(testimonialsQuery);
    return data && data.length > 0 ? data : fallbackTestimonials;
  } catch (error) {
    console.warn('Failed to fetch testimonials from Sanity, using fallback:', error);
    return fallbackTestimonials;
  }
}
