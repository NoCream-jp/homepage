import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://mi-nato.com",
  integrations: [
    // 既に mdx() が入っているなら既存設定を上書きしないように統合
    mdx({
      // mdx 側に remark プラグインを渡す
      remarkPlugins: [remarkGfm],
    }),
  ],
  markdown: {
    // さらに Astro の markdown 側でも gfm を明示
    gfm: true,
    remarkPlugins: [remarkGfm],
  },
});
