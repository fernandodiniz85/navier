import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // É isto que diz ao Tailwind para obedecer ao seu botão
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // É isto que força a leitura dos seus componentes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;