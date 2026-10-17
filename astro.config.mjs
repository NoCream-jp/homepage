import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://mi-nato.com",
  integrations: [mdx()],
  markdown: {
    processor: unified({
      gfm: true,
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
  prefetch: {
    // 記事などのリンク先をプリロードして高速化
    prefetchAll: true,
    defaultStrategy: "hover",
  },
});
