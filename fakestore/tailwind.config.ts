import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/cover-shirts.jpg')",
      },
      gridTemplateColumns: {
        'responsive': 'repeat(auto-fill, minmax(300px, 1fr))'
      }
    },
  },
  plugins: [],
}
export default config
