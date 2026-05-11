// src/content.config.ts
import { defineCollection, z } from "astro:content";
// ▼ 新しい仕様：ファイルを読み込むための glob をインポート
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  // ▼ 旧仕様の type: "content" を削除し、代わりに loader を指定します
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
