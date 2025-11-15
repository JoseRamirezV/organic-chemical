// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const descriptionsCollection = defineCollection({
  type: 'content',
  schema: z.object({}),
});

export const collections = {
  'descriptions': descriptionsCollection,
};