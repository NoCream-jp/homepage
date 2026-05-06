// prettier.config.mjs
/** @type {import("prettier").Config} */
export default {
  // 基本設定（お好みで変更可能です）
  semi: true, // 文末にセミコロンをつける
  singleQuote: false, // ダブルクォートを使う（Astro/HTMLの標準）
  tabWidth: 2, // インデントのスペース数
  trailingComma: "es5", // 複数行の末尾にカンマをつける

  // プラグインの有効化
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // 必ず最後に記述する
  ],

  // Astroファイル用の個別設定
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
