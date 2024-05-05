/** @type {import('tailwindcss').Config} */
/* eslint-env node */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "7rem",
      },
    },
    extend: {
      spacing: {
        4.5: "1.125rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        15: "3.75rem",
        24.5: "6.125rem",
        30: "7.5rem",
      },
      fontFamily: {
        urbanist: ["Urbanist", ...defaultTheme.fontFamily.sans],
      },

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
        "purple-60": "#703BF7",
        "purple-65": "#8254F8",
        "purple-70": "#946CF9",
        "purple-75": "#A685FA",
        "purple-90": "#DBCEFD",
        "purple-95": "#EDE7FE",
        "purple-97": "#F4F0FE",
        "purple-99": "#FBFAFF",
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
      screens: {
        "3xl": "1600px",
      },
      transitionDuration: {
        "10s": "10s",
      },
      borderColor: {
        DEFAULT: "#262626",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-container-break-out")],
};
