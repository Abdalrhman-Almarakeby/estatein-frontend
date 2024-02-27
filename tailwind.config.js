/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // purple shades
        "purple-60": "#FF7A00",
        "purple-65": "#1A64FF",
        "purple-70": "#FF9533",
        "purple-75": "#FFCA99",
        "purple-90": "#FFE4CC",
        "purple-95": "#FFF1E5",
        "purple-97": "#FFF7F0",
        "purple-99": "#FFFCFA",
        // white shades
        "white-90": "#E4E4E7",
        "white-95": "#F1F1F3",
        "white-97": "#F7F7F8",
        "white-99": "#FCFCFD",
        // gray shades
        "gray-08": "#141414",
        "gray-10": "#1A1A1A",
        "gray-15": "#262626",
        "gray-20": "#333333",
        "gray-30": "#4D4D4D",
        "gray-40": "#666666",
        "gray-50": "#808080",
        "gray-60": "#999999",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
