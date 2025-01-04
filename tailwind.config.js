import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212", // Dark theme background
        primary: "#FFFFFF", // Primary text color
        secondary: "#B3B3B3", // Secondary text color
        accent: "#00ADB5", // Accent color for highlights
        button: "#393E46", // Button background
        hover: "#222831", // Hover state color
        error: "#FF4C4C", // Error message color
        success: "#4CAF50", // Success message color
      },
    },
  },
  plugins: [daisyui],
};
