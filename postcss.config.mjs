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
        'brand-primary': '#4A90E2', // A nice blue
        'brand-secondary': '#50E3C2', // A teal/mint
        'brand-accent': '#F5A623', // An orange/gold
        'brand-dark': '#2C3E50',   // A dark blue/charcoal
        'brand-light': '#F4F6F8',  // A very light gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Example: Using Inter font
      },
    },
  },
};

export default config;
