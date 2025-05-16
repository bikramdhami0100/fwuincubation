const config = {
  plugins: ["@tailwindcss/postcss"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // If using App Router
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0047AB', // Royal blue - primary university color
        'brand-secondary': '#00796B', // Teal green - secondary color
        'brand-accent': '#FFD700', // Gold - accent color for highlights
        'brand-dark': '#0A2342',   // Dark navy blue - for footer/dark sections
        'brand-light': '#F0F8FF',  // Alice blue - light background
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};

export default config;
