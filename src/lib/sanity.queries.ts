export const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  siteName,
  tagline,
  domain,
  logo,
  primaryColor,
  secondaryColor,
  contactInfo,
  socialLinks,
  primaryCta,
  footer,
  seo
}`;

export const homePageQuery = `*[_id == "homePage"][0]{
  hero,
  introduction,
  valuePropositions
}`;

export const founderQuery = `*[_id == "founder"][0]{
  name,
  title,
  brandName,
  photo,
  bio,
  philosophy,
  experienceYears,
  keyHighlights,
  credentials
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc){
  _id,
  title,
  shortDescription,
  fullDescription,
  icon,
  order,
  targetAudience,
  features
}`;

export const mentoriaPackagesQuery = `*[_type == "mentoriaPackage"] | order(order asc){
  _id,
  title,
  category,
  order,
  image,
  description,
  plans[]{
    _key,
    planName,
    type,
    price,
    duration,
    sessions,
    isPopular,
    badge,
    features,
    excludedFeatures
  }
}`;

export const customPackagesQuery = `*[_type == "customPackage"] | order(order asc){
  _id,
  title,
  price,
  description,
  order,
  category
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  _id,
  name,
  role,
  company,
  content,
  rating,
  order,
  featured,
  photo
}`;
