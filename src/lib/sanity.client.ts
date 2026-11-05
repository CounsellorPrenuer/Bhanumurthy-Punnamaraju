import { createClient } from '@sanity/client';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dzec4bbu';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Ensures live Sanity updates reflect immediately
  token: process.env.SANITY_API_READ_TOKEN || 'sk5JlifSs8a73gkedU9VEIefSYpnBXHpaZSuJG2kyiqAZW4fbR4t0yWzXrQaGmByqmGmVfBSEG5uQA50C4ohCmpHMHMLXLvzhch1bAijmYy9tYpVNZtgR5A9GqQ2IXu45CTleQu2u72bcWNWfa0DawMFORsz2hXdeluSBJ9hXS9CAKwgYn0K',
});
