import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImage(source: any) {
  if (!source || !source.asset) {
    return null;
  }
  return builder.image(source);
}
