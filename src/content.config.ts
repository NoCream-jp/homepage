import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
  }),
});

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    href: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  news: newsCollection,
};
