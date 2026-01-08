import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lastModified: z.date().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    size: z.enum(['S', 'M', 'L', 'XL']).optional(),
  }),
});

export const collections = { posts };
