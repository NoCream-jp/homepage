import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// ブログ記事
const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional().default(false),
      description: z.string().optional(),
      image: z.string().optional(),
      images: z.array(image()).optional(),
      tags: z.array(z.string()).default([]),
    }),
});

// 活動履歴
const action = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/action",
  }),

  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

// 学習履歴
const learning = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/learning",
  }),

  schema: z.object({
    title: z.string().optional(),
    logo: z.string().optional(),
    date: z.union([z.string(), z.coerce.date()]).optional(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  blog,
  action,
  learning,
};
