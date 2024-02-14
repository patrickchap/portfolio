import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
