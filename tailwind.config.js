/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F6",
        text: "#333333",
        verse: "#004225",
        primary: "#006400",
        secondary: "#D4AF37",
        hoverGreen: "#009973",
        cardBg: "#EFEFEF",
        error: "#E57373",
        success: "#4CAF50",
      },
    },
  },
  plugins: [],
};
